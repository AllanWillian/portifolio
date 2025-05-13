// Seleciona todos os links que começam com "#" (âncoras internas da página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // Adiciona um evento de clique a cada link
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão (pular direto para a seção)

    // Obtém o elemento de destino da âncora
    const target = document.querySelector(this.getAttribute('href'));

    // Se o destino existir, faz a rolagem suave até ele
    if (target) {
      window.scrollTo({
        top: target.offsetTop,  // Posição vertical do destino
        behavior: 'smooth'      // Efeito de rolagem suave
      });
    }
  });
});


// Espera o carregamento completo do conteúdo da página
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o formulário de contato pelo ID
  const form = document.getElementById("form-contato");

  // Verifica se o formulário existe
  if (form) {
    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio real do formulário

      // Mostra um alerta simulando o envio da mensagem
      alert("Mensagem enviada com sucesso! (simulação)");

      // Limpa os campos do formulário após o envio
      form.reset();
    });
  }
});
