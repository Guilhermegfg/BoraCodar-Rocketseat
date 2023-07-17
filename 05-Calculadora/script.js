var display = document.getElementById('display');

function adicionarAoDisplay (value) {
    display.value += value;
}

function adicionarSinalAoDisplay(value) {
    display.value += ` ${value} `
}

function PositivoNegativo () {
    display.value += "-";
}

function limpar () {
    display.value = "";
}

function calcular() {

    if (display.value === "") {

        display.value = "";

    } else{
        try {
            const resultado = eval(display.value);
            display.value = resultado;
        } catch (error) {
            display.value = "erro"
        }
        
    }
   
}