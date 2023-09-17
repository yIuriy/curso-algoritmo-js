//Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programaque leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a tabela a seguir:
//  Carros populares (aluguel de R$90 por dia)
// Até 100Km percorridos: R$0,20 por Km
//  Acima de 100Km percorridos: R$0,10 por Km
//  Carros de luxo (aluguel de R$150 por dia)
//  Até 200Km percorridos: R$0,30 por Km
//  Acima de 200Km percorridos: R$0,25 por Km

const telaDeResultado = document.getElementById("telaDeResultado");
const valorPorDiaAlugadoCarroPopular = 90;
const valorAte100KmCarroPopular = 0.2;
const valorAcima100KmCarroPopular = 0.1;
const valorPorDiaAlugadoCarroLuxo = 150;
const valorAte100KmCarroLuxo = 0.3;
const valorAcima100KmCarroLuxo = 0.25;

function mostrarResultadoNaTela() {
  let precoFinalDoAluguel = 0;
  let tipoCarroAlugado = verificarTipoCarroAlugado();
  let diasAlugado = Number(document.getElementById("diasAlugado").value);
  let kmPercorridos = Number(document.getElementById("kmPercorridos").value);
  if (tipoCarroAlugado == "Carro Popular") {
    precoFinalDoAluguel = calcularPrecoFinalCarroPopular(
      diasAlugado,
      kmPercorridos
    );
  }
  if (tipoCarroAlugado == "Carro De Luxo") {
    precoFinalDoAluguel = calcularPrecoFinalCarroLuxo(
      diasAlugado,
      kmPercorridos
    );
  }
  telaDeResultado.innerHTML = `<p>Você alugou um ${tipoCarroAlugado} por ${diasAlugado} dias e percorreu ${kmPercorridos} com, logo você pagará ${precoFinalDoAluguel.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
  )}.</p>`;
}

function verificarTipoCarroAlugado() {
  let carroPopular = document.getElementById("carroPopular");
  let carroLuxo = document.getElementById("carroLuxo");
  if (carroPopular.checked) {
    return "Carro Popular";
  } else if (carroLuxo.checked) {
    return "Carro De Luxo";
  }
}

function calcularPrecoFinalCarroPopular(diasAlugado, kmPercorridos) {
  let precoDosDiasAlugados = 0;
  let precosDosKmPercorridos = 0;
  precoDosDiasAlugados = diasAlugado * valorPorDiaAlugadoCarroPopular;
  if (kmPercorridos < 100) {
    precosDosKmPercorridos = kmPercorridos * valorAte100KmCarroPopular;
  } else {
    precosDosKmPercorridos = kmPercorridos * valorAcima100KmCarroPopular;
  }
  return precoDosDiasAlugados + precosDosKmPercorridos;
}

function calcularPrecoFinalCarroLuxo(diasAlugado, kmPercorridos) {
  let precoDosDiasAlugados = 0;
  let precosDosKmPercorridos = 0;
  precoDosDiasAlugados = diasAlugado * valorPorDiaAlugadoCarroLuxo;
  if (kmPercorridos < 100) {
    precosDosKmPercorridos = kmPercorridos * valorAte100KmCarroLuxo;
  } else {
    precosDosKmPercorridos = kmPercorridos * valorAcima100KmCarroLuxo;
  }
  return precoDosDiasAlugados + precosDosKmPercorridos;
}
