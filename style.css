// Check for theme preference in local storage, if set
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Toggle theme function
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Store the user's theme preference in local storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
}

// Attach the toggle function to the button
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);
