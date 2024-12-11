// Adiciona um evento de clique no link de "Planos"
document.getElementById("scroll-planos").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Rola até a seção com id "planos"
    document.getElementById("Planos").scrollIntoView({
      behavior: "smooth", // Faz a rolagem de maneira suave
      block: "start"      // Alinha a seção ao topo da janela de visualização
    });
  });

  document.getElementById("scroll-planos1").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Rola até a seção com id "planos"
    document.getElementById("Planos").scrollIntoView({
      behavior: "smooth", // Faz a rolagem de maneira suave
      block: "start"      // Alinha a seção ao topo da janela de visualização
    });
  });

  // Seleciona o botão pelo id
document.getElementById("myButton").addEventListener("click", function() {
    // Abre o link desejado em uma nova aba ou janela
    window.open("https://pay.kirvano.com/1721d6a3-0d8f-4226-8dee-9889e6a7e11c?aff=a8a62fec-b3e8-47f4-95b5-c0421b687eb3 ", "_blank");
  });

    // Seleciona o botão pelo id
document.getElementById("myButton1").addEventListener("click", function() {
    // Abre o link desejado em uma nova aba ou janela
    window.open("https://pay.kirvano.com/110fe63a-5a0a-4044-95ec-cf995b328d01?aff=a8a62fec-b3e8-47f4-95b5-c0421b687eb3 ", "_blank");
  });

    // Seleciona o botão pelo id
document.getElementById("myButton2").addEventListener("click", function() {
    // Abre o link desejado em uma nova aba ou janela
    window.open("https://pay.kirvano.com/2664d44d-5eeb-42ab-b2b8-2899fa51f3cd?aff=a8a62fec-b3e8-47f4-95b5-c0421b687eb3 ", "_blank");
  });

    // Seleciona o botão pelo id
document.getElementById("myButton3").addEventListener("click", function() {
    // Abre o link desejado em uma nova aba ou janela
    window.open("https://pay.kirvano.com/2ec265d2-9195-4e02-9160-7b2736f66d32?aff=a8a62fec-b3e8-47f4-95b5-c0421b687eb3 ", "_blank");
  });

  // Evento de clique no link "Contato"
document.getElementById('contato-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.location.href = 'contato.html'; // Redireciona para a página contato.html
  });