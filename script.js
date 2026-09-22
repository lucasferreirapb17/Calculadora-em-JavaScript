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
const botaoPorcentagem = document.querySelector("#porcentagem");

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
    }    if(operador === "÷") {
    
        if(segundoNumero === 0) {
            resultado = "Erro";
        }else {
            resultado = primeiroNumero / segundoNumero;
        }
    }

    display.value = resultado;

}

botaoIgual.addEventListener("click", calcular);

function limparCalculadora() {
    numeroAtual = "";
    numeroAnterior = "";
    operador = "";
    display.value = "0"
}

botaoLimpar.addEventListener("click", limparCalculadora);


function apagarUltimoNumero() {
    numeroAtual = numeroAtual.slice(0, -1);

    display.value = numeroAtual === "" ? "0" : numeroAtual
}
botaoApagar.addEventListener("click", apagarUltimoNumero);

function adicionaPonto() {
    if (!numeroAtual.includes(".")) {
        numeroAtual += "0.";
        display.value = numeroAtual;
    }
    
}
botaoPonto.addEventListener("click", adicionaPonto);

function calcularPorcentagem() {
    numeroAtual = numeroAtual / 100;

    display.value = numeroAtual;
}
botaoPorcentagem.addEventListener("click", calcularPorcentagem);



