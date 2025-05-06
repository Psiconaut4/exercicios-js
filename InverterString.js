const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
    return str.split('').reverse().join('').toLowerCase();
}

const askQuestion = () => {
    rl.question("Digite uma palavra ou frase para inverter (ou digite 'sair' para encerrar): ", (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Encerrando o programa...");
            rl.close();
            return;
        }

        const resultado = inverterString(input);
        console.log("A string invertida é: " + resultado);

        askQuestion();
    });
}

askQuestion();