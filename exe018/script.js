// Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    let anoDeNascimento = Number(document.getElementById("anoDeNascimento").value)
    let idade = calcularIdade(anoDeNascimento)
    if(idade >= 18 ){
        telaDeResultado.innerHTML = `Você ${idade} anos, logo pode votar.`
    } else{
        telaDeResultado.innerHTML = `Você tem ${idade} anos, logo não pode votar!`
    }
}

function calcularIdade(anoDeNascimento){
    const data = new Date
    const anoAtual = data.getFullYear()
    return anoAtual - anoDeNascimento
}