// Get all buttons on the page
const buttons = document.querySelectorAll('.btn');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add a CSS class to change the background color
        button.classList.add('clicked');

        // Remove the CSS class after a short delay to revert the background color
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 400);
    });
});


