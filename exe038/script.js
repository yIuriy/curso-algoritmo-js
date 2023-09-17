//Escreva um programa que mostre na tela a seguinte contagem: 
// 6 7 8 9 10 11 Acabou!

const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    let contador = 6
    while (contador < 12){
        telaDeResultado.innerHTML += ` ${contador}`
        contador ++ 
    }  
    telaDeResultado.innerHTML += " Acabou!"
}
