// Desenvolva um programa que mostre na tela a seguinte contagem:
// 100 95 90 85 80 ... 0 Acabou!
 
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    telaDeResultado.innerHTML = ""
    let contador = 100
    while (contador > -1){
        telaDeResultado.innerHTML += ` ${contador}`
        contador -- 
    }  
    telaDeResultado.innerHTML += " Acabou!"
}
