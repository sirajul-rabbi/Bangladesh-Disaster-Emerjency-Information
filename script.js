// District Information
const districtData = {
    "Dhaka": "Urban flooding and waterlogging may occur during heavy rainfall. Follow local weather updates.",
    "Sylhet": "Flash floods may affect low-lying areas. Follow official flood warnings.",
    "Chattogram": "Heavy rainfall and landslides may create risks in vulnerable areas.",
    "Kurigram": "River flooding may affect nearby communities. Follow local authority instructions.",
    "Barishal": "Coastal weather conditions may create flood and storm risks.",
    "Cox's Bazar": "Coastal communities should follow official cyclone warnings.",
    "Sirajganj": "River erosion and flooding may affect riverside communities."
};

// District Selection
const districtSelect = document.getElementById("districtSelect");
const districtResult = document.getElementById("districtResult");

districtSelect.addEventListener("change", function () {
    const selected = this.value;

    if (selected && districtData[selected]) {
        districtResult.innerHTML =
            "<h3>📍 " + selected + "</h3><p>" +
            districtData[selected] + "</p>";
    } else {
        districtResult.textContent =
            "Select a district to see information.";
    }
});

// Emergency Help Form - Demo Only
const helpForm = document.getElementById("helpForm");
const formResult = document.getElementById("formResult");

helpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();
    const problem = document.getElementById("problem").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !location || !problem || !message) {
        formResult.textContent = "Please complete all fields.";
        return;
    }

    formResult.textContent =
        "Demo request completed for " + name +
        ". This request has NOT been sent to emergency services.";

    formResult.style.color = "#08745e";

    helpForm.reset();
});

// Website Loading Message
console.log(
    "Bangladesh Disaster & Emergency Portal Loaded Successfully!"
);