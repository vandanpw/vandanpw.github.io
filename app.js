function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        message : document.getElementById("message").value
    }

    const button = document.querySelector('.contact-button');
    button.textContent = 'Sending...';
    button.disabled = true;

    emailjs.send("service_igyucx9", "template_s0wjn6s", params)
        .then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Error:", error); // Log the error
            alert('Oops! Something went wrong. Please try again.');
        })
        .finally(() => {
            button.textContent = 'Send Message';
            button.disabled = false;
        });
}
