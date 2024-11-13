// Light/Dark mode toggle functionality
document.getElementById('logo').addEventListener('click', function() {
    // Toggle the class for light/dark mode
    document.body.classList.toggle('light-mode');

    // Save the current theme in localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});
