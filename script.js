const botao = document.getElementById('botao');
const inputNumero = document.getElementById('numero');
const seletorBaseAtual = document.getElementById('base-atual');
const seletorBaseFinal = document.getElementById('base-final');
const divResultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
    let numeroFinal;
    let numeroAtual = +inputNumero.value;

    let baseAtual = +seletorBaseAtual.value;
    let baseFinal = +seletorBaseFinal.value;

    let numeroConvertido = parseInt(numeroAtual, baseAtual);
    numeroFinal = numeroConvertido.toString(baseFinal);

    divResultado.innerHTML = `${numeroAtual}<sub>${baseAtual}</sub> = ${numeroFinal}<sub>${baseFinal}</sub>`;
    divResultado.classList.remove('invisivel');
});