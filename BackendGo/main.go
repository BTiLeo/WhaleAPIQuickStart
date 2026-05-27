package main

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"net/http"
)

func main() {
	// 1. Define the minimal API endpoint handler
	http.HandleFunc("/api/getevents", func(w http.ResponseWriter, r *http.Request) {
		
		// Configure CORS to allow the frontend to call this API
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Handle preflight OPTIONS request
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Only allow POST methods for actual data fetching
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// 2. Prepare the payload for Whale API
		whaleApiUrl := "https://bti-odds.bsports.asia/api/SportsDataAPI/getevents"
		payload := map[string]string{"PKey": "ShowMeSample"}
		
		jsonData, err := json.Marshal(payload)
		if err != nil {
			http.Error(w, "Failed to encode payload", http.StatusInternalServerError)
			return
		}

		// 3. Forward the request to Whale API
		resp, err := http.Post(whaleApiUrl, "application/json", bytes.NewBuffer(jsonData))
		if err != nil {
			http.Error(w, "Error calling Whale API: "+err.Error(), http.StatusInternalServerError)
			return
		}
		
		// Ensure the response body is closed to prevent memory leaks
		defer resp.Body.Close()

		// 4. Return the exact JSON back to our frontend
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(resp.StatusCode)
		
		// Efficiently pipe the Whale API response directly to our client
		io.Copy(w, resp.Body)
	})

	// Start the server on port 5004
	port := ":5004"
	log.Printf("🚀 Go Backend Wrapper running on http://localhost%s\n", port)
	
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}