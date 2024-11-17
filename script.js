const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});
