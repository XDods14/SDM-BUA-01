var idade = 21; // mutavel - pode ser alterada - global
let nome = "Dominic"; // mutavel - pode ser alterada - local
let ativo = true; 
const PI = 3.14; // imutavel - não pode ser alterada

console.log(idade); // não é obrigatório tipar a variavel string, number, boolean
console.log(nome);
console.log(ativo);
console.log(PI);

//Conversão String para Número
let num = Number("10"); // 10 é uma string
let float = parseFloat("10.5"); // 10.5 é uma string
let int = parseInt("10.1"); // 10.1 é uma string

//Conversão Número para String
let str = String (10); // 10 é um número
let str2 = 10 + ""; // 10 é um número
let outraSrt = (88).toString(); // 88 é um número

console.log(num, float, int);

if(true){
    let cidade = "São Paulo";
    console.log(cidade);
}
// console.log(cidade); // Erro por estar fora do escopo

if(true){
    console.log(idade);
    console.log(nome);
    console.log(ativo);
    // PI = 3.1415; // Erro por ser constante
    console.log(PI); 
}