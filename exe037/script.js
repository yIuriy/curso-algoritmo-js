// Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. No final, mostre o seu novo salário, baseado na tabela a seguir:
//  Mulheres
// - menos de 15 anos de empresa: +5%
// - de 15 até 20 anos de empresa: +12%
// - mais de 20 anos de empresa: +23%
//  Homens
// - menos de 20 anos de empresa: +3%
// - de 20 até 30 anos de empresa: +13%
// - mais de 30 anos de empresa: +25%

const telaDeResultado = document.getElementById("telaDeResultado");

const aumentoMulheresMenos15AnosEmpresa = 0.05;
const aumentoMulheres15Ate20AnosEmpresa = 0.12;
const aumentoMulheresMais20AnosEmpresa = 0.23;

const aumentoHomensMenos20AnosEmpresa = 0.03;
const aumentoHomens20Ate30AnosEmpresa = 0.13;
const aumentoHomensMais30AnosEmpresa = 0.25;

function mostrarResultadoNaTela() {
  let porcentagemDeAumento = 0;
  let sexoInformado = verificarSexo();
  console.log(sexoInformado);
  let salarioAtual = Number(document.getElementById("salarioAtual").value);
  let anosNaEmpresa = Number(document.getElementById("anosNaEmpresa").value);
  if (sexoInformado == "Mulher") {
    porcentagemDeAumento = verificarPorcentagemDeAumentoFeminina(anosNaEmpresa);
  } else if (sexoInformado == "Homem") {
    porcentagemDeAumento =
      verificarPorcentagemDeAumentoMasculina(anosNaEmpresa);
  }
  let salarioNovo = calcularSalarioNovo(salarioAtual, porcentagemDeAumento);
  telaDeResultado.innerHTML = `O funcionário ${sexoInformado} trabalha na empresa a ${anosNaEmpresa} anos, tem um salário de ${salarioAtual.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}, que passará a ser de <strong>
      ${salarioNovo.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}
  </strong>.`;
}

function verificarSexo() {
  let sexoFeminino = document.getElementById("sexoFeminino");
  let sexoMasculino = document.getElementById("sexoMasculino");
  if (sexoFeminino.checked) {
    return "Mulher";
  } else if (sexoMasculino.checked) {
    return "Homem";
  }
}

function verificarPorcentagemDeAumentoFeminina(anosTrabalhados) {
  if (anosTrabalhados < 15) {
    return aumentoMulheresMenos15AnosEmpresa;
  } else if (anosTrabalhados < 20) {
    return aumentoMulheres15Ate20AnosEmpresa;
  }
  return aumentoMulheresMais20AnosEmpresa;
}

function verificarPorcentagemDeAumentoMasculina(anosTrabalhados) {
  if (anosTrabalhados < 20) {
    return aumentoHomensMenos20AnosEmpresa;
  } else if (anosTrabalhados < 30) {
    return aumentoHomens20Ate30AnosEmpresa;
  }
  return aumentoHomensMais30AnosEmpresa;
}

function calcularSalarioNovo(salarioAtual, porcentagemDeAumento) {
  return salarioAtual * porcentagemDeAumento + salarioAtual;
}
