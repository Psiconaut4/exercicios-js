var idades = [15, 22, 17, 30, 18, 10, 2]

// //.filter() é um método de array que cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.

const maiores = idades.filter( idade => idade >= 18);

const menores = idades.filter(idade => idade < 18);
console.log(idades);
console.log(maiores);
console.log(menores);