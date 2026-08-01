async function loadAgent(agentId) {

    try {

        const response = await fetch(
            `data/${agentId}.json`
        );

        const agentData = await response.json();


        renderMetadata(agentData.metadata);

        renderCollaboration(
            agentData.agentCollaboration
        );

        renderActions(
            agentData.actions
        );


    } catch (error) {

        console.error(
            "Unable to load agent data:",
            error
        );

    }

}



function renderMetadata(metadata) {

    const container =
        document.getElementById(
            "agentMetadata"
        );


    container.innerHTML = `

        <div class="agent-title">
            ${metadata.name}
        </div>

        <div class="agent-description">
            ${metadata.description}
        </div>

        <div class="agent-description">
            Domain: ${metadata.domain}
        </div>

    `;

}




function renderCollaboration(collaboration) {


    const container =
        document.getElementById(
            "agentCollaboration"
        );


    let html = `

        <div class="governance-block">

            <div class="action-name">
                Agent Collaboration
            </div>

            <ul>

    `;


    collaboration.forEach(agent => {


        html += `

            <li>
                ${agent.sequence}. 
                ${agent.name}
                -
                ${agent.purpose}
            </li>

        `;

    });



    html += `

            </ul>

        </div>

    `;


    container.innerHTML = html;


}




function renderActions(actions) {


    const container =
        document.getElementById(
            "agentActions"
        );


    let html = "";


    actions.forEach(action => {


        html += `

        <div class="governance-block">


            <div class="action-name">

                Action ${action.sequence}: 
                ${action.name}

            </div>



            <div class="field-label">
                Enterprise Systems
            </div>

            <ul>

        `;


        action.enterpriseSystems.forEach(system => {

            html += `

                <li>
                    ${system.name}
                </li>

            `;

        });



        html += `

            </ul>


            <div class="field-label">
                Governance
            </div>

            <ul>

        `;



        action.governance.forEach(item => {

            html += `

                <li>
                    ${item.name}
                </li>

            `;

        });



        html += `

            </ul>


            <div class="field-label">
                Risks
            </div>

            <ul>

        `;



        action.risks.forEach(item => {

            html += `

                <li>
                    ${item.name}
                </li>

            `;

        });



        html += `

            </ul>


            <div class="field-label">
                Compliance
            </div>


        `;



        action.compliance.forEach(item => {

            html += `

                <div class="compliance-item">

                    ${item.type}:
                    ${item.name}

                </div>

            `;

        });



        html += `


            <div class="field-label">
                Guardrails
            </div>


            <ul>

        `;



        action.guardrails.forEach(item => {


            html += `

                <li class="guardrail-item">

                    ${item.name}
                    -
                    ${item.trigger}

                </li>

            `;


        });



        html += `

            </ul>


        </div>

        `;


    });



    container.innerHTML = html;


}




// Load default agent when page opens

loadAgent(
    "customer-registration"
);
