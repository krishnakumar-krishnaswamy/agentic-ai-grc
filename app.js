async function loadAgentData() {
    try {
        const response = await fetch(
            "data/customer-registration.json"
        );

        const agentData = await response.json();

        console.log("Customer Registration Data Loaded:");
        console.log(agentData);

    } catch (error) {
        console.error(
            "Unable to load agent data:",
            error
        );
    }
}

loadAgentData();
