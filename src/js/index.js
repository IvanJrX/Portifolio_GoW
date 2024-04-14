document.addEventListener('DOMContentLoaded', function() {
    const updateCarousel = () => {
        // Seleciona os containers dos carrosséis
        const containerPadrao = document.querySelector('.container_carrossel');
        const containerResponsivo = document.querySelector('.container_responsivo');

        // Determina qual conjunto de elementos usar com base na visibilidade
        let botoes, imagens;
        if (window.getComputedStyle(containerPadrao).display !== 'none') {
            botoes = document.querySelectorAll('.botoes_carrossel .botao');
            imagens = document.querySelectorAll('.container_carrossel .imagem');
        } else {
            botoes = document.querySelectorAll('.botoes_responsivo .botao');
            imagens = document.querySelectorAll('.container_responsivo .container_imagem');
        }

        // Atualiza os manipuladores de evento para o conjunto correto de botões
        botoes.forEach((botao, indice) => {
            botao.addEventListener('click', () => {
                const imagemAtual = document.querySelector('.ativa');
                const botaoAtual = document.querySelector('.selecionado');

                if (imagemAtual) imagemAtual.classList.remove('ativa');
                if (botaoAtual) botaoAtual.classList.remove('selecionado');

                imagens[indice].classList.add('ativa');
                botoes[indice].classList.add('selecionado');
            });
        });
    };

    // Atualiza o carrossel na inicialização e em cada redimensionamento
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
});