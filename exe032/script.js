//Crie um jogo onde o computador vai sortear um número entre 1 e 5 o jogador vai tentar descobrir qual foi o valor sorteado.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let numeroComputador = sortearNumeroAleatorio();
  let numeroJogador = Number(document.getElementById("numeroJogador").value);
  if (numeroJogador < 1 || numeroJogador > 5) {
    telaDeResultado.innerHTML = "Digite um número válido de 1 a 5.";
  } else {
    let resultado = verificarSeNumerosSaoIguais(
      numeroJogador,
      numeroComputador
    );
    telaDeResultado.innerHTML = `<p>Você chutou o número ${numeroJogador} e computador o número ${numeroComputador}.</p>`;
    telaDeResultado.innerHTML += resultado;
  }
}

function sortearNumeroAleatorio() {
  return Math.floor(Math.random() * 5) + 1;
}

function verificarSeNumerosSaoIguais(numeroJogador, numeroComputador) {
  if (numeroJogador == numeroComputador) {
    return "Você ganhou!";
  }
  return "Você perdeu!";
}
