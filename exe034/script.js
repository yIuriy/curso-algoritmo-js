//O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o indivíduo dentro de certas faixas.
//  abaixo de 18.5: Abaixo do peso
//  entre 18.5 e 25: Peso ideal
//  entre 25 e 30: Sobrepeso
//  entre 30 e 40: Obesidade
//  acima de 40: Obseidade mórbida

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela() {
  let alturaPessoa = Number(document.getElementById("alturaPessoa").value);
  let pesoPessoa = Number(document.getElementById("pesoPessoa").value);
  let imcPessoa = calculadorDeIndiceDeMassaCorporea(alturaPessoa, pesoPessoa);
  let classificacaoDoImc = classificarImc(imcPessoa);
  telaDeResultado.innerHTML = `<p>Seu peso é de ${pesoPessoa}Kg, sua altura é de ${alturaPessoa}, logo seu IMC é de ${imcPessoa}, se enquadrando na classificação: ${classificacaoDoImc}.</p>`
}

function calculadorDeIndiceDeMassaCorporea(alturaEmMetros, pesoEmQuilos) {
  return Math.floor(pesoEmQuilos / alturaEmMetros ** 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do Peso";
  } else if (imc < 25) {
    return "Peso Ideal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 40) {
    return "Obesidade";
  } else {
    return "Obesidade Mórbida";
  }
}
