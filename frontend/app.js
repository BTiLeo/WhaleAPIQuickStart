/**
 * Configuration
 * Defines the URL of the local backend wrapper API.
 */
// Uncomment the one you are using:
// const BACKEND_API_URL = 'http://localhost:5062/api/getevents'; // C#
// const BACKEND_API_URL = 'http://localhost:5001/api/getevents'; // Python
// const BACKEND_API_URL = 'http://localhost:5002/api/getevents'; // PHP
// const BACKEND_API_URL = 'http://localhost:5003/api/getevents'; // Node.js
// const BACKEND_API_URL = 'http://localhost:5004/api/getevents'; // Go
const BACKEND_API_URL = 'http://localhost:5062/api/getevents';

/**
 * Main function to fetch data and render the UI.
 */
async function loadEvents() {
    const container = document.getElementById('event-container');

    try {
        // 1. Fetch data from our local backend wrapper
        const response = await fetch(BACKEND_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}) // Backend handles the PKey injection
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 2. Extract necessary data points
        const event = data.events[0];
        const participants = event.participants;

        // Target the first market (e.g., Asian Handicap or Over/Under with 2 selections)
        const market = event.markets[0];
        const selections = market.selections;

        // Extract the TWO selections safely
        const selection1 = selections[0] || { name: 'Selection 1', trueOdds: '-' };
        const selection2 = selections[1] || { name: 'Selection 2', trueOdds: '-' };

        // 3. Format Date/Time
        const eventDate = new Date(event.startEventDate);
        const formattedDate = eventDate.toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        // 4. Render the UI (Only 2 odd-boxes are generated)
        container.innerHTML = `
            <div class="event-card">
                <div class="card-header">
                    🏆 ${event.leagueName}
                </div>
                <div class="card-subheader">
                    <span>${formattedDate}</span>
                    <span style="color: #e74c3c;">BTI</span>
                </div>
                
                <div class="match-info">
                    <div class="team">
                        <span>🇸🇪</span> <span>${participants[0].name}</span>
                    </div>
                    <div class="vs">VS</div>
                    <div class="team team-away">
                        <span>${participants[1].name}</span> <span>🇹🇳</span>
                    </div>
                </div>

                <div class="odds-container">
                    <div class="odd-box">
                        <div class="odd-name">${selection1.name}</div>
                        <div class="odd-value">${selection1.trueOdds}</div>
                    </div>
                    <div class="odd-box">
                        <div class="odd-name">${selection2.name}</div>
                        <div class="odd-value">${selection2.trueOdds}</div>
                    </div>
                </div>
            </div>
        `;

    } catch (error) {
        console.error("Fetch error:", error);
        container.innerHTML = `
            <div style="background: #fee; padding: 15px; border-radius: 8px; color: #c00;">
                <p><strong>Error fetching data:</strong> ${error.message}</p>
                <p>Please ensure your backend wrapper is running on <code>${BACKEND_API_URL}</code>.</p>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', loadEvents);