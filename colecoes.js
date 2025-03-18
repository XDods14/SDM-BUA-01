let numeros = [10, 20, 30, 40, 50]; // array de números
let nomes = ["João", "Maria", "José", "Ana", "Carlos"]; // array de strings
console.log(numeros[2]) // nome da variável e índice
console.log(nomes[0]) // nome da variável e índice
console.log(nomes.length) // quantidade de elementos

let frutas = ["Banana", "Maçã", "Laranja"];

// Adicionando elementos

frutas.push("Uva"); // Adiciona no final
frutas.unshift("Morango"); // Adiciona no início
console.log(frutas);

// Interando sobre os elementos do Array
frutas.forEach((fruta, index)=>{ 
    console.log(`${index}: ${fruta}`); // Imprime o índice e o valor
    
    })

// Removendo elementos
frutas.pop(); // Remove o último elemento
frutas.shift(); // Remove o primeiro elemento

console.log(frutas);

// Procurando elementos
let posicao = frutas.indexOf("Banana"); // Retorna a posição do elemento
console.log(posicao);

// Removendo elementos pela posição
frutas.splice(posicao, 1); // Remove a partir da posição

console.log(frutas);

let map = new Map(); // Criando um Mapa
map.set("Nome", "Dominic"); // Adicionando um elemento chave + valor
map.set("Idade", 21); // Adicionando um elemento valor + chave
map.set(1, true, "Sacanagem"); // Adicionando um elemento chave + valor
map.set("Altura", 1.87)

// Acessando Valores

console.log(map.get("Nome")); // Acessando um valor
console.log(map.has("Idade")); // Acessando um valor
console.log(map.get("Altura")); // Acessando um valor

console.log(map.size); // Quantidade de elementos

map.forEach((valor, chave)=>{ // Iterando sobre os elementos
    console.log(`${chave}: ${valor}`); // Imprime a chave e o valor
})

map.delete("Idade"); // Removendo um elemento

map.forEach((valor, chave)=>{ // Iterando sobre os elementos
    console.log(`${chave}: ${valor}`); // Imprime a chave e o valor
})

map.clear(); // Removendo todos os elementos
console.log(map.size);