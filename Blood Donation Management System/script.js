// Donor list and blood inventory data
let donors = [];
let bloodInventory = {
    "A+": 0, "B+": 0, "O+": 0, "AB+": 0,
    "A-": 0, "B-": 0, "O-": 0, "AB-": 0
};

// DOM elements
const donorForm = document.getElementById("donor-form");
const donorList = document.getElementById("donor-list");
const inventoryDisplay = document.getElementById("inventory");
const requestForm = document.getElementById("request-form");

// Event listener for donor registration
donorForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get donor data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const contact = document.getElementById("contact").value;

    // Add donor to the list
    const donor = { name, age, bloodGroup, contact };
    donors.push(donor);

    // Update blood inventory (assume 1 unit donated)
    bloodInventory[bloodGroup] += 1;

    // Update UI
    updateDonorList();
    updateInventory();

    // Clear form
    donorForm.reset();
});

// Event listener for blood request
requestForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const bloodGroup = document.getElementById("request-blood-group").value;

    if (bloodInventory[bloodGroup] > 0) {
        bloodInventory[bloodGroup] -= 1;
        updateInventory();
        alert("Blood request successful!");
    } else {
        alert("Sorry, blood group " + bloodGroup + " is not available.");
    }
});

// Function to update the donor list
function updateDonorList() {
    donorList.innerHTML = "";
    donors.forEach(donor => {
        const li = document.createElement("li");
        li.textContent = `Name: ${donor.name}, Blood Group: ${donor.bloodGroup}, Contact: ${donor.contact}`;
        donorList.appendChild(li);
    });
}

// Function to update the blood inventory display
function updateInventory() {
    inventoryDisplay.innerHTML = "";
    for (let bloodGroup in bloodInventory) {
        const div = document.createElement("div");
        div.textContent = `${bloodGroup}: ${bloodInventory[bloodGroup]} units`;
        inventoryDisplay.appendChild(div);
    }
}

// Initial UI update
updateInventory();
