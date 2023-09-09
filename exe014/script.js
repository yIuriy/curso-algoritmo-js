//A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let KmPercorridos = Number(document.getElementById("KmPercorridos").value);
  let diasAlugado = Number(document.getElementById("diasAlugado").value);
  let precoTotal = calcularCustoTotal(KmPercorridos, diasAlugado);
  telaDeResultado.innerHTML = `Você percorreu ${KmPercorridos} quilômetros, e passou ${diasAlugado} dias com o carro alugado, logo, o preço total é de ${precoTotal.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.`;
}

function calcularCustoTotal(km, dias) {
  const custoPorDia = 90;
  const custoPorKmRodado = 0.2;
  return custoPorKmRodado * km + custoPorDia * dias;
}
