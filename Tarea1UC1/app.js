// Configuración básica para las animaciones (basado en el código de clase)
const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    reset: false
});

// Animaciones asignadas a las clases del HTML
sr.reveal('.reveal-hero', { origin: 'top' });
sr.reveal('.reveal-card', { origin: 'bottom', interval: 250 });
sr.reveal('.reveal-title', { origin: 'top' });