// ============================================
// Agentic AI GRC
// app.js
// ============================================


// --------------------------------------------
// Navigation
// --------------------------------------------

function setActiveMenu(selectedButton) {

    document
        .querySelectorAll(".sidebar .menu-item")
        .forEach(button => {
            button.classList.remove("active");
        });

    selectedButton.classList.add("active");

}

function toggleGRC(button) {

    const children =
        document.getElementById("grcChildren");

    const arrow =
        document.getElementById("grcArrow");


    children.classList.toggle("open");


    if (children.classList.contains("open")) {

        arrow.textContent = "▼";

    } else {

        arrow.textContent = "▶";

    }

/*
    setActiveMenu(button);


    renderCard(

        "Agentic AI GRC",

        "Reference architecture for governing enterprise AI agents through standardized governance, enterprise controls, compliance frameworks, risks and operational guardrails."

    ); */

}

function openPortfolio(button) {

    setActiveMenu(button);

    window.open(
        "https://krishnakumar-krishnaswamy.github.io/",
        "_blank"
    );

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

    "Agentic AI GRC Pilot",

    `
    <br>

    <p>
    Pilot GRC reference model for autonomous AI agents focused on
    Customer Identity and Access Management (CIAM).
    </p>

    <br>

    <p>
    Demonstrates mapping AI agents with relevant enterprise governance,
    risk, compliance, guardrails, and industry standards.
    </p>

    <br>

    <p>
    Scope intentionally limited to a small set of representative AI agents
    to demonstrate the governance model rather than a complete enterprise implementation.
    </p>

    `

);

}


// --------------------------------------------
// Agentic AI GRC
// --------------------------------------------

function showAgenticGRC(button) {

    setActiveMenu(button);

    renderCard(

        "Agentic AI GRC Pilot",

        `
        <br>

        <p>

        <strong>Problem Statement</strong><br>

        As autonomous AI agents increasingly interact with enterprise systems, governing the AI agent itself becomes an important consideration alongside application, security, and data governance.

        </p>

        <br>

        <p>

        <strong>Solution</strong><br>

        This pilot develops a lightweight governance reference model for autonomous AI agents using Customer Identity and Access Management (CIAM) as the reference domain.

        <br><br>

        Each AI agent is modeled as an independently governed entity with mappings to enterprise systems, governance controls, risks, compliance obligations, guardrails, and relevant industry standards.

        </p>

        `

    );

}



// --------------------------------------------
// Customer Registration Agent
// --------------------------------------------

function loadAgent(agentId, button) {

    document
        .getElementById("grcChildren")
        .classList.add("open");

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

    document
        .getElementById("grcChildren")
        .classList.add("open");

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

    document
        .getElementById("grcChildren")
        .classList.add("open");
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
