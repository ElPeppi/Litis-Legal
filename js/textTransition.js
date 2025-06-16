const textos = document.querySelectorAll('.texto-animado');

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('mostrar');
      } else {
        entrada.target.classList.remove('mostrar'); // Se oculta de nuevo
      }
    });
  }, {
    threshold: 0.1
  });

  textos.forEach((texto) => observador.observe(texto));