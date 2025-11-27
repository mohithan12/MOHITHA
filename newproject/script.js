// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Booking Modal Functions
function openBookingModal(destination) {
    const modal = document.getElementById('bookingModal');
    const modalDestination = document.getElementById('modalDestination');
    modalDestination.textContent = destination;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('bookingForm').reset();
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('bookingModal');
    if (event.target === modal) {
        closeBookingModal();
    }
});

// Success Message Functions
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        destination: document.getElementById('modalDestination').textContent,
        name: document.getElementById('bookingName').value,
        email: document.getElementById('bookingEmail').value,
        phone: document.getElementById('bookingPhone').value,
        date: document.getElementById('bookingDate').value,
        guests: document.getElementById('bookingGuests').value,
        message: document.getElementById('bookingMessage').value
    };
    
    // Here you would normally send this data to a server
    console.log('Booking submitted:', formData);
    
    // Show success message
    closeBookingModal();
    showSuccessMessage();
    
    // Store booking in localStorage for demo purposes
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        destination: document.getElementById('destination').value,
        tripType: document.getElementById('trip-type').value,
        message: document.getElementById('message').value
    };
    
    // Here you would normally send this data to a server
    console.log('Contact form submitted:', formData);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    this.reset();
    
    // Store inquiry in localStorage for demo purposes
    let inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    inquiries.push({
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
    });
    localStorage.setItem('inquiries', JSON.stringify(inquiries));
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.destination-card, .feature-card, .testimonial-card, .tip-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #e67e22 !important;
        position: relative;
    }
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #e67e22;
    }
`;
document.head.appendChild(style);

// Destination card hover effects
document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.card-image i').style.transform = 'scale(1.1)';
        this.querySelector('.card-image i').style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.card-image i').style.transform = 'scale(1)';
    });
});

// Form validation enhancements
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.length >= 10;
}

// Add real-time validation
document.getElementById('bookingEmail').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#27ae60';
    }
});

document.getElementById('bookingPhone').addEventListener('blur', function() {
    if (!validatePhone(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#27ae60';
    }
});

document.getElementById('email').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        this.style.borderColor = '#e74c3c';
    } else {
        this.style.borderColor = '#27ae60';
    }
});

// Loading animation for buttons
document.querySelectorAll('.book-btn, .submit-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.type !== 'submit') {
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1500);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize date input with minimum date (today)
document.getElementById('bookingDate').min = new Date().toISOString().split('T')[0];

// Counter animation for statistics (if you add them later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Hero Slider Functionality
function initHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = '0';
            slide.style.visibility = 'hidden';
        });
        
        // Show current slide
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].style.visibility = 'visible';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-advance slides
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Initialize slider
    if (slides.length > 0) {
        // Show first slide
        showSlide(0);
        
        // Start auto-advance
        startSlider();
        
        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slider.addEventListener('mouseleave', startSlider);
        }
        
        // Add navigation controls
        const nextBtn = document.querySelector('.slider-next');
        const prevBtn = document.querySelector('.slider-prev');
        
        if (nextBtn) nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            startSlider();
        });
        
        if (prevBtn) prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            startSlider();
        });
    }
}

// Lightbox Functionality
function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="Travel image" class="lightbox-image">
            <div class="lightbox-caption"></div>
            <button class="lightbox-nav lightbox-prev">❮</button>
            <button class="lightbox-nav lightbox-next">❯</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    let currentImageIndex = 0;
    let galleryItems = [];
    
    // Initialize gallery items
    function initGallery() {
        galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    }
    
    // Open lightbox with specific image
    function openLightbox(index) {
        if (galleryItems.length === 0) initGallery();
        if (index < 0 || index >= galleryItems.length) return;
        
        currentImageIndex = index;
        const item = galleryItems[index];
        const img = item.querySelector('img');
        const caption = item.getAttribute('data-caption') || '';
        
        lightboxImage.src = img.src.replace('w=400', 'w=1200'); // Load higher resolution image
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Navigation functions
    function showNext() {
        openLightbox((currentImageIndex + 1) % galleryItems.length);
    }
    
    function showPrev() {
        openLightbox((currentImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display !== 'flex') return;
        
        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNext();
                break;
            case 'ArrowLeft':
                showPrev();
                break;
        }
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Initialize gallery items
    document.addEventListener('DOMContentLoaded', () => {
        initGallery();
        
        // Add click handlers to gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => openLightbox(index));
        });
    });
    
    return {
        open: openLightbox,
        close: closeLightbox
    };
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    const lightbox = initLightbox();
    
    // Make lightbox available globally
    window.openLightbox = (index) => lightbox.open(parseInt(index));
});

// Console welcome message
console.log('%c🌴 Welcome to Explore Holidays India! 🌴', 'color: #e67e22; font-size: 20px; font-weight: bold;');
console.log('%cYour gateway to incredible journeys awaits!', 'color: #3498db; font-size: 14px;');

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});;
