// Fundo animado
let currentTheme = 0;
let clouds = [];
let birds = [];
let cars = [];
let buildings = [];
let grassOffset = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  canvas.style('pointer-events', 'none');

  // Nuvens
  for (let i = 0; i < 5; i++) {
    clouds.push({ x: random(width), y: random(120, 220), speed: random(0.3, 1) });
  }

  // Pássaros
  for (let i = 0; i < 3; i++) {
    birds.push({ x: random(width / 2), y: random(130, 180), speed: random(1, 2) });
  }

  // Carros
  for (let i = 0; i < 3; i++) {
    cars.push({ x: random(width / 2, width), y: height - 80, speed: random(2, 3) });
  }

  // Prédios
  let buildingWidth = 50;
  for (let x = width / 2; x < width; x += buildingWidth + 10) {
    buildings.push({ x: x, h: random(80, 150), w: buildingWidth });
  }

  // Botões
  const buttonLinks = {
    btnTema1: "https://o-campo-produz-a-cidade-consome.vercel.app/",
    btnTema2: "https://valoriza-o-cultural.vercel.app/",
    btnTema3: "https://educao-e-conscientizao.vercel.app/",
    btnTema4: "https://festejar-e-unir.vercel.app/",
    btnVantagens: "https://vantagens-eosin.vercel.app/",
    btnQuiz: "https://quiz-smoky-ten-66.vercel.app/",
    btnSobre: "https://sobre-dusky.vercel.app/",
    btnJogo: "https://jogo-self-iota.vercel.app/",
  };

  Object.keys(buttonLinks).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => window.open(buttonLinks[id], "_blank"));
      btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.1)");
      btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");
      btn.style.transition = "transform 0.2s";
    }
  });

  textSize(20);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(135, 206, 235);

  drawGround();
  drawTrees();
  drawDivider();
  drawClouds();
  drawBirds();
  drawCityBuildings();
  drawCars();

  fill(0);
  textSize(24);
  if (currentTheme === 1) text("O campo produz, a cidade consome", width / 2, 60);
  else if (currentTheme === 2) text("Valorização Cultural", width / 2, 60);
  else if (currentTheme === 3) text("Educação e Conscientização", width / 2, 60);
  else if (currentTheme === 4) text("Festejar é unir", width / 2, 60);
}

function drawGround() {
  fill(34, 139, 34);
  beginShape();
  for (let x = 0; x < width / 2; x++) {
    let y = height - 100 + sin((x + grassOffset) * 0.05) * 5;
    vertex(x, y);
  }
  vertex(width / 2, height);
  vertex(0, height);
  endShape(CLOSE);

  fill(169, 169, 169);
  rect(width / 2, height - 100, width / 2, 100);

  grassOffset += 0.5;
}

function drawTrees() {
  for (let i = 50; i < width / 2; i += 120) {
    let treeBaseY = height - 100 + sin((i + grassOffset) * 0.05) * 5;

    // Tronco
    fill(101, 67, 33);
    rect(i, treeBaseY - 40, 10, 40);

    // Folhas da arvore
    fill(34, 139, 34);
    ellipse(i + 5, treeBaseY - 50, 40, 40);
    ellipse(i - 10, treeBaseY - 40, 30, 30);
    ellipse(i + 20, treeBaseY - 40, 30, 30);
  }
}

function drawDivider() {
  stroke(0);
  line(width / 2, 0, width / 2, height);
}

function drawClouds() {
  noStroke();
  fill(255);
  for (let cloud of clouds) {
    ellipse(cloud.x, cloud.y, 60, 40);
    ellipse(cloud.x + 30, cloud.y + 10, 50, 30);
    ellipse(cloud.x - 30, cloud.y + 10, 50, 30);
    cloud.x += cloud.speed;
    if (cloud.x > width + 60) cloud.x = -60;
  }
}

function drawBirds() {
  fill(0);
  for (let bird of birds) {
    triangle(bird.x, bird.y, bird.x + 10, bird.y - 5, bird.x + 20, bird.y);
    bird.x += bird.speed;
    if (bird.x > width / 2) bird.x = -20;
  }
}

function drawCityBuildings() {
  fill(100);
  for (let b of buildings) {
    rect(b.x, height - 100 - b.h, b.w, b.h);
  }
}

function drawCars() {
  for (let car of cars) {
    fill(255, 0, 0);
    rect(car.x, car.y, 40, 20);
    fill(0);
    ellipse(car.x + 10, car.y + 20, 10, 10);
    ellipse(car.x + 30, car.y + 20, 10, 10);

    car.x += car.speed;
    if (car.x > width) car.x = width / 2;
  }
}

function theme1Animation() {
}

function theme2Animation() {
}

function theme3Animation() {
}

function theme4Animation() {
}

function changeTheme(themeNumber) {
  currentTheme = themeNumber;
  document.getElementById("text-description").innerText = getDescription(themeNumber);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-acessibilidade');
  const menu = document.getElementById('menu-acessibilidade');
  const header = document.querySelector('header');


  if (btn && menu && header) {
    btn.addEventListener('click', () => {
      const ativo = menu.classList.toggle('ativo');
      if (ativo) {
        header.classList.add('menu-aberto');
      } else {
        header.classList.remove('menu-aberto');
      }
    });
  }


  document.getElementById('linkContato')?.addEventListener('click', function(event) {
    event.preventDefault();
    const contato = document.getElementById('contato');
    if (contato) {
      contato.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });


  setTimeout(() => {
    document.getElementById('splash-screen')?.classList.add('fade-out');
    document.getElementById('main-content')?.classList.add('visible');
  }, 4000);
});




  function toggleMenu() {
  const menu = document.getElementById('menuAcessibilidade');
  menu.classList.toggle('ativo');
}




let tamanhoFonteAtual = 1;


function aumentarFonte() {
  if (tamanhoFonteAtual < 2) {
    tamanhoFonteAtual += 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}


function diminuirFonte() {
  if (tamanhoFonteAtual > 0.5) {
    tamanhoFonteAtual -= 0.1;
    document.body.style.fontSize = tamanhoFonteAtual + 'em';
  }
}


function contraste() {
  document.body.classList.toggle('contraste-ativo');
}




let lendo = false;
let utterance = null;
let canceladoPeloUsuario = false;


function lerTexto() {
  const botao = document.getElementById("botaoLeitura");


 
  if (lendo) {
    canceladoPeloUsuario = true;
    speechSynthesis.cancel();
    lendo = false;
    botao.innerText = "Ler";
    return;
  }


 
  if (!window.speechSynthesis) {
    alert("A leitura de texto não é suportada neste navegador.");
    return;
  }


 
  speechSynthesis.cancel();


 
  const texto = document.body.innerText;
  utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = 'pt-BR';
  utterance.rate = 1;


  lendo = true;
  canceladoPeloUsuario = false;
  botao.innerText = "Parar";




  utterance.onend = () => {
    lendo = false;
    botao.innerText = "Ler";
  };


  // Em caso aconteça algum erro
  utterance.onerror = () => {
    lendo = false;
    botao.innerText = "Ler";
    if (!canceladoPeloUsuario) {
      alert("Erro ao tentar ler o texto.");
    }
  };


 
  try {
    speechSynthesis.speak(utterance);
  } catch (e) {
    lendo = false;
    botao.innerText = "Ler";
    alert("Este navegador não permite leitura de texto automaticamente.");
  }
}




E no Css ficou:


.acessibilidade {
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}


.acessibilidade p {
  margin: 4px 0 0 0;
  font-size: 5px;
  text-align: center;
  line-height: 1.2;
}


.creditos {
  font-size: 10px;
  margin-top: 6px;
  max-width: 120px;
  line-height: 1.2;
}


.creditos a {
  color: inherit;
  text-decoration: none;
}


.acessibilidade button {
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}


.abnace {
   all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  transition: transform 0.3s ease;
  max-width: 120px;
  text-align: center;
}


.abnace button{
    background-color:transparent;
}


.abnace:hover{
transform: scale(1.2);
cursor: pointer;
}
.abnace img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgb(52, 78, 50);
  border: 1px solid rgb(31, 77, 37);
  border-radius: 100%;
}




.menu {
  margin-top: 30px;
  display: none;
  position: absolute;
  background-color: #f0fff0;
  border: 2px solid #2d551d;
  padding: 10px;
  border-radius: 12px;
  z-index: 1000;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  width: max-content;
}


.menu.ativo {
  display: block;
}


.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 0;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: rgb(45, 94, 45);
  color: white;
  width: 100%;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}


.botao:hover {
  background-color: rgb(34, 72, 34);
}


.botao img {
  margin-right: 6px;
  width: 18px;
  height: 18px;
}


.acessibilidade p {
  margin-top: 6px;
  font-size: 5px;
  line-height: 1.4;
  text-align: center;
  color: #333;
}




  .contraste-ativo {
    background-color: black !important;
    color: rgb(251, 255, 0) !important;
  }


  .contraste-ativo button {
    background-color: #1d1919 !important;
    color: rgb(238, 255, 0) !important;
  }


  .contraste-ativo a,
.contraste-ativo span{
  color: rgb(251, 255, 0) !important;
}


.contraste-ativo h1, .contraste-ativo h2, .contraste-ativo h3, .contraste-ativo p{
  color: rgb(255, 255, 255);
}


