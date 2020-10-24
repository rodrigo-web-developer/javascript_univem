function soma(valor1, valor2) { // função com 2 parametros
    var resultado = Number(valor1) + Number(valor2);
    return resultado;
}
var variavel = 10;
switch (variavel) {
    case 1:
        let case1 = 10;
        soma(case1, case1);
        console.log("O valor é igual a 1");
        break;
    case 10:
        console.log("O valor é igual a 10");
        break;
    default:
        console.log("O valor não é nenhuma das opcoes");
        break;
}
// if variavel == 1:
//    # faz alguma coisa
// elif variavel == 10:
//    # faz outra coisa
// else:
//    # faz alguma outra coisa


// assincrono: ocorre fora de intervalo
// print("a", "b", "c")
function operacao(op) {
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");
    let r = op(Number(n1.value), Number(n2.value));

    alert("O valor da resultado eh: " + r);
}

function somar(e) {
    e.preventDefault();
    operacao((n1, n2) => n1 + n2);
}

function subtrair(e) {
    e.preventDefault();
    operacao((n1, n2) => n1 - n2);
}

function dividir(e) {
    e.preventDefault();
    operacao((n1, n2) => n1 / n2);
}

function multiplicar(e) {
    e.preventDefault();
    operacao((n1, n2) => n1 * n2);
}

function comparar() {
    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);

    if (valor1 > valor2)
        alert("O maior valor e: " + valor1);

    else if (valor2 > valor1)
        alert("O maior valor e: " + valor2);

    else
        alert("Os valores são iguais");


    alert("O valor da soma eh: " + soma);
}

var numero = 1.25;
var texto = "RODRIGO";
var booleano = false;
var lista = ["Item 1", 20, "Item 3"];
var objeto = {
    "nome": "Rodrigo",
    idade: 22,
    outraInformacao: 10,
    printNome: function () {
        console.log(this.nome);
    },
    outroObjeto: {
        outroCampo: 2,
        outroObjetoInterno: {
            outroCampo: 2
        }
    }
};

objeto.printNome();

//for item in lista:


for (var index = 0; index < lista.length; index++) {
    console.log(index, ":", lista[index]);
}

var index = 0;
while (index < lista.length) {
    console.log(index, ":", lista[index]);
    index++;
}

/** DIFERENÇA DE VAR E LET */

function testarVar() { // parameterless function
    let n1 = document.getElementById("numero1");
    var numero = Number(n1.value);

    if (numero > 10) {
        var resposta = "Maior que dez";
    }
    console.log("Variavel resposta: ", resposta); // print("Variavel resposta: ", resposta)
}

function testarLet() {
    let n1 = document.getElementById("numero1");
    var numero = Number(n1.value);

    if (numero > 10) {
        let resposta2 = "Maior que dez";
        console.log("dentro do if: ", resposta2)
    }

    console.log("Variavel resposta2: ", resposta2); // vai lançar exceção
}

//ALTERO O FORMULARIO ADICIONANDO UM CAMPO A MAIS
function adicionar() {
    var forms = document.getElementsByTagName("form");
    var form = forms[0];
    var input = "<input><br>";

    var inputs = document.getElementsByTagName("input"); // recebe todos os inputs

    for (let inp of inputs) { // for inp in inputs:
        inp.value = ""; // limpa todos os campos
    }

    objeto.printNome();
    form.innerHTML += input;
}

// console.log("1") -> setTimeout() -> console.log("3")
//                     console.log("2")
//
function testar() {
    console.log("1");
    let x = 0;
    // executa função de forma assíncrona
    setTimeout(function () {
        x++;
        console.log("2");
    }, 0);
    console.log("3");
}
// criando como class
// class Pessoa {
//     constructor() {
//         this.cpf = "";
//         this.nome = "";

//         //arrow function
//         const Outra = () => { // não usa a palavra function
//             // function Outra() {
//             this.printCpf();
//         };

//         Outra();
//     }
//     printCpf() {
//         console.log("CPF: ", this.cpf); // this: objeto do contexto
//     };
// }

// criando como function
function Pessoa() {
    this.cpf = "";
    this.nome = "";
    //arrow function
    const Outra = () => this.printCpf()

    // não usa a palavra function
    // function Outra() { }
    Outra();
}

Pessoa.prototype.printCpf = function () {
    console.log("CPF: ", this.cpf); // this: objeto do contexto
};

Pessoa.prototype.printNome = function () {
    console.log("Nome: ", this.cpf);
};

// metodo != função
function printPorLinha() {
    for (let parametro of arguments) {
        console.log(parametro);
    }
}

function isPrimo(num) {
    if (num % 2 == 0) {
        return num == 2;
    }
    if (num <= 1) {
        return false;
    }
    let raiz = Math.sqrt(num);
    for (let divisor = 3; divisor <= raiz; divisor += 2) {
        if (num % divisor == 0) {
            return false;
        }
    }
    return true;
}

function verificaPrimo() {
    let numero = document.getElementById("numero_primo").value;
    numero = parseInt(numero);

    if (isPrimo(numero)) {
        alert("O numero " + numero + " eh primo!!");
    } else {
        alert("O numero " + numero + " nao eh primo!!");
    }
}

window.somar = somar;
window.subtrair = subtrair;
window.dividir = dividir;
window.multiplicar = multiplicar;
window.operacao = operacao;
window.testar = testar;
window.testarLet = testarLet;
window.testarVar = testarVar;
window.isPrimo = isPrimo;
window.comparar = comparar;
window.verificaPrimo = verificaPrimo;
window.printPorLinha = printPorLinha;
window.adicionar = adicionar;
window.soma = soma;

// HTTP : HyperText Transfer Protocol - protocolo de transferência de hypertexto

// JSON - JavaScript Object Notation - notação de objeto javascript

// hoisting -> içar

// HTML - HyperText Markup Language 

// Prototype no lugar de classes

// ActionScript -> ECMAScript
