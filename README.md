# Whale API - QuickStart Integration 🐋

![Whale API Integration](https://img.shields.io/badge/API-Integration-127568?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

Welcome to the **Whale API QuickStart** repository. This project provides minimal, production-ready examples of how to integrate with the Whale Sports Data API using various backend languages.

## 🎯 Purpose

The goal of this repository is to demonstrate a secure and efficient way to fetch sports data (events, odds, markets) from Whale API. 

**Key Architectural Concept:**
To protect your Private Key (`PKey`), the frontend **never** communicates directly with the Whale API. Instead, the frontend calls a local "Backend Wrapper," which securely injects the `PKey` and forwards the request to the official Whale API.

## 📂 Repository Structure

This repository is designed with a **Shared Frontend** and multiple **Backend Wrappers**. You only need to run the frontend and ONE of the backend environments of your choice.

```text
WhaleAPIQuickStart/
├── frontend/             # 🎨 Shared HTML/CSS/JS UI (Vanilla, Zero-dependencies)
├── BackendCSharp/        # ⚙️ .NET 8 Minimal API Backend
├── BackendGo/            # 🏎️ Go (Golang) Native Backend
├── BackendNodeJS/        # 🟢 Express.js Backend
├── BackendPython/        # 🐍 Flask Backend
└── BackendPHP/           # 🐘 PHP Native Backend
```

## 🚀 How to Run (C# Example)

Follow these steps to run the integration example locally using .NET 8.

### 1. Start the Backend Wrapper
1. Open `WhaleAPIQuickStart.sln` in Visual Studio 2022.
2. Set `BackendCSharp` as the startup project.
3. Run the project (press `F5` or the green Play button).
4. Note the port it runs on (e.g., `http://localhost:5062`).

### 2. Start the Frontend
1. Open the `frontend/app.js` file.
2. Ensure the `BACKEND_API_URL` constant matches the URL and port from Step 1.
   ```javascript
   const BACKEND_API_URL = 'http://localhost:5062/api/getevents';
   ```
3. Double-click `frontend/index.html` to open it in any modern web browser. You should see a rendered sports event card.

## 🛡️ Security Best Practices

In this demonstration, we use a mocked key (`ShowMeSample`) for educational purposes to simulate a successful API response. In a real production environment:

1. **Never** hardcode your `PKey` in the source code. Use Environment Variables or a secure Key Vault.
2. **Never** expose your `PKey` to the frontend client (Browser/Mobile App). All API calls to Whale API must originate from your secure backend servers.
3. **Always** implement proper CORS policies and IP whitelisting on your backend wrapper to prevent unauthorized access.

---
*Powered by Whale API Documentation Team.*   