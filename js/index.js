document.addEventListener('DOMContentLoaded', function() {
    const updateCarousel = () => {
        const containerPadrao = document.querySelector('.container_carrossel');
        const containerResponsivo = document.querySelector('.container_responsivo');

        let botoes, imagens;
        if (window.getComputedStyle(containerPadrao).display !== 'none') {
            botoes = document.querySelectorAll('.botoes_carrossel .botao');
            imagens = document.querySelectorAll('.container_carrossel .imagem');
        } else {
            botoes = document.querySelectorAll('.botoes_carrossel .botao');
            imagens = document.querySelectorAll('.container_responsivo .container_imagem');
        }

        botoes.forEach((botao, indice) => {
            botao.addEventListener('click', () => {
                const imagemAtual = document.querySelector('.ativa');
                const botaoAtual = document.querySelector('.selecionado');

                if (imagemAtual) imagemAtual.classList.remove('ativa');
                if (botaoAtual) botaoAtual.classList.remove('selecionado');

                if (indice < imagens.length) { // Garante que não haja erro de índice
                    imagens[indice].classList.add('ativa');
                    botoes[indice].classList.add('selecionado');
                }
            });
        });

        // Garante que uma imagem seja ativa por padrão
        if (!document.querySelector('.ativa')) {
            if (imagens.length > 0 && botoes.length > 0) {
                imagens[0].classList.add('ativa');
                botoes[0].classList.add('selecionado');
            }
        }
    };

    updateCarousel();
    window.addEventListener('resize', updateCarousel);
});