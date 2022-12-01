const backgroundbox = document.querySelector(".background");
const backgroundimg = document.createElement("img");
const imgcount = 5;

changeBackgroudImg();
setInterval(changeBackgroudImg, 10000);
function changeBackgroudImg() {
  const backgroundimgnumber = parseInt(Math.random() * imgcount + 1);
  backgroundimg.src = `/img/background${backgroundimgnumber}.jpg`;
  console.log(backgroundimg.src);
  backgroundbox.appendChild(backgroundimg);
}
