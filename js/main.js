// Wait for the entire HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get the burger icon element from the DOM
    const burger = document.querySelector('.burger');

    // Get the mobile navigation menu element from the DOM
    const mobileNav = document.querySelector('.mobile-nav');

    // Toggle the mobile menu when the burger icon is clicked
    burger.addEventListener('click', () => {
        // Add or remove the 'open' class to show/hide the mobile menu
        mobileNav.classList.toggle('open');

        // Add or remove the 'active' class to animate the burger icon (e.g. into a cross ✕)
        burger.classList.toggle('active');
    });

    // Wait for any click on the page to detect clicks outside the menu
    document.addEventListener('click', (e) => {
        // If the click is NOT on the burger icon and NOT inside the mobile menu
        if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
            // Close the mobile menu
            mobileNav.classList.remove('open');

            // Reset the burger icon back to its original state
            burger.classList.remove('active');
        }
    });

    // Automatically close the mobile menu when resizing to a larger screen
    window.addEventListener('resize', () => {
        // If the window width is more than 768px (desktop layout)
        if (window.innerWidth > 768) {
            // Ensure mobile menu is hidden
            mobileNav.classList.remove('open');

            // Reset burger icon to default (non-active)
            burger.classList.remove('active');
        }
    });
});
