const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();
const PORT = 5003;

// 1. Configure CORS to allow the frontend to call this API
// In production, restrict the origin to your trusted frontend domains
app.use(cors());

// Parse incoming JSON payloads (if any)
app.use(express.json());

// 2. Define the minimal API endpoint
app.post('/api/getevents', async (req, res) => {
    // The actual Whale API endpoint
    const whaleApiUrl = "https://bti-odds.bsports.asia/api/SportsDataAPI/getevents";

    // Inject the specific PKey required for the mock response
    const payload = { PKey: "ShowMeSample" };

    try {
        // Forward the request to Whale API using native Node.js fetch (Node v18+)
        const response = await fetch(whaleApiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Whale API responded with status: ${response.status}`);
        }

        // Parse the raw JSON from Whale API
        const data = await response.json();

        // Return the exact JSON back to our frontend
        res.status(200).json(data);

    } catch (error) {
        // Handle network errors or API failures gracefully
        console.error("Error calling Whale API:", error);
        res.status(500).json({ error: error.message, message: "Error calling Whale API" });
    }
});

// 3. Start the server on port 5003
app.listen(PORT, () => {
    console.log(`🚀 Node.js Backend Wrapper running on http://localhost:${PORT}`);
});