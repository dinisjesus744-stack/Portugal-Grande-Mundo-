// Animação de Reveal no Scroll
window.addEventListener('scroll', revealElements);

function revealElements() {
    // Seleciona todos os elementos com a classe 'reveal'
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // Altura da janela
        var revealTop = reveals[i].getBoundingClientRect().top; // Topo do elemento em relação à janela
        var revealPoint = 150; // Ponto de trigger (pixels do fundo da janela)

        // Se o elemento estiver dentro do ponto de trigger, adiciona a classe 'active'
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            // (Opcional) Remove a classe para re-animar no scroll reverso
            // reveals[i].classList.remove('active');
        }
    }
}

// Ativa a animação para elementos já visíveis no load inicial
window.addEventListener('load', revealElements);