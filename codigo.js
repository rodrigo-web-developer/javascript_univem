
// assincrono: ocorre fora de intervalo
// print("a", "b", "c")
function somar() {
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let valor1 = Number(n1["value"]);
    let valor2 = Number(n2.value);

    let soma = valor1 + valor2;

    alert("O valor da soma eh: " + soma);
}
// hoisting -> içar

function comparar() {
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);

    if (valor1 > valor2) {
        alert("O maior valor e: " + valor1);
    }
    else if (valor2 > valor1) {
        alert("O maior valor e: " + valor2);
    }
    else {
        alert("Os valores são iguais");
    }

    alert("O valor da soma eh: " + soma);
}

var numero = 1.25;
var texto = "RODRIGO";
var booleano = false;
var lista = ["Item 1", 20, "Item 3"];
var objeto = {
    "nome": "Rodrigo",
    idade: 22,
    outraInformacao: 10
};

//for item in lista:


for (var index = 0; index < lista.length; index++) {
    console.log(index, ":", array[index]);
}

var index = 0;
while (index < lista.length) {
    console.log(index, ":", array[index]);

    index++;
}

// HTTP : HyperText Transfer Protocol - protocolo de transferência de hypertexto

// JSON - JavaScript Object Notation - notação de objeto javascript