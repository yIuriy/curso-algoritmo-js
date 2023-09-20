//Crie um programa que leia 6 números inteiros e no final mostre quantos deles são pares e quantos são ímpares.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let contador = 1;
  let numeroDePares = 0;
  let numeroDeImpares = 0;
  while (contador < 7) {
    let numeroInteiro = Number(
      window.prompt(`Digite o ${contador}º inteiro qualquer: `)
    );
    if(numeroInteiro % 2 ===0){
      numeroDePares ++
    }else{
      numeroDeImpares ++
    }
    contador++;
  }
  telaDeResultado.innerHTML = `<p>Você digitou ${numeroDePares} números pares.</p><p>Você digitou ${numeroDeImpares} ímpares.</p>`
}
