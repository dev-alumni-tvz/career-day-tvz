window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.right-box .overlay');
    if (!overlay) return;

    setInterval(() => {
        overlay.classList.add('active');

        setTimeout(() => {
            overlay.classList.remove('active');
        }, 2000);
    }, 5000);
});