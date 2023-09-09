//Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let cigarrosPorDia = Number(document.getElementById("cigarrosPorDia").value);
  let anosQueFumou = Number(document.getElementById("anosQueFumou").value);
  let totalDeDiasPerdidos = calcularDiasDeVidaPerdidos(
    cigarrosPorDia,
    anosQueFumou
  );
  telaDeResultado.innerHTML = `Você fumou ${cigarrosPorDia} cigarros por dia, durante ${anosQueFumou} anos, logo, você perdeu ${totalDeDiasPerdidos} dias de vida.`;
}

function calcularDiasDeVidaPerdidos(cigarrosPorDia, anosQueFumou) {
  const minutosDeVidaPerdidosPorCigarro = 10;
  let minutosPerdidosPorDia = cigarrosPorDia * minutosDeVidaPerdidosPorCigarro;
  let minutosPerdidosPorMes = minutosPerdidosPorDia * 30;
  let minutosPerdidosNosAnos = minutosPerdidosPorMes * 12 * anosQueFumou;

  let diasDeVidaPerdidos = minutosPerdidosNosAnos / 60 / 24;
  return diasDeVidaPerdidos;
}
