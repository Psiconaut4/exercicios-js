// Desestruturação de objetos e arrays em JavaScript
const usuario = {
    id: 123,
    nome: "Lucas",
    idade: 29,
    email: "lucas@email.com",
    endereco: {
      rua: "Rua das Flores",
      numero: 100,
      cidade: "Curitiba"
    },
    interesses: ["tecnologia", "música", "viagens"]
  };
  
// Desestruturação de várias propriedades
const { nome, email, idade, ...resto } = usuario;

console.log("Nome: " + nome);  // "Lucas"
console.log(email); // "lucas@email.com"
console.log(idade); // 29

// Desestruturação de propriedades aninhadas

const { endereco: { rua, cidade } } = usuario;

console.log(rua); //Rua das FLores
console.log(cidade); //Curitiba


console.log(resto);

const {
    nome: primeiroNome,
    idade: anosDeVida
  } = usuario;
  
console.log(primeiroNome); // "Lucas"
console.log(anosDeVida);   // 29
  

  //spread operator
const a = [1, 2];
const b = [3, 4];
const combinados = [...a, ...b]; // [1, 2, 3, 4]

const usuario2 = { nome: "Ana", idade: 30 };
const clone = { ...usuario2 }; // { nome: "Ana", idade: 30 }
console.log(clone); // { nome: "Ana", idade: 30 }