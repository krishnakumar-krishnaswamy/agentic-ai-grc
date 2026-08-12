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

    governance: [

        {
            title: "Consent Lifecycle Governance",

            businessRationale:
                "Controls consent from capture through withdrawal.",

            guardrail:
                "Requires controlled consent capture, update, and withdrawal.",

            industryReference:
                "ISO/IEC 42001 — AI management system; NIST AI RMF — Govern."
        },

        {
            title: "Consent Policy Governance",

            businessRationale:
                "Ensures consent follows approved policies and purposes.",

            guardrail:
                "Requires consent decisions to follow approved policies and authorization.",

            industryReference:
                "ISO/IEC 42001 — AI governance; ISO/IEC 27001 — Access control."
        },

        {
            title: "Consent Decision Accountability",

            businessRationale:
                "Establishes accountability for automated consent decisions.",

            guardrail:
                "Requires consent decisions to be attributable to authorized actors.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001."
        }

    ],

    risks: [

        {
            title: "Invalid Consent",

            businessRationale:
                "Reduces processing based on invalid or incomplete consent.",

            guardrail:
                "Requires consent validity checks before dependent actions.",

            industryReference:
                "NIST AI RMF — Manage; applicable privacy requirements."
        },

        {
            title: "Unauthorized Consent Modification",

            businessRationale:
                "Prevents unauthorized changes to customer consent.",

            guardrail:
                "Requires authenticated and authorized consent changes.",

            industryReference:
                "NIST SP 800-53 — Access Control; ISO/IEC 27001."
        },

        {
            title: "Consent Data Exposure",

            businessRationale:
                "Reduces exposure of consent records and personal information.",

            guardrail:
                "Limits consent data access to authorized purposes.",

            industryReference:
                "ISO/IEC 27001 — Information security; NIST SP 800-53."
        }

    ],

    compliance: [

        {
            title: "Consent Governance Compliance",

            businessRationale:
                "Aligns consent management with governance obligations.",

            guardrail:
                "Requires documented ownership, controls, and compliance evidence.",

            industryReference:
                "ISO/IEC 42001; applicable privacy and consent requirements."
        },

        {
            title: "Privacy and Consent Protection",

            businessRationale:
                "Protects customer preferences and consent information.",

            guardrail:
                "Requires protection throughout consent data processing.",

            industryReference:
                "ISO/IEC 27001; NIST SP 800-53 — Security and Privacy Controls."
        },

        {
            title: "Consent Record Retention",

            businessRationale:
                "Ensures consent records meet retention requirements.",

            guardrail:
                "Requires approved retention, auditability, and deletion controls.",

            industryReference:
                "ISO/IEC 27001; applicable privacy and records requirements."
        }

    ],

    guardrails: [

        "Consent Status Validation",

        "Consent Change Authorization",

        "Consent Audit Logging"

    ],

    industryReferences: [

        "NIST AI RMF",

        "ISO/IEC 42001",

        "ISO/IEC 27001",

        "NIST SP 800-53"

    ]

},



    customerDataAgent: {

    name: "Customer Data Agent",

    governance: [

        {
            title: "Customer Data Governance",

            businessRationale:
                "Establishes accountable governance for customer data handled by the AI agent.",

            guardrail:
                "Requires defined ownership, approved data policies, and controlled data usage.",

            industryReference:
                "ISO/IEC 42001 — AI management system; NIST AI RMF — Govern."
        },

        {
            title: "Data Access Governance",

            businessRationale:
                "Ensures customer data access follows approved business and security requirements.",

            guardrail:
                "Requires authorized access based on identity, role, purpose, and business need.",

            industryReference:
                "ISO/IEC 27001 — Access control; NIST SP 800-53 — Access Control."
        },

        {
            title: "Customer Data Lifecycle Governance",

            businessRationale:
                "Controls customer data throughout collection, use, retention, and disposal.",

            guardrail:
                "Requires controlled data collection, retention, modification, and deletion.",

            industryReference:
                "ISO/IEC 42001; ISO/IEC 27001 — Information security."
        }

    ],

    risks: [

        {
            title: "Unauthorized Data Access",

            businessRationale:
                "Reduces unauthorized access to customer information.",

            guardrail:
                "Requires authenticated and authorized access before data retrieval.",

            industryReference:
                "NIST SP 800-53 — Access Control; ISO/IEC 27001."
        },

        {
            title: "Customer Data Exposure",

            businessRationale:
                "Reduces exposure of sensitive customer information.",

            guardrail:
                "Limits customer data access, transmission, and disclosure to authorized purposes.",

            industryReference:
                "ISO/IEC 27001 — Information security; NIST SP 800-53."
        },

        {
            title: "Improper Data Use",

            businessRationale:
                "Reduces use of customer data beyond approved business purposes.",

            guardrail:
                "Requires data usage to remain within approved purpose and policy boundaries.",

            industryReference:
                "NIST AI RMF — Manage; applicable privacy requirements."
        }

    ],

    compliance: [

        {
            title: "Customer Data Governance Compliance",

            businessRationale:
                "Aligns customer data processing with enterprise governance obligations.",

            guardrail:
                "Requires documented ownership, controls, and compliance evidence.",

            industryReference:
                "ISO/IEC 42001; ISO/IEC 27001."
        },

        {
            title: "Privacy and Data Protection",

            businessRationale:
                "Protects customer information throughout AI-enabled processing.",

            guardrail:
                "Requires appropriate protection throughout data collection and processing.",

            industryReference:
                "ISO/IEC 27001; NIST SP 800-53 — Security and Privacy Controls."
        },

        {
            title: "Data Retention Compliance",

            businessRationale:
                "Ensures customer data follows approved retention requirements.",

            guardrail:
                "Requires retention, archival, and deletion to follow approved policies.",

            industryReference:
                "ISO/IEC 27001; applicable privacy and records requirements."
        }

    ],

    guardrails: [

        "Customer Data Access Validation",

        "Data Purpose Validation",

        "Customer Data Audit Logging"

    ],

    industryReferences: [

        "NIST AI RMF",

        "ISO/IEC 42001",

        "ISO/IEC 27001",

        "NIST SP 800-53"

    ]

},
    


    notificationAgent: {

    name: "Notification Agent",

    governance: [

        {
            title: "Notification Governance",

            businessRationale:
                "Establishes accountable governance for AI-driven customer notifications.",

            guardrail:
                "Requires defined ownership, approved notification policies, and controlled delivery.",

            industryReference:
                "ISO/IEC 42001 — AI management system; NIST AI RMF — Govern."
        },

        {
            title: "Notification Policy Governance",

            businessRationale:
                "Ensures notifications follow approved business and communication policies.",

            guardrail:
                "Requires notification content, purpose, and delivery to follow approved policies.",

            industryReference:
                "ISO/IEC 42001 — AI governance; ISO/IEC 27001."
        },

        {
            title: "Notification Decision Accountability",

            businessRationale:
                "Establishes accountability for automated notification decisions.",

            guardrail:
                "Requires notification decisions to be attributable to authorized actors or systems.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001."
        }

    ],

    risks: [

        {
            title: "Unauthorized Notification",

            businessRationale:
                "Prevents unauthorized customer communications.",

            guardrail:
                "Requires authenticated and authorized notification requests.",

            industryReference:
                "NIST SP 800-53 — Access Control; ISO/IEC 27001."
        },

        {
            title: "Incorrect Notification",

            businessRationale:
                "Reduces delivery of inaccurate or inappropriate customer messages.",

            guardrail:
                "Requires notification content and recipient context to be validated before delivery.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001."
        },

        {
            title: "Notification Data Exposure",

            businessRationale:
                "Reduces exposure of customer information through notifications.",

            guardrail:
                "Limits notification content to authorized data and approved communication purposes.",

            industryReference:
                "ISO/IEC 27001 — Information security; NIST SP 800-53."
        }

    ],

    compliance: [

        {
            title: "Notification Governance Compliance",

            businessRationale:
                "Aligns AI-driven notifications with enterprise governance obligations.",

            guardrail:
                "Requires documented ownership, controls, and compliance evidence.",

            industryReference:
                "ISO/IEC 42001; applicable communication requirements."
        },

        {
            title: "Privacy and Notification Protection",

            businessRationale:
                "Protects customer information included in notifications.",

            guardrail:
                "Requires notification data to be protected during preparation and delivery.",

            industryReference:
                "ISO/IEC 27001; NIST SP 800-53 — Security and Privacy Controls."
        },

        {
            title: "Notification Retention Compliance",

            businessRationale:
                "Ensures notification records follow approved retention requirements.",

            guardrail:
                "Requires notification records to follow approved retention and deletion policies.",

            industryReference:
                "ISO/IEC 27001; applicable privacy and records requirements."
        }

    ],

    guardrails: [

        "Notification Authorization Validation",

        "Notification Content Validation",

        "Notification Audit Logging"

    ],

    industryReferences: [

        "NIST AI RMF",

        "ISO/IEC 42001",

        "ISO/IEC 27001",

        "NIST SP 800-53"

    ]
        }    
    
      
}; 
    

let selectedTrustedAgent = "identityVerificationAgent";

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

    selectedTrustedAgent = agentKey;
    
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

        <div id="grcHeader">

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

            <!-- Governance -->

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

                            <br>

                            <span class="guardrail">

                                Guardrail:
                                ${item.guardrail}

                            </span>

                            <br>

                            <span class="industry-reference">

                                Industry Reference:
                                ${item.industryReference}

                            </span>

                        </div>

                    `).join("")}

                </div>

            </div>


            <hr class="panel-divider">


            <!-- Risks -->

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/risk.svg">

                    <span>Risks</span>

                </div>

                <div class="chip-container">

                    ${agent.risks.map(item => `

                        <div class="grc-chip">

                            ✓ ${item.title}

                            <br>

                            <span class="business-rationale">

                                Business Rationale:
                                ${item.businessRationale}

                            </span>

                            <br>

                            <span class="guardrail">

                                Guardrail:
                                ${item.guardrail}

                            </span>

                            <br>

                            <span class="industry-reference">

                                Industry Reference:
                                ${item.industryReference}

                            </span>

                        </div>

                    `).join("")}

                </div>

            </div>


            <hr class="panel-divider">


            <!-- Compliance -->

            <div class="grc-section">

                <div class="grc-section-title">

                    <img src="assets/icons/compliance.svg">

                    <span>Compliance</span>

                </div>

                <div class="chip-container">

                    ${agent.compliance.map(item => `

                        <div class="grc-chip">

                            ✓ ${item.title}

                            <br>

                            <span class="business-rationale">

                                Business Rationale:
                                ${item.businessRationale}

                            </span>

                            <br>

                            <span class="guardrail">

                                Guardrail:
                                ${item.guardrail}

                            </span>

                            <br>

                            <span class="industry-reference">

                                Industry Reference:
                                ${item.industryReference}

                            </span>

                        </div>

                    `).join("")}

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

    const container =
        document.getElementById("contentCard");

    container.innerHTML = `

    <div class="center-card authentication-card">

        <div class="card-header">

            <img src="assets/icons/shield-check.svg">

            <span>Customer Authentication Agent</span>

        </div>

        <div class="card-description">

            Autonomous AI agent responsible for customer authentication.

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
                    onclick="selectTrustedAuthenticationAgent('loginAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Login Agent</span>

                </button>

                <button
                    class="agent-item"
                    onclick="selectTrustedAuthenticationAgent('mfaAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>MFA Agent</span>

                </button>

                <button
                    class="agent-item"
                    onclick="selectTrustedAuthenticationAgent('ssoAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>SSO Agent</span>

                </button>

                <button
                    class="agent-item"
                    onclick="selectTrustedAuthenticationAgent('accountRecoveryAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Account Recovery Agent</span>

                </button>

                <button
                    class="agent-item"
                    onclick="selectTrustedAuthenticationAgent('logoutAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Logout Agent</span>

                </button>

                <button
                    class="agent-item"
                    onclick="selectTrustedAuthenticationAgent('passwordExpirationAgent', this)">

                    <img src="assets/icons/agent.svg">

                    <span>Password Expiration Agent</span>

                </button>

            </div>


            <div
    class="grc-panel"
    id="grcPanel">

    <div id="grcHeader">

        <span
            class="generate-grc-btn"
            onclick="buildGRCProfile()">

            ▶ Build GRC Profile

        </span>

    </div>

</div>

        </div>

    </div>

    `;
}

// --------------------------------------------
// Selected Authentication Agent
// --------------------------------------------

let selectedAuthenticationAgent = "loginAgent";


// --------------------------------------------
// Trusted Authentication Agent Selection
// --------------------------------------------

function selectTrustedAuthenticationAgent(agentKey, selectedButton) {

    selectedAuthenticationAgent = agentKey;

    document
        .querySelectorAll(".agent-panel .agent-item")
        .forEach(button => {
            button.classList.remove("active");
        });

    selectedButton.classList.add("active");

    // Reset GRC area for the newly selected Authentication Agent
    document.getElementById("grcPanel").innerHTML = `

        <div id="grcHeader">

            <span
                class="generate-grc-btn"
                onclick="buildGRCProfile()">

                ▶ Build GRC Profile

            </span>

        </div>

    `;
}


// ============================================
// Customer Authentication Agent Registry
// ============================================

const customerAuthenticationAgentRegistry = {

    loginAgent: {

    name: "Login Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable ownership and oversight for the autonomous Login Agent.",

            guardrail:
                "Requires defined ownership, approved operating boundaries, and documented accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the Login Agent remains governed throughout its AI lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement of the agent.",

            industryReference:
                "ISO/IEC 42001 — AI management system; NIST AI RMF — Govern and Manage."
        },

        {
            title: "Autonomy Governance",

            businessRationale:
                "Defines the level of autonomy permitted for the Login Agent and establishes human accountability.",

            guardrail:
                "Requires approved autonomy boundaries, escalation conditions, and human oversight for defined exceptions.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the autonomous agent behaving outside its approved operating boundaries.",

            guardrail:
                "Requires continuous monitoring and defined controls for detecting and containing unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions that exceed its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight where required.",

            industryReference:
                "NIST AI RMF — Manage; NIST AI RMF — Govern."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the Login Agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and documented accountability.",

            industryReference:
                "ISO/IEC 42001 — AI management system; NIST AI RMF — Govern."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Ensures the Login Agent operates within the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence for the agent.",

            industryReference:
                "ISO/IEC 42001; NIST AI RMF."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Ensures responsibility for the agent's behavior and decisions is clearly established.",

            guardrail:
                "Requires accountable owners, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "ISO/IEC 42001; NIST AI RMF — Govern."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks arising from the Login Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF; ISO/IEC 42001."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight and Escalation",

        "Agent Activity Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF",

        "ISO/IEC 42001",

        "ISO/IEC 27001"

    ]

},

    mfaAgent: {

    name: "MFA Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable governance for the autonomous MFA Agent.",

            guardrail:
                "Requires defined ownership, operating boundaries, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Autonomy Governance",

            businessRationale:
                "Defines the approved level of autonomy for the MFA Agent.",

            guardrail:
                "Requires documented autonomy boundaries, escalation conditions, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the MFA Agent remains governed throughout its operational lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the MFA Agent operating outside approved boundaries.",

            guardrail:
                "Requires monitoring and controls to detect and contain unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions beyond its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Aligns the MFA Agent with the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Establishes clear responsibility for the MFA Agent's behavior and decisions.",

            guardrail:
                "Requires accountable ownership, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks associated with the MFA Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight",

        "Agent Behavior Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF — Govern",

        "NIST AI RMF — Manage",

        "ISO/IEC 42001 — AI management system"

    ]

},

    ssoAgent: {

    name: "SSO Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable governance for the autonomous SSO Agent.",

            guardrail:
                "Requires defined ownership, operating boundaries, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Autonomy Governance",

            businessRationale:
                "Defines the approved level of autonomy for the SSO Agent.",

            guardrail:
                "Requires documented autonomy boundaries, escalation conditions, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the SSO Agent remains governed throughout its operational lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the SSO Agent operating outside approved boundaries.",

            guardrail:
                "Requires monitoring and controls to detect and contain unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions beyond its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Aligns the SSO Agent with the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Establishes clear responsibility for the SSO Agent's behavior and decisions.",

            guardrail:
                "Requires accountable ownership, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks associated with the SSO Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight",

        "Agent Behavior Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF — Govern",

        "NIST AI RMF — Manage",

        "ISO/IEC 42001 — AI management system"

    ]

},

    accountRecoveryAgent: {

    name: "Account Recovery Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable governance for the autonomous Account Recovery Agent.",

            guardrail:
                "Requires defined ownership, operating boundaries, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Autonomy Governance",

            businessRationale:
                "Defines the approved level of autonomy for the Account Recovery Agent.",

            guardrail:
                "Requires documented autonomy boundaries, escalation conditions, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the Account Recovery Agent remains governed throughout its operational lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the Account Recovery Agent operating outside approved boundaries.",

            guardrail:
                "Requires monitoring and controls to detect and contain unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions beyond its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Aligns the Account Recovery Agent with the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Establishes clear responsibility for the Account Recovery Agent's behavior and decisions.",

            guardrail:
                "Requires accountable ownership, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks associated with the Account Recovery Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight",

        "Agent Behavior Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF — Govern",

        "NIST AI RMF — Manage",

        "ISO/IEC 42001 — AI management system"

    ]

},

    logoutAgent: {

    name: "Logout Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable governance for the autonomous Logout Agent.",

            guardrail:
                "Requires defined ownership, operating boundaries, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Autonomy Governance",

            businessRationale:
                "Defines the approved level of autonomy for the Logout Agent.",

            guardrail:
                "Requires documented autonomy boundaries, escalation conditions, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the Logout Agent remains governed throughout its operational lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the Logout Agent operating outside approved boundaries.",

            guardrail:
                "Requires monitoring and controls to detect and contain unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions beyond its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Aligns the Logout Agent with the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Establishes clear responsibility for the Logout Agent's behavior and decisions.",

            guardrail:
                "Requires accountable ownership, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks associated with the Logout Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight",

        "Agent Behavior Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF — Govern",

        "NIST AI RMF — Manage",

        "ISO/IEC 42001 — AI management system"

    ]

},

    passwordExpirationAgent: {

    name: "Password Expiration Agent",

    governance: [

        {
            title: "Agent Governance",

            businessRationale:
                "Establishes accountable governance for the autonomous Password Expiration Agent.",

            guardrail:
                "Requires defined ownership, operating boundaries, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Autonomy Governance",

            businessRationale:
                "Defines the approved level of autonomy for the Password Expiration Agent.",

            guardrail:
                "Requires documented autonomy boundaries, escalation conditions, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Agent Lifecycle Governance",

            businessRationale:
                "Ensures the Password Expiration Agent remains governed throughout its operational lifecycle.",

            guardrail:
                "Requires controlled approval, monitoring, modification, suspension, and retirement.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    risks: [

        {
            title: "Uncontrolled Agent Behavior",

            businessRationale:
                "Reduces the risk of the Password Expiration Agent operating outside approved boundaries.",

            guardrail:
                "Requires monitoring and controls to detect and contain unexpected agent behavior.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Inappropriate Autonomous Decisions",

            businessRationale:
                "Reduces the risk of the agent making decisions beyond its approved authority.",

            guardrail:
                "Requires defined decision boundaries, escalation rules, and human oversight.",

            industryReference:
                "NIST AI RMF — Govern and Manage; ISO/IEC 42001 — AI management system."
        },

        {
            title: "Insufficient Agent Accountability",

            businessRationale:
                "Reduces the risk of unclear responsibility for the agent's actions and outcomes.",

            guardrail:
                "Requires identifiable ownership, decision traceability, monitoring, and accountability.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        }

    ],

    compliance: [

        {
            title: "AI Governance Compliance",

            businessRationale:
                "Aligns the Password Expiration Agent with the organization's established AI governance framework.",

            guardrail:
                "Requires documented governance controls, ownership, monitoring, and evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Accountability Compliance",

            businessRationale:
                "Establishes clear responsibility for the Password Expiration Agent's behavior and decisions.",

            guardrail:
                "Requires accountable ownership, documented responsibilities, oversight, and audit evidence.",

            industryReference:
                "NIST AI RMF — Govern; ISO/IEC 42001 — AI management system."
        },

        {
            title: "AI Risk Management Compliance",

            businessRationale:
                "Ensures risks associated with the Password Expiration Agent are identified, assessed, monitored, and managed.",

            guardrail:
                "Requires documented AI risk assessment, treatment, monitoring, and periodic review.",

            industryReference:
                "NIST AI RMF — Manage; ISO/IEC 42001 — AI management system."
        }

    ],

    guardrails: [

        "Approved Autonomy Boundaries",

        "Human Oversight",

        "Agent Behavior Monitoring",

        "Decision Traceability"

    ],

    industryReferences: [

        "NIST AI RMF — Govern",

        "NIST AI RMF — Manage",

        "ISO/IEC 42001 — AI management system"

    ]

}

};

// --------------------------------------------
// Customer Authorization Agent
// --------------------------------------------

function showAuthorization(button) {

    document
        .getElementById("grcChildren")
        .classList.add("open");

    setActiveMenu(button);

    const container =
        document.getElementById("contentCard");

    container.innerHTML = `

<div class="center-card authorization-card">

    <div class="card-header">

        <img src="assets/icons/key-round.svg">

        <span>Customer Authorization Agent</span>

    </div>

    <div class="card-description">

        Autonomous AI agent responsible for customer authorization.

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
                onclick="selectTrustedAuthorizationAgent('accountDeletionAgent', this)">

                <img src="assets/icons/agent.svg">

                <span>Account Deletion Agent</span>

            </button>

        </div>


        <div
            class="grc-panel"
            id="grcPanel">

            <div id="grcHeader">

                <span
                    class="generate-grc-btn"
                    onclick="buildGRCProfile()">

                    ▶ Build GRC Profile

                </span>

            </div>

        </div>

    </div>

</div>

`;

}


// --------------------------------------------
// Selected Authorization Agent
// --------------------------------------------

let selectedAuthorizationAgent = "accountDeletionAgent";


// --------------------------------------------
// Build GRC Profile
// --------------------------------------------

function buildGRCProfile() {

    document
    .querySelector(".center-card")
    .classList.add("grc-generated");
    
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

            let agent;

if (
    document
        .querySelector(".center-card")
        .classList.contains("authentication-card")
) {

    agent =
        customerAuthenticationAgentRegistry[selectedAuthenticationAgent];

} else {

    agent =
        customerRegistrationAgentRegistry[selectedTrustedAgent];

}

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
