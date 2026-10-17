// Get the contact form
const contactForm = document.querySelector("form");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check that all fields contain information
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Show success message
    alert("Thank you, " + name + "! Your message has been received.");

    // Clear the form
    contactForm.reset();
});