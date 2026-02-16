// Open modal on click
document.querySelectorAll('.session').forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when X is clicked
document.querySelectorAll('.modal-overlay .close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-overlay').style.display = 'none';
    });
});

// Close modal on background click
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.style.display = 'none';
    }
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

function calculateMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
}

function positionSessions() {
    const scheduleStart = calculateMinutes("12:00");
    const scheduleEnd = calculateMinutes("17:00");
    const totalMinutes = scheduleEnd - scheduleStart;
    const container = document.querySelector('.events-column');
    const containerHeight = container.offsetHeight;

    const pixelsPerMinute = containerHeight / totalMinutes;

    document.querySelectorAll('.session').forEach(session => {
        const start = calculateMinutes(session.dataset.start);
        const end = calculateMinutes(session.dataset.end);
        const duration = end - start;
        const topOffset = (start - scheduleStart) * pixelsPerMinute;
        const height = duration * pixelsPerMinute;

        session.style.top = `${topOffset}px`;
        session.style.height = `${height}px`;
    });
}

window.addEventListener('DOMContentLoaded', positionSessions);
window.addEventListener('resize', positionSessions);
