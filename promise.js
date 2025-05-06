const minhaPromise = new Promise(
    (resolve, reject) => {
        const sucesso = true;

        if (sucesso) {
            resolve('Deu certo!');
        } else {
            reject('Deu errado!');
        }
    }
);

minhaPromise
    .then(resultado => {
        console.log("Sucesso: ", resultado);
    })
    .catch(erro => {
        console.log("Erro: ", erro);
    });