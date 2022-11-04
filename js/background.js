const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
function setBackground() {
  const chosenImage = parseInt(Math.random() * images.length);

  const bgImage = document.createElement("img");
  bgImage.src = `img/${images[chosenImage]}`;

  document.body.appendChild(bgImage);
  bgImage.classList.add("background-Img");
}
setBackground();
// setInterval(setBackground, 3000);
