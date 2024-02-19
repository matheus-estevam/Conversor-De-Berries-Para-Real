const botaoConverter = document.querySelector("#converter");
const berryInput = document.querySelector("#berry");
const reaisInput = document.querySelector("#reais");

function cambioBerry() {
  const brl = 0.05846666666;
  const calculo = +berryInput.value * brl;

  return (reaisInput.value = `R$ ${calculo.toFixed(2)}`);
}

botaoConverter.addEventListener("click", cambioBerry);
