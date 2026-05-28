Whale API - QuickStart Integration

Welcome to the Whale API QuickStart repository. This project provides minimal, production-ready examples of how to integrate with the Whale Sports Data API using various backend languages.
System Architecture & Purpose

The goal of this repository is to demonstrate a secure and efficient way to fetch sports data (events, odds, markets) from Whale API.

Key Architectural Concept: To protect your Private Key (PKey), the frontend never communicates directly with the Whale API. Instead, the frontend calls a local "Backend Wrapper," which securely injects the PKey and forwards the request to the official Whale API.
Installation & Execution Guide
1. Obtain the Source Code

You can acquire the project files using either Git or a direct download:

Option A: Clone via Git (Recommended for Developers)
```bash
git clone https://github.com/BTiLeo/WhaleAPIQuickStart.git
cd WhaleAPIQuickStart
```

Option B: Direct Download
Download the project as a ZIP file, extract it, and open the folder in your terminal or code editor.
2. Start the Backend Wrapper

Select the backend language you are most comfortable with and start the server. Ensure you note the specific port number for your chosen environment:

{% tabs %}
{% tab title="C# (.NET 8)" %}
```bash
cd BackendCSharp
dotnet run
```
The server will start at http://localhost:5000
{% endtab %}

{% tab title="Python (Flask)" %}
```bash
cd BackendPython
pip install -r requirements.txt
python app.py
```
The server will start at http://localhost:5001
{% endtab %}

{% tab title="PHP" %}
```bash
cd BackendPHP
php -S localhost:5002
```
The server will start at http://localhost:5002
{% endtab %}

{% tab title="Node.js" %}
```bash
cd BackendNodeJS
npm install
npm start
```
The server will start at http://localhost:5003
{% endtab %}

{% tab title="Go" %}
```bash
cd BackendGo
go run main.go
```
The server will start at http://localhost:5004
{% endtab %}
{% endtabs %}
3. Configure and Launch the Frontend

    Open the frontend/app.js file in your code editor.

    Locate the BACKEND_API_URL constant.

    Ensure the port matches the backend environment you just started (e.g., if you started Node.js, change the port to 5003).

    ```javascript
    // Example configured for Node.js (Port 5003)
    const BACKEND_API_URL = 'http://localhost:5003/api/getevents';
    ```

    Double-click the frontend/index.html file to open it in any modern web browser. You should see a rendered sports event card.

Repository Structure

This repository is designed with a Shared Frontend and multiple Backend Wrappers. You only need to run the frontend and ONE of the backend environments of your choice.

```text
WhaleAPIQuickStart/
├── frontend/          # Shared HTML/CSS/JS UI (Vanilla, Zero-dependencies)
├── BackendCSharp/     # .NET 8 Minimal API Backend
├── BackendPython/     # Python Flask Backend
├── BackendPHP/        # PHP Native Backend
├── BackendNodeJS/     # Node.js Express Backend
└── BackendGo/         # Go (Golang) Native Backend
```
Security Best Practices

In this demonstration, we use a mocked key (ShowMeSample) for educational purposes to simulate a successful API response. In a real production environment:

    Never hardcode your PKey in the source code. Use Environment Variables or a secure Key Vault.

    Never expose your PKey to the frontend client (Browser/Mobile App). All API calls must originate from your secure backend servers.

    Always implement proper CORS policies and IP whitelisting on your backend wrapper to prevent unauthorized access.

Powered by BTi Integration Team.