
let elemento1 = 10;
let elemento2 = 3;

console.log("EXERCICIO 1")
//exercicio 1

function realizarAdicao (adi1, adi2) {
let resultado = adi1 + adi2;
console.log("resultado da soma: " + resultado);
}

function realizarSubstracao (sub1, sub2) {
let resultado = sub1 - sub2;
console.log("resultado da substração: " + resultado);
}

function realizarMultiplic (mult1, mult2) {
let resultado = mult1 * mult2;
console.log("resultado da multiplicação: " + resultado);
}

function realizarDivide (div1, div2) {
let resultado = div1 / div2;
console.log("resultado da divisão: " + resultado);
//tem problema usar o mesmo nome da variavel em todas as funcoes?
}

function realizarModulo (md1, md2) {
let resultado = md1 % md2;
console.log("resultado do módulo: " + resultado);
}

realizarAdicao(elemento1, elemento2);
realizarSubstracao(elemento1, elemento2);
realizarMultiplic(elemento1, elemento2);
realizarModulo(elemento1, elemento2);

console.log("EXERCICIO 2")

//exercicio 2
let valor1 = 6;
let valor2 = 7;

if (valor1 > valor2){
    console.log("O elemento 1 é maior que o elemento 2.")
}
else if (valor1 < valor2){
    console.log("O elemento 1 é menor que o elemento 2.")
}
else {
    console.log("Os elementos são iguais.")
}

console.log("EXERCICIO 3")

//exercicio 3
let valor3 = 8;

if (valor1 > valor2 && valor1 > valor3){
    console.log("O elemento 1 é o maior.")
}
else if (valor2 > valor1 && valor2 > valor3){
    console.log("O elemento 2 é o maior.")
}
else {
    console.log("O elemento 3 é o maior.")
}

console.log("EXERCICIO 4")

//exercicio 4
let ag1 = 80;
let ag2 = 50;
let ag3 = 51;

let somaAngulos = ag1 + ag2 + ag3;
let resultado = true;

if (somaAngulos > 180){
    console.log(resultado = false + " = Um dos ângulos ultrapassou o limite.")
}
else {
    console.log(resultado = true)
}
