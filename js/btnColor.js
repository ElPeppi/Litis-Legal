function changeButtonColor(button){
    const botones = document.querySelectorAll('.btn-menu');
    botones.forEach(btn => {
if (btn === button) {
            btn.style.color = '#FF6B00';
        }
        else {
            btn.style.color = '#FFFFFF';
        }
    });

}