var input = document.getElementById("nome");
var btn = document.getElementById("btn");
var res = document.getElementById("resposta");

btn.addEventListener("click", function() {
	var name = input.value;
	res.innerHTML = `Olá ${name}, Seja bem-vindo(a) ao nosso site!`;
});