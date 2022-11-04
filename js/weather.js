const API_KEY = "00ff901cb628b8520281869397f5a0ea";
// 브라우저에서 위치를 줌!
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(weatherurl)
    //응답을 받고 응답의 json을 받음
    .then((repsonse) => repsonse.json())
    // 내용 추출 후 data를 얻어옴 -> json의 내용들
    .then((data) => {
      console.log(data);
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const weatherBox = document.querySelector(".weather-box");
      const namespan = document.createElement("span");
      const weatherspan = document.createElement("span");
      const tempspan = document.createElement("span");
      namespan.innerHTML = `${name} / `;
      tempspan.innerHTML = `${temp}° / `;
      weatherspan.innerHTML = `${weather}`;
      weatherBox.appendChild(namespan);
      weatherBox.appendChild(tempspan);
      weatherBox.appendChild(weatherspan);
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}
