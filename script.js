// Check if a theme is saved in localStorage and apply it
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Function to toggle the dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Save the user's theme preference in local storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
}

// Add an event listener to the toggle button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);
