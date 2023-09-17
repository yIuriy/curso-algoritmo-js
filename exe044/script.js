//  Crie um algoritmo que leia o valor inicial da contagem, o valor final e o incremento, mostrando em seguida todos os valores no intervalo:
// Ex: Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  telaDeResultado.innerHTML = "";
  let contador = Number(document.getElementById("valorInicioContagem").value);
  let valorLimiteContagem = Number(
    document.getElementById("valorLimiteContagem").value
  );
  let valorIncremento = Number(
    document.getElementById("valorIncremento").value)
  ;

  while (contador <= valorLimiteContagem) {
    telaDeResultado.innerHTML += ` ${contador}`;
    contador += valorIncremento;
  }
  telaDeResultado.innerHTML += " Acabou!";
}
