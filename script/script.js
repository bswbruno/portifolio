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



