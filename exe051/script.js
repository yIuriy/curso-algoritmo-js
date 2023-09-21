//Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela qual foi o maior e qual foi o menor preço digitados.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let maiorPreco = 0;
  let menorPreco = 0;
  let precoProduto = 0;
  let contador = 1;
  precoProduto = Number(
    window.prompt(`Digite o valor do ${contador}º produto: `)
  );
  maiorPreco = precoProduto;
  menorPreco = precoProduto;

  while (contador < 8) {
    precoProduto = Number(
      window.prompt(`Digite o valor do ${contador}º produto: `)
    );

    if (precoProduto > maiorPreco) {
      maiorPreco = precoProduto;
    }

    if (precoProduto < menorPreco) {
      menorPreco = precoProduto;
    }
    contador++;
  }
  telaDeResultado.innerHTML = `O maior preço digitado foi ${maiorPreco.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )} e o menor ${menorPreco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}.`;
}
