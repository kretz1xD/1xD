// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.toggle('light-mode', savedTheme === 'light');
document.getElementById('mode-toggle').checked = savedTheme === 'light';

// Toggle theme on switch click
document.getElementById('mode-toggle').addEventListener('change', (e) => {
    const isLight = e.target.checked;
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
