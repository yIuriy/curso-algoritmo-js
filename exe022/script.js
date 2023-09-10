//Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação ao alistamento militar
// Se estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento.
// Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento

const telaDeResultado = document.getElementById("telaDeResultado");

const idadeDeAlistamento = 18;

function mostrarResultadoNaTela() {
  let anoDeNascimento = Number(
    document.getElementById("anoDeNascimento").value
  );
  let idadeDoUsuario = calcularIdade(anoDeNascimento);
  if (idadeDoUsuario < 18) {
    telaDeResultado.innerHTML = `Você tem ${idadeDoUsuario} anos e faltam ${anosQueFaltam(
      idadeDoUsuario
    )} para seu alistamento.`;
  } else if (idadeDoUsuario === 18) {
    telaDeResultado.innerHTML = `Você tem ${idadeDoUsuario} anos! Aliste-se agora! 
           `;
  } else {
    telaDeResultado.innerHTML = `Você tem ${idadeDoUsuario} anos e se passaram ${anosQuePassaram(
      idadeDoUsuario
    )} desde o seu alistamento.`;
  }
}

function calcularIdade(anoDeNascimento) {
  const data = new Date();
  const anoAtual = data.getFullYear();
  return anoAtual - anoDeNascimento;
}

function anosQueFaltam(idadeQualquer) {
  return idadeDeAlistamento - idadeQualquer;
}

function anosQuePassaram(idadeQualquer) {
  return idadeQualquer - idadeDeAlistamento;
}
