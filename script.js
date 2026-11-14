// 1. Handle Pet Profile Form
var petForm = document.getElementById("petForm");
var savedProfileDisplay = document.getElementById("savedProfileDisplay");

petForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page from refreshing

    var owner = document.getElementById("ownerName").value;
    var pet = document.getElementById("petName").value;
    var type = document.getElementById("petType").value;
    var age = document.getElementById("petAge").value;

    // Show saved profile on screen
    savedProfileDisplay.innerHTML = "<strong>Saved Profile:</strong> " + pet + " (" + type + ", " + age + " yrs) - Owner: " + owner;

    // Automatically fill pet name in booking form
    document.getElementById("bookPetName").value = pet;

    petForm.reset();
});

// 2. Handle Appointment Booking Form
var bookingForm = document.getElementById("bookingForm");
var appointmentList = document.getElementById("appointmentList");
var notificationMsg = document.getElementById("notificationMsg");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var petName = document.getElementById("bookPetName").value;
    var service = document.getElementById("serviceSelect").value;
    var date = document.getElementById("bookDate").value;
    var time = document.getElementById("bookTime").value;

    // Create a new table row
    var newRow = document.createElement("tr");

    newRow.innerHTML = 
        "<td>" + petName + "</td>" +
        "<td>" + service + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + time + "</td>" +
        "<td class='status-cell'>Booked</td>" +
        "<td><button class='action-btn' onclick='markCompleted(this)'>Mark Completed</button></td>";

    // Add row to the table
    appointmentList.appendChild(newRow);

    // Show reminder/notification message
    notificationMsg.innerText = "✅ Appointment confirmed for " + petName + " on " + date + " at " + time + "!";

    bookingForm.reset();
});

// 3. Admin Action to change status
function markCompleted(buttonElement) {
    var row = buttonElement.parentElement.parentElement;
    var statusCell = row.querySelector(".status-cell");
    statusCell.innerText = "Completed ✔️";
    statusCell.style.color = "green";
    statusCell.style.fontWeight = "bold";
    buttonElement.style.display = "none"; // Hide button after completion
}