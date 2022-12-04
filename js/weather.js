const APIKEY = "";
const weatherinfobox = document.querySelector(".weather");

navigator.geolocation.getCurrentPosition(geosuccess, geoerror);

function geosuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const weatherbox = document.createElement("div");
      weatherbox.innerHTML = `${weather}`;
      const tempbox = document.createElement("div");
      tempbox.innerHTML = `${temp}`;
      weatherinfobox.appendChild(tempbox);
      weatherinfobox.appendChild(weatherbox);
    });
}
function geoerror() {
  alert("we cant find you! so we cant give u weather information...");
}
