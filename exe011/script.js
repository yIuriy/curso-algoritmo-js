// Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta

const telaDeResultado = document.getElementById("telaDeResultado");

function calcularDelta() {
  const valorDeA = Number(window.prompt("Qual o valor de a?"));
  const valorDeB = Number(window.prompt("Qual o valor de b?"));
  const valorDeC = Number(window.prompt("Qual o valor de c?"));
  let valorDeDelta = (valorDeB ** 2) - 4 * valorDeA * valorDeC;

  telaDeResultado.innerHTML = `<h3>Resolvendo Bhaskara</h3>`;
  telaDeResultado.innerHTML += `<p>A equação atual é <strong>${valorDeA}x<sup>2</sup> + ${valorDeB}x + ${valorDeC} = 0</strong></p>`;
  telaDeResultado.innerHTML += `<p>O cálculo realizado será <strong>&#916; = ${valorDeB}<sup>2</sup> - 4 . ${valorDeA} . ${valorDeC}</strong> </p>`;
  telaDeResultado.innerHTML += `<p>O valor calculado foi <strong>&#916; = ${valorDeDelta}</strong></p>`;
}
