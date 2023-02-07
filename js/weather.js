const APIKEY = "00ff901cb628b8520281869397f5a0ea";
const weatherinfobox = document.querySelector(".weather");

navigator.geolocation.getCurrentPosition(geosuccess, geoerror);

function geosuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const local = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const weatherIcon = data.weather[0].icon;

      const weatherIconImg = document.createElement("img");
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      weatherIconImg.setAttribute("src", weatherIconAdrs);
      weatherIconImg.classList.add("weatherIconImg");
      const weatherbox = document.createElement("div");
      weatherbox.innerHTML = `${weather}`;

      const tempbox = document.createElement("div");
      tempbox.innerHTML = `${temp}°C`;

      const localbox = document.createElement("div");
      localbox.innerHTML = `${local}`;

      const weatherboxtop = document.createElement("div");
      weatherboxtop.classList.add("weathertop");
      const weatherboxbottom = document.createElement("div");
      weatherboxbottom.classList.add("weatherbottom");

      localbox.classList.add("local");
      tempbox.classList.add("temp");
      weatherbox.classList.add("weatherword");

      weatherboxtop.appendChild(localbox);
      weatherboxtop.appendChild(tempbox);
      weatherboxbottom.appendChild(weatherbox);
      weatherboxbottom.appendChild(weatherIconImg);

      weatherinfobox.appendChild(weatherboxtop);
      weatherinfobox.appendChild(weatherboxbottom);
    });
}
function geoerror() {
  alert("we cant find you! so we cant give u weather information...");
}
