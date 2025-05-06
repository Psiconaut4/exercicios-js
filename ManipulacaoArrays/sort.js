const numeros = [1, 2, 3, 4, 5];

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Nathan", idade: 30 },
    { nome: "Maria", idade: 20 },
    { nome: "João", idade: 35 },
    { nome: "Pedro", idade: 28 },
    { nome: "Lucas", idade: 22 },
    { nome: "Fernanda", idade: 18 },
    { nome: "Juliana", idade: 27 },
    { nome: "Nathan", idade: 40 },
    { nome: "Tatiane", idade: 19 }
  ];

console.log(numeros.sort((a, b) => b - a));
console.log(pessoas.sort((a, b) => b.idade - a.idade));