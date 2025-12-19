document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("editJobBtn").onclick = function () {
    const newTitle = prompt("Enter your new job title:");
    if (newTitle && newTitle.trim() !== "") {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

document.getElementById("toggleSkillsBtn").onclick = function () {
    const skills = document.getElementById("skillsSection");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        this.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        this.textContent = "Show Skills";
    }
};

const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    counter.textContent = 200 - msgBox.value.length;
};

function validateForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in Name and Email.");
        return false;
    }
    return true;
}

const today = new Date();
document.getElementById("dateDisplay").textContent =
    "Today is: " + today.toDateString();

const hour = today.getHours();
let greeting = "Good Evening!";

if (hour < 12) {
    greeting = "Good Morning!";
} else if (hour < 18) {
    greeting = "Good Afternoon!";
}

document.getElementById("greeting").textContent = greeting;
