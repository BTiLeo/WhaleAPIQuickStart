<?php
// 1. Configure CORS to allow the frontend to call this API
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 2. Define the API logic (Only accept POST requests for this endpoint)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) === '/api/getevents') {
    
    // The actual Whale API endpoint
    $whaleApiUrl = "https://bti-odds.bsports.asia/api/SportsDataAPI/getevents";
    
    // Inject the specific PKey required for the mock response
    $payload = json_encode(["PKey" => "ShowMeSample"]);
    
    // Initialize cURL session
    $ch = curl_init($whaleApiUrl);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($payload)
    ]);
    
    // Execute the request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Close cURL session
    curl_close($ch);
    
    // Return the response to the frontend
    header('Content-Type: application/json');
    http_response_code($httpCode);
    echo $response;
    exit();
}

// Fallback for not found routes
http_response_code(404);
echo json_encode(["error" => "Endpoint not found"]);
?>