//Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let diasTrabalhados = Number(
    document.getElementById("diasTrabalhados").value
  );
  let salarioNoMes = calcularSalarioNoMes(diasTrabalhados);
  telaDeResultado.innerHTML = `Nesse mês você trabalhou ${diasTrabalhados} dias e obteve o salário de ${salarioNoMes.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.`;
}

function calcularSalarioNoMes(diasTrabalhados) {
  const horasTrabalhadosPorDia = 8;
  const ganhoPorHoraTrabalhada = 25;
  const ganhoPorDiaTrabalhado = horasTrabalhadosPorDia * ganhoPorHoraTrabalhada;
  return diasTrabalhados * ganhoPorDiaTrabalhado;
}
