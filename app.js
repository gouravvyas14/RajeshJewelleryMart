document.addEventListener('DOMContentLoaded', () => {
    
    // Trigger initial scroll reveals once loaded
    window.addEventListener('load', () => {
        revealElements();
    });

    // --- Sticky Navigation ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal-up');

    function revealElements() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealElements);

    // --- Inquire Buttons (Auto-select Category) ---
    const inquireBtns = document.querySelectorAll('.inquire-btn');
    const categorySelect = document.getElementById('category');

    inquireBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            if (category) {
                categorySelect.value = category;
            }
        });
    });

    // --- WhatsApp Inquiry Form Submission ---
    const inquiryForm = document.getElementById('inquiryForm');
    
    // Replace this with the actual WhatsApp number (include country code, no +)
    const WHATSAPP_NUMBER = '910000000000'; 

    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();
        
        // Construct the WhatsApp message
        let whatsappMessage = `Hello Rajesh Jewellery Mart,%0A%0A`;
        whatsappMessage += `My name is *${name}*.%0A`;
        whatsappMessage += `I am interested in your *${category}*.%0A`;
        
        if (message) {
            whatsappMessage += `%0A*Message:*%0A${message}`;
        }
        
        // Open WhatsApp Web/App
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Optional: Reset form after submission
        inquiryForm.reset();
    });
});
