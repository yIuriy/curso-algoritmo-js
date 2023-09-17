//  Faça um algoritmo que pergunte ao usuário um número inteiro e positivo qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    telaDeResultado.innerHTML = ""
    let valorLimiteContagem = Number(document.getElementById("valorLimiteContagem").value)
    let contador = 1
    while (contador <= valorLimiteContagem){
        telaDeResultado.innerHTML += ` ${contador}`
        contador ++ 
    }  
    telaDeResultado.innerHTML += " Acabou!"
}
