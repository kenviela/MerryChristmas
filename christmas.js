const frames = document.querySelectorAll(".dancerCat img");
const btnDance = document.querySelector(".BtnStartDance");
//const song = document.getElementById("christmasSong");

//variables de estado
let currentFrame = 0;
let danceInterval = null; // es el temporizador para cambiar cada imagen
let isDancing = false;
const speed = 100;

//Funcion que cambia las imagenes
function nextFrame() {
  frames[currentFrame].classList.remove("active");
  currentFrame = (currentFrame + 1) % frames.length;
  frames[currentFrame].classList.add("active");
}

function onDance() {
  if (!isDancing) {
    danceInterval = setInterval(nextFrame, speed);
    btnDance.textContent = "Stop Dancing";
    isDancing = true;
  } else {
    clearInterval(danceInterval);
    btnDance.textContent = "Dance with me!";
    isDancing = false;
  }
}
//evento clic para el boton
btnDance.addEventListener("click", onDance);
