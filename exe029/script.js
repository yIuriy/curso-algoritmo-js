//Desenvolva um programa que leia o nome de um funcionário, seu salário, quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de acordo com a tabela a seguir:
//  Até 3 anos de empresa: aumento de 3%
//  entre 3 e 10 anos: aumento de 12.5%
//  10 anos ou mais: aumento de 20%

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let nomeFuncionario = document.getElementById("nomeFuncionario").value;
  let tempoNaEmpresa = analisarTempoNaEmpresa();
  let porcentagemDeAumento = analisarQuantoAumentara(tempoNaEmpresa);
  let salarioAtual = Number(document.getElementById("salarioAtual").value);
  let salarioNovo = calcularSalarioNovo(salarioAtual, porcentagemDeAumento);
  telaDeResultado.innerHTML = `<p>O funcionário(a) ${nomeFuncionario} trabalha na empresa a ${tempoNaEmpresa} anos.</p>`;
  telaDeResultado.innerHTML += `<p>Seu salário atual é ${salarioAtual.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`;
  telaDeResultado.innerHTML += `<p>Seu novo salário será de ${salarioNovo.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`;
}

function analisarTempoNaEmpresa() {
  return Number(document.getElementById("tempoNaEmpresa").value);
}

function analisarQuantoAumentara(tempoQueTrabalhaNaEmpresa) {
  if (tempoQueTrabalhaNaEmpresa < 3) {
    return 3 / 100;
  } else if (tempoQueTrabalhaNaEmpresa < 10) {
    return 12.5 / 100;
  } else {
    return 20 / 100;
  }
}

function calcularSalarioNovo(salarioAtual, porcentagemDeAumento) {
  return salarioAtual + salarioAtual * porcentagemDeAumento;
}
