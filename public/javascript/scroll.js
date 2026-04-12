const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    },
    { threshold: 0.05 },
);

document.querySelectorAll('.reveal, .reveal-stagger, .stat-box, .partner-item, .animated-underline').forEach((el) => {
    observer.observe(el);
});
