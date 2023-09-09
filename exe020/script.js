//Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou ÍMPAR

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let valorInformado = Number(document.getElementById("valorInformado").value);
  if (valorInformado % 2 === 0) {
    telaDeResultado.innerHTML = `${valorInformado} é PAR.`;
  } else {
    telaDeResultado.innerHTML = `${valorInformado} é ÍMPAR.`;
  }
}
