const capituloFaixa = document.getElementById("capitulo-faixa");
const audioFaixa = document.getElementById("audio-faixa");
const botaoAnteriorFaixa = document.getElementById("anterior");
const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancarFaixa = document.getElementById("proximo");

const quantidadeCapitulos = 30;
let VerificarTocando = false;
let numFaixa = 1;

function tocarFaixa() {
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
  audioFaixa.play();
  VerificarTocando = true;
}

function pausarFaixa() {
  botaoPlayPause.classList.add("bi-play-circle-fill");
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  audioFaixa.pause();
  VerificarTocando = false;
}

function tocarOuPausarFaixa() {
  if (VerificarTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function capituloAnterior() {
  if (numFaixa === 1) {
    numFaixa = quantidadeCapitulos;
  } else {
    numFaixa -= 1;
  }
  audioFaixa.src = "file/audio/dom-casmurro/" + numFaixa + ".mp3";
  capituloFaixa.innerText = "Capítulo " + numFaixa;
  tocarFaixa();
}

function proximoCapitulo() {
  if (numFaixa < quantidadeCapitulos) {
    numFaixa += 1;
  } else {
    numFaixa = 1;
  }
  audioFaixa.src = "file/audio/dom-casmurro/" + numFaixa + ".mp3";
  capituloFaixa.innerText = "Capítulo " + numFaixa;
  tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
botaoAnteriorFaixa.addEventListener("click", capituloAnterior);
botaoAvancarFaixa.addEventListener("click", proximoCapitulo);
audioFaixa.addEventListener("ended", proximoCapitulo);