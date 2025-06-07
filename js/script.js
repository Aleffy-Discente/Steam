// Animação de entrada
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        header.style.transition = '0.5s';
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    }, 200);
});

