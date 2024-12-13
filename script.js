const botaoRevelar = document.getElementById('botaoRevelar');
const elementoCarta = document.getElementById('elementoCarta');
const coracoesContainer = document.getElementById('coracoesContainer');

botaoRevelar.addEventListener('click', () => {
    elementoCarta.innerHTML = `
        <h2>Eu Te Amo!</h2>
        <img src="imagens/amor1.jpg" alt="Coração" class="foto-media">
        <img src="imagens/amor2.jpg" alt="Foto 1" class="foto-media">
        <img src="imagens/amor3.jpg" alt="Foto 2" class="foto-media">
        <audio controls autoplay>
            <source src="audios/amor.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
    `;
    botaoRevelar.style.display = 'none';
    criarCoracoes();
});

function criarCoracoes() {
    for (let i = 0; i < 20; i++) {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.style.left = `${Math.random() * 100}%`;
        coracao.style.top = `${Math.random() * 100}%`;
        coracoesContainer.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 50000);
    }
}




