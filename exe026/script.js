//Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando na tela uma das mensagens abaixo:
// O primeiro valor é o maior
// O segundo valor é o maior
// Não existe valor maior, os dois são iguais

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let primeiroValor = Number(document.getElementById("primeiroValor").value);

  let segundoValor = Number(document.getElementById("segundoValor").value);

  if (primeiroValor > segundoValor) {
    telaDeResultado.innerHTML = "O primeiro valor é o maior!";
  } else if (primeiroValor < segundoValor) {
    telaDeResultado.innerHTML = "O segundo valor é o maior!";
  } else {
    telaDeResultado.innerHTML = "Não existe maior valor!";
  }
}
