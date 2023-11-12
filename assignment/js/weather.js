const API_KEY = "56b52042f83a7cbda80a292a6424decd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const img = document.createElement("img");
            weather.after(img)
            city.innerText = data.name;
            weather.innerText = `${data.main.temp}°C ${data.weather[0].main}`
            img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        });
}

function onGeoError() {
    console.log("Blocking Location Confirmation");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
