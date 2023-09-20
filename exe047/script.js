//Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 + 450 + 400 + 350 + 300 + ... + 50 + 0  

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  telaDeResultado.innerHTML = ""
  contador = 500;
  somaDosValores = 0
  while (contador >= 0) {
    telaDeResultado.innerHTML += `${contador}  `;
    somaDosValores +=contador
    contador -= 50;
  }
  telaDeResultado.innerHTML += "Acabou!"
  telaDeResultado.innerHTML += `<p>O valor da soma entre todos os valores  é de ${somaDosValores}.</p>`
}
