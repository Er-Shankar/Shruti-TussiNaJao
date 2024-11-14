// Function to show the interactive section on the same page
function openInteractivePage() {
    // Hide the home section
    document.getElementById('home').style.display = 'none';
    // Show the interactive section
    document.getElementById('interactive').style.display = 'block';
}

// Function to open each card's content in a new tab
function openCardPage(page) {
    // Use the full URL to open each specific riddle page in a new tab
    const baseUrl = 'https://shruti-tussinaajao.com/'; // Replace with your GitHub username and repo name
    window.open(baseUrl + page, '_blank');
}
