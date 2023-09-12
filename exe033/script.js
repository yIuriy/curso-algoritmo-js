//Escreva um programa para aprovar ou não o empréstimo bancário para a compra de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado

const telaDeResultado = document.getElementById("telaDeResultado");

const mesesEmUmAno = 12;

function mostrarResultadoNaTela() {
  let valorDaCasa = Number(document.getElementById("valorDaCasa").value);
  let salarioComprador = Number(
    document.getElementById("salarioComprador").value
  );
  let anosPagando = Number(document.getElementById("anosPagando").value);
  let mesesPagando = converterAnosParaMeses(anosPagando);
  let parcelaMensal = calcularParcelaMensal(valorDaCasa, mesesPagando);
  let trintaPorcentoSalario = calcular30PorcentoSalário(salarioComprador);
  telaDeResultado.innerHTML = `<p>O preço da casa é de ${formatarParaReal(
    valorDaCasa
  )}, o salário do comprador é de ${formatarParaReal(
    salarioComprador
  )}, cada parcela mensal custará ${formatarParaReal(parcelaMensal)}.</p>`;
  let resultadoFinal = verificarLiberacaoDoEmprestimo(
    parcelaMensal,
    trintaPorcentoSalario
  );
  telaDeResultado.innerHTML += resultadoFinal;
}

function converterAnosParaMeses(anos) {
  return anos * mesesEmUmAno;
}

function calcularParcelaMensal(valorDaCasa, mesesPagando) {
  return valorDaCasa / mesesPagando;
}

function calcular30PorcentoSalário(valorDoSalario) {
  return valorDoSalario * (30 / 100);
}

function verificarLiberacaoDoEmprestimo(parcelaMensal, trintaPorcentoSalario) {
  if (parcelaMensal > trintaPorcentoSalario) {
    return "Empréstimo LIBERADO!";
  } else {
    return "Empréstimo NEGADO!";
  }
}

function formatarParaReal(valorDesformatado) {
  return valorDesformatado.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
