//Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar.

const telaDeResultado = document.getElementById("telaDeResultado");

const cotacaoAtual = Number(window.prompt("Qual a cotação do dólar agora?"));

function converterMoeda() {
  let valorEmReais = Number(document.getElementById("valorEmReais").value);
  var freal = valorEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  var fdolar = (valorEmReais / cotacaoAtual).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  telaDeResultado.innerHTML = `Com ${freal} você pode comprar ${fdolar}`;
}
