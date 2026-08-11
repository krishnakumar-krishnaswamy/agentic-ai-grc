// ============================================
// Agentic AI GRC Pilot
// app.js
// ============================================

// ============================================
// Trusted AI Agent Registry
// ============================================

const customerRegistrationAgentRegistry = {

    identityVerificationAgent: {

    name: "Identity Verification Agent",

    governance: [

    {
        title: "Agent Identity Management",

        businessRationale:
            "Establishes trusted and accountable AI agent identity.",

        guardrail:
            "Requires a unique enterprise identity for every AI agent.",

        industryReference:
            "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
    },

    {
        title: "Identity Lifecycle Governance",

        businessRationale:
            "Controls AI agent lifecycle under enterprise governance.",

        guardrail:
            "Requires controlled registration, modification, suspension, and retirement.",

        industryReference:
            "ISO/IEC 42001 — AI management system; ISO/IEC 27001 — Access control."
    },

    {
        title: "Authentication Governance",

        businessRationale:
            "Ensures trusted and accountable AI agent interactions.",

        guardrail:
            "Requires authenticated agent-to-agent interactions before access.",

        industryReference:
            "NIST AI RMF — Govern; NIST SP 800-53 — Identification and Authentication."
    }

],
        
   risks: [

    {
        title: "Identity Fraud",

        businessRationale:
            "Reduces the risk of fraudulent identity verification decisions.",

        guardrail:
            "Requires identity evidence and verification signals to be validated before a decision.",

        industryReference:
            "NIST AI RMF — Manage; NIST SP 800-53 — Identification and Authentication."
    },

    {
        title: "Unauthorized Identity Verification",

        businessRationale:
            "Prevents unauthorized users or agents from initiating identity verification.",

        guardrail:
            "Requires authenticated and authorized requests before verification is performed.",

        industryReference:
            "NIST SP 800-53 — Access Control and Identification & Authentication; ISO/IEC 27001."
    },

    {
        title: "Identity Data Exposure",

        businessRationale:
            "Reduces exposure of sensitive customer identity information.",

        guardrail:
            "Limits identity data access, transmission, retention, and disclosure to authorized purposes.",

        industryReference:
            "ISO/IEC 27001 — Information security controls; NIST SP 800-53 — Security and Privacy Controls."
    }

],

   compliance: [

    {
        title: "AI Governance Compliance",

        businessRationale:
            "Aligns AI agent operation with enterprise AI governance obligations.",

        guardrail:
            "Requires documented governance ownership, controls, and evidence for the AI agent.",

        industryReference:
            "ISO/IEC 42001 — AI management system; EU AI Act — AI governance requirements."
    },

    {
        title: "Identity Data Protection",

        businessRationale:
            "Protects customer identity information handled during verification.",

        guardrail:
            "Limits identity data access and requires protection throughout processing.",

        industryReference:
            "ISO/IEC 27001 — Information security; NIST SP 800-53 — Security and Privacy Controls."
    },

    {
        title: "Privacy and Regulatory Compliance",

        businessRationale:
            "Ensures identity verification operates within applicable privacy obligations.",

        guardrail:
            "Requires applicable privacy, retention, and data-handling requirements to be enforced.",

        industryReference:
            "Applicable federal and state privacy regulations; PII protection requirements."
    }

],
        
    guardrails: [

        "Identity Verification Validation",

        "Privileged Access Validation",

        "Audit Logging"

    ],

    industryReferences: [

        "NIST AI RMF",

        "ISO/IEC 42001",

        "ISO/IEC 27001",

        "Google Secure AI Framework (SAIF)"

    ]

},

    consentManagementAgent: {

        name: "Consent Management Agent",

        governance: [],

        risks: [],

        guardrails: [],

        industryReferences: []

    },

    customerDataAgent: {

        name: "Customer Data Agent",

        governance: [],

        risks: [],

        guardrails: [],

        industryReferences: []

    },

    notificationAgent: {

        name: "Notification Agent",

        governance: [],

        risks: [],

        guardrails: [],

        industryReferences: []

    }

};

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

// --------------------------------------------
// Trusted AI Agent Selection
// --------------------------------------------

function selectTrustedAgent(agentKey, selectedButton) {

    document
        .querySelectorAll(".agent-item")
        .forEach(button => {
            button.classList.remove("active");
        });

    selectedButton.classList.add("active");

    document.getElementById("grcPanel").innerHTML =
        renderGRC(
            customerRegistrationAgentRegistry[agentKey]
        );

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
// Render Enterprise Chips
// --------------------------------------------

function renderChips(items) {

    return items.map(item => `

        <span class="grc-chip">

            ${item}

        </span>

    `).join("");

}

// --------------------------------------------
// Render GRC Panel
// --------------------------------------------

function renderGRC(agent) {

    return `

<div class="panel-title">

    <span
        class="generate-grc-btn"
        onclick="buildGRCProfile()">

        ▶ Build GRC Profile

    </span>

</div>

    `;

}


function renderGeneratedProfile(agent) {

    return `

        <div id="grcContent">

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/governance.svg">

                    <span>Governance</span>

                </div>

                <div class="chip-container">

                    ${agent.governance.map(item => `

                        <div class="grc-chip">

                            ✓ ${item.title}

                            <br>

                            <span class="business-rationale">

                                Business Rationale:
                                ${item.businessRationale}

                            </span>

                        </div>

                    `).join("")}

                </div>

            </div>

            <hr class="panel-divider">

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/risk.svg">

                    <span>Risks</span>

                </div>

                <div class="chip-container">

                    ${renderChips(agent.risks)}

                </div>

            </div>

            <hr class="panel-divider">

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/guardrails.svg">

                    <span>Guardrails</span>

                </div>

                <div class="chip-container">

                    ${renderChips(agent.guardrails)}

                </div>

            </div>

            <hr class="panel-divider">

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/industry-references.svg">

                    <span>Industry References</span>

                </div>

                <div class="chip-container">

                    ${renderChips(agent.industryReferences)}

                </div>

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
// Customer Registration Agent
// --------------------------------------------

function loadAgent(agentId, button) {

    document
        .getElementById("grcChildren")
        .classList.add("open");

    setActiveMenu(button);

    const container =
        document.getElementById("contentCard");

    container.innerHTML = `

    <div class="center-card">

        <div class="card-header">

    <img src="assets/icons/user-plus.svg">

    <span>Customer Registration Agent</span>

</div>

        <div class="card-description">

            Autonomous AI agent responsible for customer onboarding.

        </div>

        <hr class="card-divider">

        <div class="agent-layout">

            <div class="agent-panel">

                <div class="panel-title">

    <img src="assets/icons/trusted-agents.svg">

    <span>Trusted AI Agent Interactions</span>

</div>

<hr class="panel-divider">

                <button
    class="agent-item active"
    onclick="selectTrustedAgent('identityVerificationAgent', this)">

    <img src="assets/icons/agent.svg">

    <span>Identity Verification Agent</span>

</button>

                <button
    class="agent-item"
    onclick="selectTrustedAgent('consentManagementAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Consent Management Agent</span>

                </button>

                <button
    class="agent-item"
    onclick="selectTrustedAgent('customerDataAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Customer Data Agent</span>

                </button>

                <button
    class="agent-item"
    onclick="selectTrustedAgent('notificationAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Notification Agent</span>

                </button>

            </div>


            <div
    class="grc-panel"
    id="grcPanel">

    ${renderGRC(
        customerRegistrationAgentRegistry.identityVerificationAgent
    )}

</div>

        </div>

    </div>

    `;

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
// Build GRC Profile
// --------------------------------------------

function buildGRCProfile() {

    let dots = 1;

    document.getElementById("grcHeader").innerHTML = `

    <div class="panel-title">

        <img src="assets/icons/building-grc.svg">

        <span id="buildingStatus">

            Building GRC Profile.

        </span>

    </div>

`;

    const buildTimer = setInterval(() => {

        dots++;

        document.getElementById("buildingStatus").textContent =
            "Building GRC Profile" + ".".repeat(dots);

        if (dots === 5) {

            clearInterval(buildTimer);

            document.getElementById("grcHeader").innerHTML = `

                <div class="panel-title">

                    <img src="assets/icons/grc.svg">

                    <span>GRC</span>

                </div>

                <hr class="panel-divider">

            `;

            const agent =
                customerRegistrationAgentRegistry.identityVerificationAgent;

            document.getElementById("grcPanel").innerHTML +=
                renderGeneratedProfile(agent);

        }

    }, 500);

}
// --------------------------------------------
// Default Landing Page
// --------------------------------------------

window.onload = function () {

    const homeButton =
        document.getElementById("homeMenu");

    showHome(homeButton);

};
