document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    let mailtoLink = `mailto:example@example.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

function sendWhatsApp() {
    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || message === "") {
        alert("Please enter your name and message.");
        return;
    }

    let phoneNumber = "923107522723"; // اپنا WhatsApp نمبر یہاں ڈالیں
    let whatsappMessage = `Hello, my name is ${name}. ${message}`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    let mailtoLink = `mailto:example@example.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
});

function sendWhatsApp() {
    let name = document.getElementById("name").value.trim() || "Anonymous";
    let message = document.getElementById("message").value.trim() || "Hello! I would like to chat.";
    let phoneNumber = "923107522723"; 
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, my name is ${name}. ${message}`)}`;
    window.open(whatsappURL, "_blank");
}
document.getElementById("instagram").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/samiullah1596ccw"; // اپنا انسٹاگرام لنک لگائیں
});
const testimonials = [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Ali Khan",
        role: "Business Owner",
        feedback: "“Samiullah did an incredible job on my website! The design is sleek, modern, and fully responsive.”",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: " Min 敏– nimble/cleve",
        role: "E-commerce Entrepreneur",
        feedback: "“I needed an e-commerce store built quickly, and Samiullah delivered beyond expectations.”",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "David Smith",
        role: "Freelance Client",
        feedback: "“Great experience working with Samiullah! His attention to detail is impressive.”",
        rating: "⭐⭐⭐⭐⭐"
    }
];

let currentIndex = 0;
const imgElement = document.getElementById("client-image");
const nameElement = document.getElementById("client-name");
const roleElement = document.getElementById("client-role");
const feedbackElement = document.getElementById("client-feedback");
const ratingElement = document.getElementById("client-rating");

function updateTestimonial(index) {
    imgElement.src = testimonials[index].image;
    nameElement.innerText = testimonials[index].name;
    roleElement.innerText = testimonials[index].role;
    feedbackElement.innerText = testimonials[index].feedback;
    ratingElement.innerText = testimonials[index].rating;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}

setInterval(nextTestimonial, 5000); // Auto-slide every 5 seconds
