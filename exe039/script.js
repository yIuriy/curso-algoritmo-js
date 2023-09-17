//Faça um algoritmo que mostre na tela a seguinte contagem:
//10 9 8 7 6 5 4 3 Acabou!
 
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    let contador = 10
    while (contador > 2){
        telaDeResultado.innerHTML += ` ${contador}`
        contador -- 
    }  
    telaDeResultado.innerHTML += " Acabou!"
}
