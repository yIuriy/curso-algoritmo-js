// Um programa de vida saudável quer dar pontos atividades físicas que podem ser trocados por dinheiro. O sistema funciona assim:
// Cada hora de atividade física no mês vale pontos
// até 10h de atividade no mês: ganha 2 pontos por hora
// de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// acima de 20h de atividade no mês: ganha 10 pontos por hora
// A cada ponto ganho, o cliente fatura R$0,05 (5 centavos)

const telaDeResultado = document.getElementById("telaDeResultado");

const valorGanhoPorPonto = 0.05;
const pontosGanhosAte10HorasPraticadas = 2;
const pontosGanhosEntre10_20HorasPraticadas = 5;
const pontosGanhosAcima20HorasPraticadas = 10;

function mostrarResultadoNaTela() {
  let horasAtividadeFisica = Number(
    document.getElementById("horasAtividadeFisica").value
  );
  let pontosGanho = calcularPontosGanhos(horasAtividadeFisica);
  let valorGanho = calcularValorGanho(pontosGanho);
  telaDeResultado.innerHTML = `No mês você praticou ao todo ${horasAtividadeFisica} horas de atividade física, ganhando assim ${pontosGanho} pontos, resultando em ${valorGanho.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.`;
}

function calcularPontosGanhos(horasAtividadeFisica) {
  if (horasAtividadeFisica < 10)
    return horasAtividadeFisica * pontosGanhosAte10HorasPraticadas;
  else if (horasAtividadeFisica < 20) {
    return horasAtividadeFisica * pontosGanhosEntre10_20HorasPraticadas;
  } else {
    return horasAtividadeFisica * pontosGanhosAcima20HorasPraticadas;
  }
}

function calcularValorGanho(pontos) {
  return pontos * valorGanhoPorPonto;
}
