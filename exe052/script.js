// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
//a) Qual é a média de idade do grupo
//b) Quantas pessoas tem mais de 18 anos
//c) Quantas pessoas tem menos de 5 anos
//d) Qual foi a maior idade lida
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let somaDasIdades = 0;
  let pessoasComMaisDe18Anos = 0;
  let pessoasComMenosDe5Anos = 0;
  let maiorIdade = 0;
  let contador = 1;
  let idadeDigitada = Number(
    window.prompt(`Digite a idade da ${contador}º pessoa: `)
  );
  somaDasIdades += idadeDigitada;
  maiorIdade = idadeDigitada;

  while (contador < 10) {
    contador++;
    if (idadeDigitada > 18) {
      pessoasComMaisDe18Anos++;
    }
    if (idadeDigitada < 5) {
      pessoasComMenosDe5Anos++;
    }
    if (idadeDigitada > maiorIdade) {
      maiorIdade = idadeDigitada;
    }
    somaDasIdades += idadeDigitada;
    idadeDigitada = Number(
      window.prompt(`Digite a idade da ${contador}º pessoa: `)
    );
  }

  let mediaDasIdades = calcularMediaDasIdades(somaDasIdades);
  telaDeResultado.innerHTML += `<p>A média de idade do grupo é ${mediaDasIdades}.</p>`
  telaDeResultado.innerHTML += `<p>Há ${pessoasComMaisDe18Anos} pessoas com mais de 18 anos.</p>`
  telaDeResultado.innerHTML += `<p>Há ${pessoasComMenosDe5Anos} pessoas com menos de 5 anos.</p>`
  telaDeResultado.innerHTML += `<p>A maior idade digitada foi ${maiorIdade}.</p>`
}

function calcularMediaDasIdades(somaDasIdades) {
  return somaDasIdades / 10;
}
