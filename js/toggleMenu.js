  function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('open');
  }

  // Cierra el menú al hacer clic en cualquier enlace o botón del menú
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu a, .nav-menu button');
    links.forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('open');
      });
    });
  });
