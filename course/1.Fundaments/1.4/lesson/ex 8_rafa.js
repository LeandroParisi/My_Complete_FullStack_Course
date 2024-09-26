
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

console.log("EXERCICIO 5")

//exercicio 5
let pecaXadrez = "CAVALO";
pecaXadrez = pecaXadrez.toLowerCase();

switch (pecaXadrez){
    case "cavalo":
    console.log("movimenta em L")
    break;
    case "bispo":
    console.log("movimenta livre na diagonal")
    break;
    case "rei":
    console.log("movimenta livre em qualquer direção apenas 1 casa por vez")
    break;
    case "rainha":
    console.log("movimenta livre pelo tabuleiro")
    break;
    case "torre":
    console.log("movimenta livre apenas na horizontal ou na vertical")
    break;
    case "peão":
    console.log("movimenta apenas 1 uma casa para frente por vez")
    break;  
    default:
    console.log("Peça não existe")
    break; 
}

console.log("EXERCICIO 7")

//exercicio 7

let salarioBruto = 3000;
let salario_INSS = 0;
let salarioBase = 0;
let salarioLiquido = 0;

if (salarioBruto < 1556.94){
    salario_INSS = salarioBruto - (salarioBruto*0.08);
    salarioLiquido = salario_INSS
    console.log("O salário líquido é de: " + salarioLiquido)
}

else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
    salarioBase = salarioBruto - (salarioBruto*0.09);

    if (salarioBase < 1903.99){
        salarioLiquido = salarioBase;
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 1903.99 && salarioBase < 2826.65){
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 2826.66 && salarioBase < 3751.05){
        salarioLiquido = salarioBase - ((salarioBase*0.15) - 354.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 3751.06 && salarioBase < 4664.68){
        salarioLiquido = salarioBase - ((salarioBase*0.225) - 636.13);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else {
        salarioLiquido = salarioBase - ((salarioBase*0.275) - 869.36);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
}

else if (salarioBruto > 2594.93 && salarioBruto < 5189.82){
    salarioBase = salarioBruto - (salarioBruto*0.11);

    if (salarioBase < 1903.99){
        salarioLiquido = salarioBase;
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 1903.99 && salarioBase < 2826.65){
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 2826.66 && salarioBase < 3751.05){
        salarioLiquido = salarioBase - ((salarioBase*0.15) - 354.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 3751.06 && salarioBase < 4664.68){
        salarioLiquido = salarioBase - ((salarioBase*0.225) - 636.13);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else {
        salarioLiquido = salarioBase - ((salarioBase*0.275) - 869.36);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
}

else if (salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;

    if (salarioBase < 1903.99){
        salarioLiquido = salarioBase;
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 1903.99 && salarioBase < 2826.65){
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 2826.66 && salarioBase < 3751.05){
        salarioLiquido = salarioBase - ((salarioBase*0.15) - 354.80);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else if (salarioBase > 3751.06 && salarioBase < 4664.68){
        salarioLiquido = salarioBase - ((salarioBase*0.225) - 636.13);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
    else {
        salarioLiquido = salarioBase - ((salarioBase*0.275) - 869.36);
        console.log("O salário líquido é de: " + salarioLiquido)
    }
}