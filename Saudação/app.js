var input = document.getElementById("nome");
var btn = document.getElementById("btn");
var res = document.getElementById("resposta");

btn.addEventListener("click", function() {
	var name = input.value;
    if (name === "Nathan"){
        res.innerHTML = `Seja bem vindo de volta mestre ${name}!`;
    }
    else {
        res.innerHTML = `Olá ${name}, Seja bem-vindo(a) ao nosso site!`;
    }
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        btn.click(); // Simula o clique no botão
    }
});