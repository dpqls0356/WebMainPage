const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = parseInt(Math.random() * images.length);

const bgImage = document.createElement("img");
bgImage.src = `img/${images[chosenImage]}`;

document.body.appendChild(bgImage);
bgImage.classList.add("background-Img");
