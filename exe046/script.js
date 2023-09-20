//  Crie um programa que calcule e mostre na tela o resultado da soma entre 6 + 8 + 10 + 12 + 14 + ... + 98 + 100.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  telaDeResultado.innerHTML = ""
  contador = 0;
  somaPares = 0
  while (contador < 100) {
    telaDeResultado.innerHTML += `${contador} + `;
    somaPares +=contador
    contador += 2;
  }
  telaDeResultado.innerHTML += "Acabou!"
  telaDeResultado.innerHTML += `<p>O valor da soma entre todos os pares até 100 é ${somaPares}.</p>`
}
