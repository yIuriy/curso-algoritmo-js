//Faça um programa que leia 7 números inteiros e no final mostre o somatório entre eles.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let contador = 1;
  let somatorioDosValores = 0;
  while (contador < 8) {
    let numeroInteiro = Number(
      window.prompt(`Digite o ${contador}º inteiro qualquer: `)
    );
    somatorioDosValores += numeroInteiro;  
    contador++;

  }
  telaDeResultado.innerHTML = `O somatório dos valores digitados é ${somatorioDosValores}.`
}
