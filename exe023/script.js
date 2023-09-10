// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos para todos, mas especialmente para mulheres. Faça um programa que leia nome, sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo que:
//  Homens ganham 5% de desconto
//  Mulheres ganham 13% de desconto

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let nomeInformado = document.getElementById("nomeInformado").value;
  var sexoInformado = verificarSexo();
  let valorCompras = Number(document.getElementById("valorCompras").value);
  let precoFinal = calcularPrecoFinal(valorCompras, sexoInformado);
  telaDeResultado.innerHTML = `<p>Seu nome é ${nomeInformado}.</p>`;
  telaDeResultado.innerHTML += `<p>Você é ${sexoInformado}.</p>`;
  telaDeResultado.innerHTML += `<p>Você pagará ${precoFinal.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )} nas suas compras.</p>`;
}

function verificarSexo() {
  let sexoFeminino = document.getElementById("sexoFeminino");
  let sexoMasculino = document.getElementById("sexoMasculino");
  if (sexoFeminino.checked) {
    return "Mulher";
  } else if (sexoMasculino.checked) {
    return "Homem";
  }
}

function calcularPrecoFinal(valorDasCompras, sexoInformado) {
  if (sexoInformado == "Mulher") {
    return aplicarDescontoDe13(valorDasCompras);
  } else if (sexoInformado == "Homem") {
    return aplicarDescontoDe5(valorDasCompras);
  }
}

function aplicarDescontoDe13(valorDasCompras) {
  return valorDasCompras - valorDasCompras * (13 / 100);
}
function aplicarDescontoDe5(valor) {
  return valor - valor * (5 / 100);
}
