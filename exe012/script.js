//Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarValorNaTela() {
  let precoProduto = Number(document.getElementById("precoDoProduto").value);
  let fPrecoProduto = precoProduto.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  let precoDescontoAplicado = aplicar5Desconto(precoProduto).toLocaleString(
    "pt-br",
    { style: "currency", currency: "BRL" }
  );
  telaDeResultado.innerHTML = `O preço original era de ${fPrecoProduto}, com 5% de desconto ficará ${precoDescontoAplicado}.`;
}

function aplicar5Desconto(precoQualquer) {
  return precoQualquer - precoQualquer * (5 / 100);
}
