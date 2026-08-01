// -----------------------------
// Navigation
// -----------------------------

function setActive(selectedButton) {

    const buttons = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {

        button.classList.remove("active");

    });

    selectedButton.classList.add("active");

}



// -----------------------------
// Home
// -----------------------------

function showHome(button) {

    setActive(button);

    document.getElementById("contentCard").innerHTML = `

        <div class="card">

            <div class="card-title">
                Home
            </div>

            <div class="card-text">

                Welcome to the Agentic AI GRC pilot.

                <br><br>

                Select an item from the left navigation
                to explore the governance model.

            </div>

        </div>

    `;

}



// -----------------------------
// Agentic AI GRC
// -----------------------------

function showAgenticGRC(button) {

    setActive(button);

    document.getElementById("contentCard").innerHTML = `

        <div class="card">

            <div class="card-title">

                Agentic AI GRC

            </div>

            <div class="card-text">

                Enterprise pilot demonstrating how
                autonomous AI agents are governed using
                standardized Governance, Risk,
                Compliance and Guardrails.

                <br><br>

                Current Pilot

                <ul>

                    <li>Customer Registration Agent</li>

                    <li>JSON-driven architecture</li>

                    <li>Enterprise governance model</li>

                </ul>

            </div>

        </div>

    `;

}



// -----------------------------
// Customer Registration
// -----------------------------

function loadAgent(agentId, button) {

    setActive(button);

    document.getElementById("contentCard").innerHTML = `

        <div class="card">

            <div class="card-title">

                Customer Registration Agent

            </div>

            <div class="card-text">

                JSON rendering will be implemented
                in the next step.

            </div>

        </div>

    `;

}



// -----------------------------
// Customer Authentication
// -----------------------------

function showAuthentication(button) {

    setActive(button);

    document.getElementById("contentCard").innerHTML = `

        <div class="card">

            <div class="card-title">

                Customer Authentication Agent

            </div>

            <div class="card-text">

                Coming soon.

            </div>

        </div>

    `;

}



// -----------------------------
// Customer Authorization
// -----------------------------

function showAuthorization(button) {

    setActive(button);

    document.getElementById("contentCard").innerHTML = `

        <div class="card">

            <div class="card-title">

                Customer Authorization Agent

            </div>

            <div class="card-text">

                Coming soon.

            </div>

        </div>

    `;

}



// -----------------------------
// Default Landing Page
// -----------------------------

window.onload = function () {

    showHome(document.getElementById("homeMenu"));

};
