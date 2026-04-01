// Soma
let num1 = 15;
let num2 = 27;
let soma = num1 + num2;
console.log(`A soma de ${num1} + ${num2} é: ${soma}`);

// Subtração
let subtracao = 50 - 25;
console.log(`O resultado da subtração de 50 por 25 é: ${subtracao}`);

// Multiplicação
let multiplicacao = 8 * 12;
console.log(`O produto de 8 * 12 é: ${multiplicacao}`);

// Divisão
let divisao = 100 / 4;
console.log(`A divisão de 100 por 4 é: ${divisao}`);


// Igualdade
console.log(`10 é igual a 10? ${10 == 10}`);

// Diferença
let nome1 = "João";
let nome2 = "Maria";
console.log(`Os nomes "${nome1}" e "${nome2}" são diferentes? ${nome1 != nome2}`);

// Menor que
console.log(`5 é menor que 10? ${5 < 10}`);

// Maior que
let preco = 65;
console.log(`O preço (${preco}) é maior que 50? ${preco > 50}`);

// Menor ou Igual
let valor = 18;
console.log(`O valor ${valor} é menor ou igual a 20? ${valor <= 20}`);

// Maior ou Igual
let idade = 22;
console.log(`A idade ${idade} é maior ou igual a 18? ${idade >= 18}`);

// Atribuição Condicional (Nota)
let nota = 8;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`Com nota ${nota}, o aluno está: ${resultado}`);

// Verificação de Maioridade
let status = idade >= 18 ? "adulto" : "menor";
console.log(`Com ${idade} anos, a pessoa é: ${status}`);

// Placeholder simples
let nome = "Ana";
console.log(`Olá, ${nome}!`);

// Legibilidade com múltiplas variáveis
let produto = "Notebook";
let preço = 2599.90;
let quantidade = 2;
console.log(`Você comprou ${quantidade} unidade(s) de ${produto} por R$ ${preço} cada, totalizando R$ ${(preço * quantidade).toFixed(2)}.`);

// Unindo Ternário + Template Literals
let nomePessoa = "Lucas";
let idadePessoa = 16;

let classificacao = idadePessoa >= 18 ? "adulto" : "menor de idade";

let mensagem = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos e é considerado ${classificacao}.`;

console.log(mensagem);