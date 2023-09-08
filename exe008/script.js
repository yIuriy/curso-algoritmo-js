//Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas

const telaDeResultado = document.getElementById("telaDeResultado");

function converterMedidas() {
  const metros = Number(document.getElementById("valorEmMetros").value);
  let km = (metros / 1000).toLocaleString("pt-BR");
  var hm = (metros / 100).toLocaleString("pt-BR");
  var dam = (metros / 10).toLocaleString("pt-BR");
  var dm = (metros * 10).toLocaleString("pt-BR");
  var cm = (metros * 100).toLocaleString("pt-BR");
  var mm = (metros * 1000).toLocaleString("pt-BR");

  telaDeResultado.innerHTML = `<h6>A distância de ${metros.toLocaleString(
    "pt-BR"
  )} metros, corresponde a:</h6>`;
  telaDeResultado.innerHTML += `
       <ul>
         <li>${km} quilômetros (Km)</li>
         <li>${hm} hectômetros (Hm)</li>
         <li>${dam} decâmetros (Dam)</li>
         <li>${dm} decímetros (dm)</li>
         <li>${cm} centímetros (cm)</li>
         <li>${mm} milímetros (mm)</li>
       </ul>`;
  
}
