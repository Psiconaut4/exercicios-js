const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = () => {
    rl.question("Digite um texto para contar a quantidade de vogais (ou digite 'sair' para encerrar o programa): ", (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Encerrando o programa...");
            rl.close();
            return;
        }

        const resultado = contarvogais(input);
        console.log("A quantidade de vogais é: " + resultado);
        askQuestion();
    });
}

function contarvogais(txt) {
    const vogais = 'aeiouáéíóúãõâêîôû';
    let contador = 0;
    for (let i = 0; i < txt.length; i++) {
        if (vogais.includes(txt[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

askQuestion();