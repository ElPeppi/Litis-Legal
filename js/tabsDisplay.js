function showViews(className) {
    const vistas = document.querySelectorAll('.view');
    
    vistas.forEach(v => v.style.display = 'none');

    const vistaActiva = document.querySelectorAll(className);
    vistaActiva.forEach(v => v.style.display = 'block');
}
