//Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles

const telaDeResultado = document.getElementById("telaDeResultado");

function somarValores() {
  const primeiroValor = Number(document.getElementById("primeiroValor").value);
  const segundoValor = Number(document.getElementById("segundoValor").value);

  let somaDosValores = primeiroValor + segundoValor;
  telaDeResultado.innerText = somaDosValores;
}
