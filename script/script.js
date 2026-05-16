// ────────────────────────────────────────────
// TRANSLATIONS (PT / EN)
// ────────────────────────────────────────────
const T = {
  pt:{
    nav_home:"INÍCIO", nav_about:"SOBRE", nav_proj:"PROJETOS",
    nav_skills:"HABILIDADES", nav_contact:"CONTATO",
    hero_avail:"// disponível para novas oportunidades",
    hero_dev:"Desenvolvedor",
    hero_bio:"Formado em Análise e Desenvolvimento de Sistemas, apaixonado por criar interfaces modernas e funcionais. Combino técnica com design para entregar experiências memoráveis.",
    hero_cta1:"Ver Projetos", hero_cta2:"Entrar em Contato",
    badge_proj:"PROJETOS",
    about_lbl:"// sobre mim",
    about_title_line1:"Olá, sou o", about_title_line2:"Bruno!",
    about_p1:"Sou formado em Análise e Desenvolvimento de Sistemas e trago uma combinação única de habilidades técnicas e criativas. Utilizo ferramentas como Figma e Photoshop para criar interfaces que vão além do funcional — são visualmente memoráveis.",
    about_p2:"Meu foco atual é o desenvolvimento Front-End moderno, construindo interfaces acessíveis e performáticas. Estou sempre buscando novos desafios e oportunidades de crescimento na área.",
    about_li:"Ver LinkedIn", about_gh:"Ver GitHub",
    tag_java:"Java (Estudando)",
    proj_lbl:"// meus projetos", proj_title:"Portfólio",
    proj_sub:"Projetos acadêmicos e pessoais — filtre por tecnologia",
    f_all:"Todos", f_html:"HTML / CSS", f_js:"JavaScript", f_react:"React", f_java:"Java",
    card_view:"↗ Ver Projeto",
    soon:"Em Breve",
    p_bias:"Site Estética v.2",        p_bias_d:"Site moderno para estúdio de estética com design profissional.",
    p_colab:"Plataforma Colaborativa", p_colab_d:"Plataforma web colaborativa com interface interativa e dinâmica.",
    p_cham:"Site de Chamados",         p_cham_d:"Sistema de gerenciamento de chamados e suporte técnico.",
    p_elet:"Loja de Eletrônicos",      p_elet_d:"E-commerce de eletrônicos com carrinho e listagem de produtos.",
    p_shp:"Loja Afiliado Shopee",      p_shp_d:"Loja de produtos afiliados com links diretos para a Shopee.",
    p_car:"Loja de Carros",            p_car_d:"Landing page para concessionária com catálogo de veículos.",
    p_spa:"SPA Calmaria",              p_spa_d:"Site institucional para clínica de spa e bem-estar.",
    p_and:"História do Android",       p_and_d:"Página educativa sobre a história do sistema Android.",
    p_est:"Landing Page Estética",     p_est_d:"Landing page para salão de estética e beleza.",
    p_java:"Projeto Java",             p_java_d:"Em desenvolvimento. Estou aprendendo Java e em breve trarei projetos aqui.",
    sk_lbl:"// habilidades", sk_title:"Minhas Tecnologias",
    sk_sub:"Ferramentas e linguagens que uso no dia a dia",
    lv_adv:"Avançado", lv_int:"Intermediário", lv_std:"Estudando", lv_wip:"⚡ Em estudo",
    mod_lbl:"// entre em contato", mod_title:"Vamos Conversar!",
    mod_sub:"Disponível para projetos e oportunidades",
    ft_bio:"Desenvolvedor Front-End baseado no Rio de Janeiro, apaixonado por criar interfaces modernas, funcionais e memoráveis.",
    ft_nav:"Navegação", ft_social:"Redes Sociais",
    ft_copy:"© 2025 Nobru.Dev — Todos os direitos reservados.",
    typing:["Front-End","Designer","Criativo"]
  },
  en:{
    nav_home:"HOME", nav_about:"ABOUT", nav_proj:"PROJECTS",
    nav_skills:"SKILLS", nav_contact:"CONTACT",
    hero_avail:"// available for new opportunities",
    hero_dev:"Developer",
    hero_bio:"Graduated in Systems Analysis and Development, passionate about building modern, functional interfaces. I combine technical skills with design to deliver memorable experiences.",
    hero_cta1:"View Projects", hero_cta2:"Get in Touch",
    badge_proj:"PROJECTS",
    about_lbl:"// about me",
    about_title_line1:"Hi, I'm", about_title_line2:"Bruno!",
    about_p1:"I graduated in Systems Analysis and Development and bring a unique combination of technical and creative skills. I use tools like Figma and Photoshop to create interfaces that go beyond functional — they are visually memorable.",
    about_p2:"My current focus is modern Front-End development, building accessible, high-performance interfaces. I'm always seeking new challenges and growth opportunities.",
    about_li:"View LinkedIn", about_gh:"View GitHub",
    tag_java:"Java (Studying)",
    proj_lbl:"// my projects", proj_title:"Portfolio",
    proj_sub:"Academic and personal projects — filter by technology",
    f_all:"All", f_html:"HTML / CSS", f_js:"JavaScript", f_react:"React", f_java:"Java",
    card_view:"↗ View Project",
    soon:"Coming Soon",
    p_bias:"Aesthetics Site v.2",      p_bias_d:"Modern site for an aesthetics studio with professional design.",
    p_colab:"Collaborative Platform",  p_colab_d:"Collaborative web platform with dynamic interactive interface.",
    p_cham:"Ticket System",            p_cham_d:"Ticket management and technical support system.",
    p_elet:"Electronics Store",        p_elet_d:"Electronics e-commerce with cart and product listing.",
    p_shp:"Shopee Affiliate Store",    p_shp_d:"Affiliate product store with direct links to Shopee.",
    p_car:"Car Dealership",            p_car_d:"Landing page for car dealership with vehicle catalog.",
    p_spa:"Calmaria SPA",              p_spa_d:"Institutional site for spa and wellness clinic.",
    p_and:"Android History",           p_and_d:"Educational page about the history of the Android system.",
    p_est:"Aesthetics Landing Page",   p_est_d:"Landing page for a beauty and aesthetics salon.",
    p_java:"Java Project",             p_java_d:"In development. I'm learning Java and will soon bring projects here.",
    sk_lbl:"// skills", sk_title:"My Technologies",
    sk_sub:"Tools and languages I use daily",
    lv_adv:"Advanced", lv_int:"Intermediate", lv_std:"Studying", lv_wip:"⚡ In progress",
    mod_lbl:"// get in touch", mod_title:"Let's Talk!",
    mod_sub:"Available for projects and opportunities",
    ft_bio:"Front-End Developer based in Rio de Janeiro, passionate about creating modern, functional and memorable interfaces.",
    ft_nav:"Navigation", ft_social:"Social Media",
    ft_copy:"© 2025 Nobru.Dev — All rights reserved.",
    typing:["Front-End","Designer","Creative"]
  }
};

// ────────────────────────────────────────────
// STATE
// ────────────────────────────────────────────
let lang  = localStorage.getItem('lang')  || 'pt';
let theme = localStorage.getItem('theme') || 'dark';

// ────────────────────────────────────────────
// APPLY LANGUAGE
// ────────────────────────────────────────────
function applyLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l === 'pt' ? 'pt-br' : 'en';
  const d = T[l];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (d[k] !== undefined) el.textContent = d[k];
  });

  // About title: needs HTML (line break + accent span)
  const at = document.getElementById('about-title');
  if (at) at.innerHTML = `${d.about_title_line1}<br><span class="accent">${d.about_title_line2}</span>`;

  // Lang button active state
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === l)
  );

  // Reset typing effect
  typingIdx = 0; charIdx = 0; isDeleting = false;
  clearTimeout(typingTimer);
  typeNext();
}

// ────────────────────────────────────────────
// APPLY THEME
// ────────────────────────────────────────────
function applyTheme(t) {
  theme = t;
  localStorage.setItem('theme', t);
  document.documentElement.setAttribute('data-theme', t);
  const icon = t === 'dark' ? '🌙' : '☀️';
  const a = document.getElementById('theme-icon');
  const b = document.getElementById('theme-icon-m');
  if (a) a.textContent = icon;
  if (b) b.textContent = icon;
}

// ────────────────────────────────────────────
// TYPING EFFECT
// ────────────────────────────────────────────
let typingIdx = 0, charIdx = 0, isDeleting = false, typingTimer;
const typingEl = document.getElementById('typing-word');

function typeNext() {
  const words = T[lang].typing;
  const word  = words[typingIdx];

  if (!isDeleting) {
    typingEl.textContent = word.substring(0, charIdx + 1);
    charIdx++;
    if (charIdx === word.length) {
      isDeleting = true;
      typingTimer = setTimeout(typeNext, 2200);
      return;
    }
  } else {
    typingEl.textContent = word.substring(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      isDeleting = false;
      typingIdx = (typingIdx + 1) % words.length;
    }
  }
  typingTimer = setTimeout(typeNext, isDeleting ? 75 : 135);
}

// ────────────────────────────────────────────
// MOBILE MENU
// ────────────────────────────────────────────
const burger  = document.getElementById('hamburger');
const mobMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobMenu.classList.toggle('active');
  document.body.style.overflow = mobMenu.classList.contains('active') ? 'hidden' : '';
});

mobMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  mobMenu.classList.remove('active');
  document.body.style.overflow = '';
}));

// ────────────────────────────────────────────
// CONTACT MODAL
// ────────────────────────────────────────────
const modal = document.getElementById('modal');

function openModal()  { modal.classList.add('show');    document.body.style.overflow = 'hidden'; }
function closeModal() { modal.classList.remove('show'); document.body.style.overflow = ''; }

['btn-modal', 'btn-modal-hero', 'btn-modal-m'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', openModal);
});
document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ────────────────────────────────────────────
// PROJECT FILTER
// ────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
    });
  });
});

// ────────────────────────────────────────────
// SCROLL REVEAL + SKILL BARS
// ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');

    // Animate skill bar if present
    const bar = entry.target.querySelector('.bar-fill');
    if (bar) {
      const pct = entry.target.dataset.skill || '0';
      setTimeout(() => { bar.style.width = pct + '%'; }, 250);
    }
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ────────────────────────────────────────────
// SCROLL TO TOP + ACTIVE NAV
// ────────────────────────────────────────────
const scrollTopBtn = document.getElementById('scroll-top');
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);

  let current = '';
  document.querySelectorAll('section[id]').forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// ────────────────────────────────────────────
// INIT (run after DOM is ready)
// ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  applyTheme(theme);
  document.getElementById('theme-btn').addEventListener('click', () =>
    applyTheme(theme === 'dark' ? 'light' : 'dark')
  );
  const tbm = document.getElementById('theme-btn-m');
  if (tbm) tbm.addEventListener('click', () =>
    applyTheme(theme === 'dark' ? 'light' : 'dark')
  );

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.lang))
  );

  // Apply saved lang (also starts typing)
  applyLang(lang);
});
