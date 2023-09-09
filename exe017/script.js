//Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let velocidadeDoVeiculo = Number(
    document.getElementById("velocidadeDoVeiculo").value
  );
  if (isAcimaDaVelocidade(velocidadeDoVeiculo)) {
    let valorDaMulta = calcularValorDaMulta(velocidadeDoVeiculo);
    telaDeResultado.innerHTML = `Você foi multado em  
        ${valorDaMulta.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}.`;
  } else {
    telaDeResultado.innerHTML = `Dirija com segurança!`;
  }
}

function isAcimaDaVelocidade(velocidade) {
  return velocidade > 80;
}

function calcularValorDaMulta(velocidade) {
  const valorMultaPorKm = 5;
  return (velocidade - 80) * valorMultaPorKm;
}
