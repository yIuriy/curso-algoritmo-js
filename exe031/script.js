//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  window.alert(`Escolha uma das opções a seguir: 
[ 0 ] Pedra
[ 1 ] Tesoura
[ 2 ] Papel`);

  let escolhaJogador;

  while (true) {
    escolhaJogador = Number(window.prompt("Digite a opção: "));
    if (escolhaJogador < 3 && escolhaJogador >= 0) {
      break;
    }
  }

  let escolhaComputador = sortearNumeroAleatorio();
  let resultado = compararResultado(escolhaJogador, escolhaComputador);
  window.alert(resultado);
}

function sortearNumeroAleatorio() {
  return Math.floor(Math.random() * 3);
}

function compararResultado(escolhaJogador, escolhaComputador) {
  let mensagem = "";

  if (escolhaComputador === 0) {
    mensagem += "O computador jogou Pedra.\n";
  } else if (escolhaComputador === 1) {
    mensagem += "O computador jogou Tesoura.\n";
  } else if (escolhaComputador === 2) {
    mensagem += "O computador jogou Papel.\n";
  }

  if (escolhaJogador === 0) {
    mensagem += "O jogador jogou Pedra.\n";
  } else if (escolhaJogador === 1) {
    mensagem += "O jogador jogou Tesoura.\n";
  } else if (escolhaJogador === 2) {
    mensagem += "O jogador jogou Papel.\n";
  }

  if (escolhaComputador === escolhaJogador) {
    mensagem += "Empate.";
  } else if (escolhaComputador === 0 && escolhaJogador === 2) {
    mensagem += "Você ganhou.";
  } else if (escolhaComputador === 0 && escolhaJogador === 1) {
    mensagem += "Você perdeu.";
  } else if (escolhaComputador === 1 && escolhaJogador === 0) {
    mensagem += "Você ganhou.";
  } else if (escolhaComputador === 1 && escolhaJogador === 2) {
    mensagem += "Você perdeu.";
  } else if (escolhaComputador === 2 && escolhaJogador === 0) {
    mensagem += "Você perdeu.";
  } else if (escolhaComputador === 2 && escolhaJogador === 1) {
    mensagem += "Você ganhou.";
  }

  return mensagem;
}
