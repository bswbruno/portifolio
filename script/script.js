// --- EFEITO DE DIGITAÇÃO CONTÍNUO ---
document.addEventListener("DOMContentLoaded", function () {
  const texto = "Front-End";
  const elemento = document.getElementById("typing");
  let i = 0;
  let apagando = false;

  function digitar() {
    if (!apagando && i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 150);
    } else if (apagando && i > 0) {
      elemento.textContent = texto.substring(0, i - 1);
      i--;
      setTimeout(digitar, 100);
    } else {
      apagando = !apagando;
      setTimeout(digitar, 800);
    }
  }

  digitar();
});

// --- MODAL DE CONTATO ---
const modal = document.getElementById("contato-modal");
const btnAbrirModal = document.getElementById("btn-abrir-modal");
const btnFecharModal = document.getElementById("btn-fechar-modal");

// Abre o modal
btnAbrirModal.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // impede o scroll
});

// Fecha o modal ao clicar no "x"
btnFecharModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

// --- MENU MOBILE ---
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Abre e fecha o menu ao clicar no ícone
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

