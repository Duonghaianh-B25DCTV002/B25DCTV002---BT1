// --- Lời chào theo buổi ---
var now = new Date();
var hour = now.getHours();
var greeting = "";

if (hour < 12) {
    greeting = "Chào buổi sáng!";
} else if (hour < 18) {
    greeting = "Chào buổi chiều!";
} else {
    greeting = "Chào buổi tối!";
}

document.getElementById("greeting").innerText = greeting;

// --- Đổi màu nền ---
var btn = document.getElementById("toggle-btn");
var body = document.body;

btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});
