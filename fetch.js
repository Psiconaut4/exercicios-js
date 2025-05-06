fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) throw new Error("Erro na resposta da API");
    return response.json();
  })
  .then(usuarios => {
    // Transformando cada usuário com .map()
    const usuariosFormatados = usuarios.map(usuario => {
      const {
        id,
        name,
        address: { city },
        website
      } = usuario;

      return {
        id,
        nome: name,
        cidade: city,
        website
      };
    });

    console.log("Usuários formatados:", usuariosFormatados);
  })
  .catch(error => {
    console.error("Erro ao buscar ou processar usuários:", error.message);
  });
