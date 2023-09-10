//Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais longas.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let distanciaDaViagem = Number(
    document.getElementById("distanciaDaViagem").value
  );
  let precoDaPassagem = calcularPrecoPassagem(distanciaDaViagem);
  telaDeResultado.innerHTML = `O preço da passagem de sua viagem de ${distanciaDaViagem}Km será de ${precoDaPassagem.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.`;
}

function calcularPrecoPassagem(distanciaDaViagem) {
  if (distanciaDaViagem < 200) {
    return calcularTarifaDistanciaCurta(distanciaDaViagem);
  } else {
    return calcularTarifaDistanciaLonga(distanciaDaViagem);
  }
}

function calcularTarifaDistanciaCurta(distanciaDaViagem) {
  return distanciaDaViagem * 0.5;
}
function calcularTarifaDistanciaLonga(distanciaDaViagem) {
  return distanciaDaViagem * 0.45;
}
