// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a somados outros dois.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  if (isPossivelFormarTriagulo()) {
    telaDeResultado.innerHTML =
      "É POSSÍVEL formar um triângulo com os valores informados!";
  } else {
    telaDeResultado.innerHTML =
      "NÃO é possível formar um triângulo com os valores informados!";
  }
}

function isPossivelFormarTriagulo() {
  let primeiroSegmento = Number(
    document.getElementById("primeiroSegmento").value
  );
  let segundoSegmento = Number(
    document.getElementById("segundoSegmento").value
  );
  let terceiroSegmento = Number(
    document.getElementById("terceiroSegmento").value
  );
  return (
    primeiroSegmento < segundoSegmento + terceiroSegmento &&
    segundoSegmento < primeiroSegmento + terceiroSegmento &&
    terceiroSegmento < primeiroSegmento + segundoSegmento
  );
}
