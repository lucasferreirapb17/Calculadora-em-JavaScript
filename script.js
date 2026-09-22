let numeroAtual = "";
let numeroAnterior = "";
let operador = "";


let display = document.getElementById("display");

const botoesNumero = document.querySelectorAll(".numero");
const botoesOperadores = document.querySelectorAll(".operador");

const botaoIgual = document.querySelector("#igual");
const botaoLimpar = document.querySelector("#limpar");
const botaoPonto = document.querySelector("#ponto");
const botaoApagar = document.querySelector("#apagar");

botoesNumero.forEach((botao) => {
    botao.addEventListener("click", () => {
        numeroAtual += botao.textContent

        display.value = numeroAtual;
        
    })
})

botoesOperadores.forEach((botao) => {
    botao.addEventListener("click", () => {
        numeroAnterior = numeroAtual;
        operador = botao.textContent;

        numeroAtual = "";
    })
})

function calcular() {
    const primeiroNumero = parseFloat(numeroAnterior);
    const segundoNumero = parseFloat(numeroAtual);

    let resultado;

    if(operador === "+") {
        resultado = primeiroNumero + segundoNumero;
        
    }
    if(operador === "-") {
        resultado = primeiroNumero - segundoNumero;
    }
    if(operador === "x") {
        resultado = primeiroNumero * segundoNumero;
    }
    if(operador === "÷") {
        resultado = primeiroNumero / segundoNumero;
    }

    display.value = resultado;

}

botaoIgual.addEventListener("click", calcular);



