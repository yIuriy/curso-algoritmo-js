//Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. No final, analise a média e mostre se o aluno teve ou não um bom aproveitamento (se ficou acima da média 7.0).

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let primeiraNota = Number(document.getElementById("primeiraNota").value);
  let segundaNota = Number(document.getElementById("segundaNota").value);
  let mediaDoAluno = calcularMedia(primeiraNota, segundaNota);
  telaDeResultado.innerHTML = `<p>Sua primeira nota foi ${primeiraNota} e segunda foi ${segundaNota}.</p>`;
  if (mediaDoAluno > 7) {
    telaDeResultado.innerHTML += `
    <p>Sua média foi de ${mediaDoAluno} e você <strong>teve</strong> um bom aproveitamento.Continue assim!</p>`;
  } else {
    telaDeResultado.innerHTML += `<p>Sua média foi de ${mediaDoAluno} e você <strong>não</strong> teve um bom aproveitamento.Melhore! </p> `;
  }
}

function calcularMedia(primeiraNota, segundaNota) {
  return ((primeiraNota + segundaNota) / 2).toFixed(2);
}
