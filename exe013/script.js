//Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let salarioAtual = Number(document.getElementById("salarioAtual").value);

  let salarioNovo = calcularAumentoDe15Porcento(salarioAtual);

  telaDeResultado.innerHTML = `<p>Seu salário era de ${salarioAtual.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )} e, com um aumento de 15% passará a ser de ${salarioNovo.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`;
}

function calcularAumentoDe15Porcento(valorQualquer) {
  return valorQualquer + valorQualquer * (15 / 100);
}
