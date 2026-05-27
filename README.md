# Whale API - QuickStart Integration 🐳

[![View on GitHub](https://img.shields.io/badge/View_Source_on-GitHub-181717?logo=github&style=for-the-badge)](https://github.com/BTiLeo/WhaleAPIQuickStart)

Welcome to the **Whale API QuickStart** repository. This project provides minimal, production-ready examples of how to integrate with the Whale Sports Data API using various backend languages.

## 🎯 Purpose
The goal of this repository is to demonstrate a secure and efficient way to fetch sports data (events, odds, markets) from Whale API.

**Key Architectural Concept:** To protect your Private Key (`PKey`), the frontend **never** communicates directly with the Whale API. Instead, the frontend calls a local "Backend Wrapper," which securely injects the `PKey` and forwards the request to the official Whale API.

---

## 🚀 How to Run (Step-by-Step)

### 1. Clone the Repository
First, download the complete project to your local machine:
```bash
git clone [https://github.com/BTiLeo/WhaleAPIQuickStart.git](https://github.com/BTiLeo/WhaleAPIQuickStart.git)
cd WhaleAPIQuickStart
```

### 2. Start the Backend Wrapper (Choose your language)
Select the backend language you are most comfortable with and start the server:

{% tabs %}
{% tab title="C# (.NET 8)" %}
```bash
cd BackendCSharp
dotnet run
```
*The server will start at `http://localhost:5062`*
{% endtab %}

{% tab title="Node.js" %}
```bash
cd BackendNodeJS
npm install
npm start
```
*The server will start at `http://localhost:3000`*
{% endtab %}

{% tab title="Python (Flask)" %}
```bash
cd BackendPython
pip install -r requirements.txt
python app.py
```
*The server will start at `http://localhost:5000`*
{% endtab %}

{% tab title="Go" %}
```bash
cd BackendGo
go run main.go
```
*The server will start at `http://localhost:8080`*
{% endtab %}

{% tab title="PHP" %}
```bash
cd BackendPHP
php -S localhost:8000
```
*The server will start at `http://localhost:8000`*
{% endtab %}
{% endtabs %}

### 3. Start the Frontend
1. Open the `frontend/index.html` file in your code editor.
2. Locate the `BACKEND_API_URL` constant.
3. Ensure the port matches the backend you just started (e.g., if you started Node.js, change it to `3000`).
   ```javascript
   const BACKEND_API_URL = 'http://localhost:3000/api/getevents';
   ```
4. Double-click `frontend/index.html` to open it in any modern web browser. You should see a rendered sports event card.

---

## 📁 Repository Structure
This repository is designed with a **Shared Frontend** and multiple **Backend Wrappers**. You only need to run the frontend and ONE of the backend environments of your choice.

```text
WhaleAPIQuickStart/
├── frontend/          # 🎨 Shared HTML/CSS/JS UI (Vanilla, Zero-dependencies)
├── BackendCSharp/     # ⚙️ .NET 8 Minimal API Backend
├── BackendGo/         # 🏎️ Go (Golang) Native Backend
├── BackendNodeJS/     # 🟢 Express.js Backend
├── BackendPython/     # 🐍 Flask Backend
└── BackendPHP/        # 🐘 PHP Native Backend
```

## 🛡️ Security Best Practices
In this demonstration, we use a mocked key (`ShowMeSample`) for educational purposes to simulate a successful API response. In a real production environment:

1. **Never** hardcode your `PKey` in the source code. Use Environment Variables or a secure Key Vault.
2. **Never** expose your `PKey` to the frontend client (Browser/Mobile App). All API calls must originate from your secure backend servers.
3. **Always** implement proper CORS policies and IP whitelisting on your backend wrapper to prevent unauthorized access.
---
*Powered by BTi Integration Team.*   