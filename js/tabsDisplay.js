function showViews(className) {
    const vistas = document.querySelectorAll('.view');
        const header = document.querySelector('header');
    
    vistas.forEach(v => v.style.display = 'none');
    if(className === 'nosotros-view'){
        header.style.height = '70vh';
    }
    else{
        header.style.height = '100vh';
    }
    const vistaActiva = document.querySelectorAll(className);
    vistaActiva.forEach(v => v.style.display = 'block');
}
