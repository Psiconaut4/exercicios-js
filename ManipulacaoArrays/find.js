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

const encontrada = pessoas.find(pessoa => pessoa.nome === "Nathan");
console.log(encontrada);