// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Function to toggle dark theme
function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
}

// Add event listener to the button
themeToggleButton.addEventListener('click', toggleDarkTheme);

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Check if the user has a saved theme preference
const savedTheme = localStorage.getItem('theme');

// If a preference is saved, apply it
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Function to toggle dark theme
function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
}

// Add event listener to the button
themeToggleButton.addEventListener('click', toggleDarkTheme);
