const loginScreen = document.getElementById('login-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const nameInput = document.getElementById('name-input');
const startBtn = document.getElementById('start-btn');
const userNameSpan = document.getElementById('user-name');
const clockDiv = document.getElementById('clock');
const dateDiv = document.getElementById('date');

startBtn.addEventListener("click", () => {
    const username = nameInput.value.trim();

    if(username !== "") {
        userNameSpan.textContent = username;
        loginScreen.classList.add("hidden");
        welcomeScreen.classList.remove("hidden");

        updateTime();
        setInterval(updateTime, 1000);
    } else {
        alert("Lütfen bir isimle giriniz.")
    }
});

nameInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        startBtn.click();
    }
});

function updateTime() {
    const now = new Date();

    const hours = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());

    clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDiv.textContent = now.toLocaleDateString('tr-TR', options);
}