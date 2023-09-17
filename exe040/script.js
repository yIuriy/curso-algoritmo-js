// Crie um aplicativo que mostre na tela a seguinte contagem:
// 0 3 6 9 12 15 18 Acabou!
 
const telaDeResultado = document.getElementById("telaDeResultado");

function mostrarResultadoNaTela(){
    telaDeResultado.innerHTML = ""
    let contador = 0
    while (contador < 19){
        telaDeResultado.innerHTML += ` ${contador}`
        contador += 3 
    }  
    telaDeResultado.innerHTML += " Acabou!"
}
