const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askQuestion = () => {
  rl.question("Digite um número para somar todos os números naturais até ele (ou digite 'sair' para encerrar): ", (input) => {
    if (input.toLowerCase() === 'sair') {
      console.log("Encerrando o programa...");
      rl.close();
      return;
    }

    const num = parseInt(input, 10);
    if (isNaN(num)) {
      console.log("Por favor, digite um número válido.");
    } else {
      let soma = 0;
      for (let i = 0; i <=num; i++) {
        soma += i;
      }
      console.log("A soma dos números naturais até " + num + " é: " + soma);
    }

    askQuestion();
  });
};

askQuestion();