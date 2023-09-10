//Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let anoSelecionado = Number(document.getElementById("anoSelecionado").value);
  if (isBissexto(anoSelecionado)) {
    telaDeResultado.innerHTML = `O ano de ${anoSelecionado} é Bissexto.`;
  } else {
    telaDeResultado.innerHTML = `O ano de ${anoSelecionado} não é Bissexto.`;
  }
}

function isBissexto(ano) {
  return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0;
}
