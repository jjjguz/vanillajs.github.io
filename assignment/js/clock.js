const calendar = document.querySelector("#calendar");
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const years = date.getFullYear();
    const months = date.getMonth();
    const dates = date.getDate();
    const days = date.getDay();
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    calendar.innerText = `${years}-${months}-${dates} ${dayNames[days]}`
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);