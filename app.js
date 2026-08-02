// ============================================
// Agentic AI GRC
// app.js
// ============================================


// --------------------------------------------
// Navigation
// --------------------------------------------

function setActiveMenu(selectedButton) {

    document
        .querySelectorAll(".navigation .menu-item")
        .forEach(button => {
            button.classList.remove("active");
        });

    selectedButton.classList.add("active");

}



// --------------------------------------------
// Render Center Card
// --------------------------------------------

function renderCard(title, description) {

    const container =
        document.getElementById("contentCard");

    container.innerHTML = `

        <div class="center-card">

            <div class="card-title">
                ${title}
            </div>

            <div class="card-description">
                ${description}
            </div>

        </div>

    `;

}



// --------------------------------------------
// Home
// --------------------------------------------

function showHome(button) {

    setActiveMenu(button);

    renderCard(

        "Home",

        "Enterprise governance reference implementation for autonomous AI agents. Demonstrates governance, risk, compliance, guardrails and enterprise system integration."

    );

}



// --------------------------------------------
// Agentic AI GRC
// --------------------------------------------

function showAgenticGRC(button) {

    setActiveMenu(button);

    renderCard(

        "Agentic AI GRC",

        "Reference architecture for governing enterprise AI agents through standardized governance, enterprise controls, compliance frameworks, risks and operational guardrails."

    );

}



// --------------------------------------------
// Customer Registration Agent
// --------------------------------------------

function loadAgent(agentId, button) {

    setActiveMenu(button);

    renderCard(

        "Customer Registration Agent",

        "Loading enterprise governance model..."

    );

}



// --------------------------------------------
// Customer Authentication Agent
// --------------------------------------------

function showAuthentication(button) {

    setActiveMenu(button);

    renderCard(

        "Customer Authentication Agent",

        "Pilot implementation coming soon."

    );

}



// --------------------------------------------
// Customer Authorization Agent
// --------------------------------------------

function showAuthorization(button) {

    setActiveMenu(button);

    renderCard(

        "Customer Authorization Agent",

        "Pilot implementation coming soon."

    );

}



// --------------------------------------------
// Default Landing Page
// --------------------------------------------

window.onload = function () {

    const homeButton =
        document.getElementById("homeMenu");

    showHome(homeButton);

};
