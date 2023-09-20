//Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela qual foi o maior e qual foi o menor preço digitados.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let contador = 0;
  let valorSorteado = 0;
  let numerosAcimaDe5 = 0;
  let numerosDiviseisPor3 = 0;
  let numerosSorteados = [];

  while (contador < 20) {
    valorSorteado = sortearNumeroAleatorio();
    numerosSorteados.push(valorSorteado);
    if (valorSorteado > 5) {
      numerosAcimaDe5++;
    }
    if (valorSorteado % 3 === 0) {
      numerosDiviseisPor3++;
    }

    contador++;
  }
  telaDeResultado.innerHTML = `<p>Número Sorteados: ${numerosSorteados}.</p>`;
  telaDeResultado.innerHTML += `<p>Quantos números estão acima de 5: ${numerosAcimaDe5}.</p>`;
  telaDeResultado.innerHTML += `<p>Quantos números são divisíveis por 3: ${numerosDiviseisPor3}.</p>`;
}

function sortearNumeroAleatorio() {
  return Math.floor(Math.random() * 9) + 1;
}
