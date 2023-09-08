// Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina

const telaDeResultado = document.getElementById("telaDeResultado");

function calcularMedia() {
  const primeiroValor = Number(document.getElementById("primeiroValor").value);
  const segundoValor = Number(document.getElementById("segundoValor").value);

  let mediaDosValores = (primeiroValor + segundoValor)  / 2
  telaDeResultado.innerHTML = `A média entre ${primeiroValor} e ${segundoValor} é igual a ${mediaDosValores}`
}