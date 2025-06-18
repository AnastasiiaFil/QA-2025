// Wait until the entire HTML content has been fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get the modal container element (the dark overlay box)
    const modal = document.getElementById("modal");

    // Get the image element inside the modal that will show the enlarged image
    const modalImg = document.getElementById("modal-img");

    // Get the caption element to display the image's alt text
    const caption = document.getElementById("modal-caption");

    // Get the close button (×) inside the modal
    const closeBtn = document.querySelector(".modal-close");

    // For every image inside the gallery grid...
    document.querySelectorAll(".gallery-grid img").forEach(img => {
        // Add a click event to open the modal with that image
        img.addEventListener("click", () => {
            modal.style.display = "flex";       // Show the modal
            modalImg.src = img.src;             // Set the modal image to the clicked image
            caption.innerText = img.alt;        // Use the image alt text as caption
        });
    });

    // When the close button (×) is clicked, hide the modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Also close the modal if the user clicks outside the image (on the overlay background)
    modal.addEventListener("click", (e) => {
        // Check if the clicked target is the modal itself (not the image or caption)
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
