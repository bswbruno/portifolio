function menuDrop(button){

    let menuMob = document.querySelector('.mobile-menu')
    if (menuMob.classList.contains('open')){
        menuMob.classList.remove('open')
        button.querySelector('img').src = "image/barra-de-menu.png"
    } else {
        menuMob.classList.add('open')
        button.querySelector('img').src = "image/excluir.png"
    }

}

// Função para abrir o modal
function abrirModal() {
    document.getElementById("contato-modal").style.display = "flex";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("contato-modal").style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("contato-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




