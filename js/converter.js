const botaoConverter = document.querySelector("#converter");
const berryInput = document.querySelector("#berry");
const reaisInput = document.querySelector("#reais");

function cambioBerry() {
  const brl = 0.0584;
  const calculo = +berryInput.value * brl;

  return (reaisInput.value = `R$ ${calculo}`);
}

botaoConverter.addEventListener("click", cambioBerry);
