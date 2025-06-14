let images = [];

function preload() {
  images[0] = loadImage("https://i.ibb.co/jzfJ04k/campo.jpg");
  images[1] = loadImage("https://i.ibb.co/ZYW3VTp/cidade.jpg");
  images[2] = loadImage("https://i.ibb.co/RCzD3cJ/educacao.jpg");
}

function setup() {
  createCanvas(windowWidth, 800);
  background("#e9f5f2");
  textFont('Georgia');

  drawHeader();
  drawContent();
  drawImages();
  drawFooter();
}

function drawHeader() {
  fill("#006644");
  noStroke();
  rect(0, 0, width, 80);
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(28);
  text("Educação e Conscientização", width / 2, 28);
  textSize(14);
  text("Formando cidadãos conscientes para um futuro sustentável", width / 2, 58);
}

function drawContent() {
  fill("#000");
  textAlign(LEFT, TOP);
  textSize(18);
  textStyle(BOLD);
  text("A importância da educação no campo e na cidade", 50, 100);
  textStyle(NORMAL);
  textSize(14);
  text(
    "A educação é a base para promover mudanças significativas nas comunidades rurais e urbanas. " +
    "Ela permite que os indivíduos compreendam seu papel na sociedade e a importância de práticas sustentáveis.",
    50, 130, width - 100
  );

  textStyle(BOLD);
  textSize(18);
  text("Conscientização para um futuro melhor", 50, 210);
  textStyle(NORMAL);
  textSize(14);
  text(
    "Por meio da conscientização, é possível fomentar valores como o respeito à natureza, o consumo responsável " +
    "e a valorização do trabalho no campo. Iniciativas educativas, como o Agrinho, são fundamentais.",
    50, 240, width - 100
  );

  textStyle(BOLD);
  textSize(18);
  text("A união do saber e da prática", 50, 320);
  textStyle(NORMAL);
  textSize(14);
  text(
    "É essencial unir o conhecimento teórico das escolas com a prática no dia a dia, no campo e na cidade. " +
    "Essa conexão fortalece o entendimento sobre a importância de cada um para um futuro melhor.",
    50, 350, width - 100
  );
}

function drawImages() {
  textStyle(BOLD);
  textSize(18);
  fill(0);
  textAlign(CENTER);
  text("Imagens Relacionadas", width / 2, 450);

  let imgY = 480;
  let imgW = 200;
  let spacing = (width - 3 * imgW) / 4;

  for (let i = 0; i < 3; i++) {
    image(images[i], spacing + i * (imgW + spacing), imgY, imgW, 120);
  }
}

function drawFooter() {
  fill("#006644");
  rect(0, height - 40, width, 40);
  fill("white");
  textAlign(CENTER, CENTER);
  textSize(12);
  text("© 2025 - Projeto Agrinho | Tema: Educação e Conscientização", width / 2, height - 20);
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


