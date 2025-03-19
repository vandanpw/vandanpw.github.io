function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show a loading message or spinner
        const button = document.querySelector('.contact-button');
        button.textContent = 'Sending...';
        button.disabled = true;

        // Send the email using EmailJS
        emailjs.sendForm('service_igyucx9', 'service_igyucx9', form) // Replace with your Service ID and Template ID
            .then(() => {
                alert('Thank you! Your message has been sent.');
                form.reset(); // Clear the form
            })
            .catch(() => {
                alert('Oops! Something went wrong. Please try again.');
            })
            .finally(() => {
                button.textContent = 'Send Message';
                button.disabled = false;
            });
    });
});
