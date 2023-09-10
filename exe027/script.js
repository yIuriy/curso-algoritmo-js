//Crie um programa que leia duas notas de um aluno e calcule a sua média, mostrando uma mensagem no final, de acordo com a média atingida:
// Média até 4.9: REPROVADO
// Média entre 5.0 e 6.9: RECUPERAÇÃO
// Média 7.0 ou superior: APROVADO

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let mediaDoAluno = calcularMedia();
  let situacaoDoAluno = analisarSituacaoDoAluno(mediaDoAluno);
  telaDeResultado.innerHTML = `Com uma média de ${mediaDoAluno}, o aluno esta: ${situacaoDoAluno}.`;
}

function calcularMedia() {
  let primeiroValor = Number(document.getElementById("primeiraNota").value);
  let segundoValor = Number(document.getElementById("segundaNota").value);
  return (mediaDosValores = ((primeiroValor + segundoValor) / 2).toFixed(2));
}

function analisarSituacaoDoAluno(mediaDoAluno) {
  if (mediaDoAluno < 4.9) {
    return "REPROVADO";
  } else if (mediaDoAluno < 6.9) {
    return "RECUPERAÇÃO";
  } else {
    return "APROVADO";
  }
}
