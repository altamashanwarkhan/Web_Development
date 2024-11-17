document.addEventListener("DOMContentLoaded", () => {
    // Handle dropdown toggle
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        });
    });

    // Handle theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
