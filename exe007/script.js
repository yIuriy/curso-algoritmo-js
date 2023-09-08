//Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte
function calcularDobroTercaParte() {
  let valor = Number(window.prompt("Digite um número: "));
  let dobro = valor * 2
  let tercaParte = valor / 3
  window.alert(`O dobro de ${valor} é ${dobro}.
A terça parte de ${valor} é ${tercaParte.toFixed(2)}. `)}
 
