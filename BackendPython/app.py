from flask import Flask, jsonify
from flask_cors import CORS
import requests

# Initialize the Flask application
app = Flask(__name__)

# 1. Configure CORS to allow the frontend to call this API
# Allows cross-origin requests from any domain for local development
CORS(app)

# 3. Define the minimal API endpoint
@app.route('/api/getevents', methods=['POST'])
def get_events():
    # The actual Whale API endpoint
    whale_api_url = "https://bti-odds.bsports.asia/api/SportsDataAPI/getevents"
    
    # Inject the specific PKey required for the mock response
    payload = {"PKey": "ShowMeSample"}
    
    try:
        # Forward the request to Whale API
        response = requests.post(whale_api_url, json=payload)
        
        # Ensure we got a successful response (throws exception if 4xx or 5xx)
        response.raise_for_status() 
        
        # Return the exact JSON back to our frontend
        return jsonify(response.json())
        
    except requests.exceptions.RequestException as e:
        # Handle network errors or API failures gracefully
        return jsonify({"error": str(e), "message": "Error calling Whale API"}), 500

if __name__ == '__main__':
    # Run the server on port 5001 to avoid conflict with the C# backend (port 5000/5062)
    app.run(port=5001, debug=True)