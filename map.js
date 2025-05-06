const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
//.map() é um método de array que aplica uma função a cada elemento do array e retorna um novo array com os resultados.
// O método .map() não altera o array original, ele cria um novo array com os resultados da função aplicada a cada elemento do array original.
const dobro = numeros.map(num => num * 2);
console.log(numeros);
console.log(dobro);