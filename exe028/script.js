// Faça um programa que leia a largura e o comprimento de um terreno retangular, calculando e mostrando a sua área em m². O programa também devemostrar a classificação desse terreno, de acordo com a lista abaixo:
//  Abaixo de 100m² = TERRENO POPULAR
// Entre 100m² e 500m² = TERRENO MASTER
// Acima de 500m² = TERRENO VIP
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    let areaDoTerreno = calcularAreaDoTerreno()
    let classificaçãoDoTerreno = analisarClassificacaoDoTerreno(areaDoTerreno)
    telaDeResultado.innerHTML = `<p>Com uma área de ${areaDoTerreno}m<sup>2</sup>, seu terreno se enquadra na classificação: ${classificaçãoDoTerreno}.</p>`
}

function calcularAreaDoTerreno(){
    let larguraDoTerreno = Number(document.getElementById("valorLargura").value)
    let comprimentoDoTerreno = Number(document.getElementById("valorComprimento").value)
    return larguraDoTerreno * comprimentoDoTerreno

}

function analisarClassificacaoDoTerreno(areaDoTerreno){
    if(areaDoTerreno < 100)
    return "TERRENO POPULAR"
else if(areaDoTerreno < 500){
    return "TERRENO MASTER"
}else{
    return "TERRENO VIP"
}
}
