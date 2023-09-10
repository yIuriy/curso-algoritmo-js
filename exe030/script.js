// Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo de triângulo será formado:
// EQUILÁTERO: todos os lados iguais
// ISÓSCELES: dois lados iguais
// ESCALENO: todos os lados diferentes

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let primeiroSegmento = Number(
    document.getElementById("primeiroSegmento").value
  );
  let segundoSegmento = Number(
    document.getElementById("segundoSegmento").value
  );
  let terceiroSegmento = Number(
    document.getElementById("terceiroSegmento").value
  );

  if (
    isPossivelFormarTriagulo(
      primeiroSegmento,
      segundoSegmento,
      terceiroSegmento
    )
  ) {
    telaDeResultado.innerHTML =
      "<p>É POSSÍVEL formar um triângulo com os valores informados!</p>";
    let tipoDeTriangulo = analisarTipoDeTriangulo(
      primeiroSegmento,
      segundoSegmento,
      terceiroSegmento
    );
    telaDeResultado.innerHTML += `<p>O tipo de triângulo formado será: ${tipoDeTriangulo}.</p>`;
  } else {
    telaDeResultado.innerHTML =
      "<p>NÃO é possível formar um triângulo com os valores informados!</p>";
  }
}

function isPossivelFormarTriagulo(
  primeiroSegmento,
  segundoSegmento,
  terceiroSegmento
) {
  return (
    primeiroSegmento < segundoSegmento + terceiroSegmento &&
    segundoSegmento < primeiroSegmento + terceiroSegmento &&
    terceiroSegmento < primeiroSegmento + segundoSegmento
  );
}

function analisarTipoDeTriangulo(
  primeiroSegmento,
  segundoSegmento,
  terceiroSegmento
) {
  if (
    primeiroSegmento == segundoSegmento &&
    primeiroSegmento == terceiroSegmento
  ) {
    return "EQUILÁTERO";
  } else if (
    primeiroSegmento == segundoSegmento ||
    primeiroSegmento == terceiroSegmento ||
    segundoSegmento == terceiroSegmento
  ) {
    return "ISÓSCELES";
  }
  return "ESCALENO";
}
