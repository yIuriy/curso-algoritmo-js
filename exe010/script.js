//Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2metros quadrados

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let alturaDaParede = Number(document.getElementById("alturaDaParede").value);
  let larguraDaParede = Number(
    document.getElementById("larguraDaParede").value
  );
  let areaDaParede = calcularArea(alturaDaParede, larguraDaParede);
  let tintaNecessaria = calcularTintaNecessaria(areaDaParede);
  telaDeResultado.innerHTML = `<p>A área da parede é de ${areaDaParede}m<sup>2</sup>, com isso será necessário ${tintaNecessaria} litros de tinta.</p>`;
}

function calcularArea(alturaDaParede, larguraDaParede) {
  return (areaDaParede = alturaDaParede * larguraDaParede);
}

function calcularTintaNecessaria(areaDaParede) {
  return (tintaNecessaria = areaDaParede / 2);
}
