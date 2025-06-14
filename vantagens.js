let trocas = [
  { campo: "🌽 Campo envia alimentos", cidade: "🏙️ Cidade envia tecnologia" },
  { campo: "🚜 Campo envia matéria-prima", cidade: "🏢 Cidade envia máquinas" },
  { campo: "🥛 Campo envia leite", cidade: "🧃 Cidade envia embalagens" },
  { campo: "🍅 Campo envia hortaliças", cidade: "🧂 Cidade envia temperos industrializados" },
  { campo: "🐄 Campo envia carne", cidade: "🚚 Cidade envia transporte" }
];

let indice = 0;
let animando = false;
let fase = "campo"; // "campo" ou "cidade"
let iconeX, destinoX;
let mensagem = "";
let mostrarConexao = false;

function setup() {
  let canvas = createCanvas(800, 400);
  canvas.parent("sketch-holder");
  textAlign(CENTER, CENTER);
  textSize(20);

  let botao = createButton("Fazer Conexão");
  botao.parent("sketch-holder");
  botao.mousePressed(() => {
    mostrarConexao = true;
    iniciarAnimacao();
  });
}

function draw() {
  background(255);

  // Título
  fill(0);
  textSize(24);
  text("Conexão Campo-Cidade", width / 2, 40);

  if (!mostrarConexao) return;

  // Campo
  fill('#c5e1a5');
  rect(50, 150, 200, 100, 20);
  fill(0);
  textSize(20);
  text("🌾 Campo", 150, 200);

  // Cidade
  fill('#90caf9');
  rect(550, 150, 200, 100, 20);
  fill(0);
  text("🏙️ Cidade", 650, 200);

  // Animação da seta
  if (animando) {
    textSize(26);
    fill(0);
    if (fase === "campo") {
      text("➡️", iconeX, 200);
      iconeX += 5;
      if (iconeX >= destinoX) {
        fase = "cidade";
        iconeX = 700;
        destinoX = 100;
        mensagem = trocas[indice].cidade; // Cidade envia na volta ⬅️
      }
    } else if (fase === "cidade") {
      text("⬅️", iconeX, 200);
      iconeX -= 5;
      if (iconeX <= destinoX) {
        fase = "campo";
        iconeX = 100;
        destinoX = 700;
        mensagem = trocas[indice].campo; // Campo envia na ida ➡️

        // próxima troca
        indice = (indice + 1) % trocas.length;
      }
    }
  }

  // Mensagem
  textSize(20);
  fill(50);
  text(mensagem, width / 2, 300);
}

function iniciarAnimacao() {
  animando = true;
  fase = "campo";
  iconeX = 100;
  destinoX = 700;
  mensagem = "";
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

