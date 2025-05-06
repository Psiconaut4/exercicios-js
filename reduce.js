const valores = [10, 20, 30];
// //.reduce() é um método de array que executa uma função reducer (fornecida como argumento) uma vez para cada elemento presente no array, resultando em um único valor de retorno.

const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(valores);
console.log(soma);