function ola(nome){ // Criando função com parametro "nome"
    return `Olá, ${nome}` // Retorna "Olá, (valor/argumento)"
}

console.log(ola("Dominic")); // Imprimindo função "ola" e atribuindo argumento/valor de retorno

const soma = function (a,b){ // Criando função de soma, com duas variáveis
    return a + b;
}

console.log(soma(5,6)); // Imprimindo função "soma" e atribuindo valor às variáveis

const mult = (x,y) => x * y; // Criando função de multiplicação pelo arrow function (=>)

console.log(mult(5,2)); // Imprimindo função "mult" e atribuindo valor às variáveis

