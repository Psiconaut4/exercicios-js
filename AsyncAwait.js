// Função que retorna uma Promise e simula carregamento com setTimeout
function simularCarregamento() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Carregamento concluído");
      }, 3000); // 3 segundos
    });
  }
  
  // Função assíncrona que usa await
  async function executarCarregamento() {
    console.log("Iniciando carregamento...");
    
    const resultado = await simularCarregamento(); // Espera 3 segundos
    console.log(resultado);
  }
  
  // Chamando a função
  executarCarregamento();
  