// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // 1. Toggle mobile menu on click
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Toggle the icon between bars and an 'X' close mark
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Close mobile menu when any link is clicked
    navItems.forEach(item => {
        item.forEachLink = item.addEventListener('click', () => {
            // Remove the active class to hide the menu
            navLinks.classList.remove('active');
            
            // Reset the icon back to bars
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');

            // Update the active link visual state
            navItems.forEach(link => link.classList.remove('active'));
            item.classList.add('active');
        });
    });
});