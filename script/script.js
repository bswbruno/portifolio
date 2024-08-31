// Função para alternar o menu mobile
function menuDrop(button) {
    let menuMob = document.querySelector('.mobile-menu');

    if (menuMob.classList.contains('open')) {
        menuMob.classList.remove('open');
        button.querySelector('img').src = "image/barra-de-menu.png";
    } else {
        menuMob.classList.add('open');
        button.querySelector('img').src = "image/excluir.png";
    }
}

// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById("contato-modal");
    if (modal) {
        modal.style.display = "flex";
    }
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById("contato-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Fechar o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    const modal = document.getElementById("contato-modal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});

// Função para virar os cards
function virar() {
    const cards = document.getElementById('cards');
    if (cards) {
        cards.classList.add('virar');
    }
}

// Função para desvirar os cards
function desvirar() {
    const cards = document.getElementById('cards');
    if (cards) {
        cards.classList.remove('virar');
    }
}
