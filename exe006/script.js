//Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor
function calcularAntecessorSucessor() {
  let valor = Number(window.prompt("Digite um número: "));
  let antecessorValor = valor - 1;
  let sucessorValor = valor + 1;
  window.alert(`O antecessor de ${valor} é ${antecessorValor}.
O sucessor de ${valor} é ${sucessorValor}.`);
}
