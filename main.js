// Header con fondo al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Menú móvil
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Cerrar menú al hacer click
nav?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);
