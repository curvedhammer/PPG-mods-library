document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const searchInput = document.getElementById('searchInput');
    const githubIcon = document.getElementById('githubIcon');

    // dark mode logic
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const darkModeEnabled = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled);
    });

    // search logic
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const modCards = document.querySelectorAll('.mod-card');

            modCards.forEach(card => {
                const modTitle = card.querySelector('.mod-info h3').textContent.toLowerCase();
                if (modTitle.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // GitHub
    if (githubIcon) {
        githubIcon.addEventListener('click', () => {
            window.location.href = 'https://github.com/curvedhammer/PPG-mods-library';
        });
    }
});