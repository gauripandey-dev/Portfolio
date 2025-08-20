// Professional Portfolio JavaScript
// Enhanced with modern features and professional animations

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
    initializeNavigation();
    initializeTypingAnimation();
    initializeParticles();
    initializeScrollAnimations();
    initializeContactForm();
    initializeBackToTop();
    initializeCertificateModal();
    initializeProjectAnimations();
    initializeTimelineAnimations();
    initializeEducationAnimations();
    initializeLoadingAnimations();
});

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add click animation
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'light') {
            icon.className = 'fas fa-moon';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        } else {
            icon.className = 'fas fa-sun';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        }
    }
}

// Enhanced Navigation Functionality
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger lines
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Active navigation highlighting with smooth scrolling
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section, header');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Professional Typing Animation
function initializeTypingAnimation() {
    const typingText = document.getElementById('typingText');
    const titles = [
        'Frontend Developer',
        'Software Engineer', 
        'React Specialist',
        'TypeScript Developer',
        'UI/UX Enthusiast',
        'Problem Solver'
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function typeAnimation() {
        const currentTitle = titles[titleIndex];
        
        if (!isDeleting && !isWaiting) {
            // Typing
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentTitle.length) {
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    isDeleting = true;
                }, 2500); // Wait 2.5 seconds before deleting
            }
        } else if (isDeleting && !isWaiting) {
            // Deleting
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                }, 300); // Short pause before next title
            }
        }
        
        // Dynamic typing speed
        const typingSpeed = isDeleting ? 50 : 100;
        if (!isWaiting) {
            setTimeout(typeAnimation, typingSpeed);
        } else {
            setTimeout(typeAnimation, 0);
        }
    }
    
    // Start typing animation with initial delay
    setTimeout(typeAnimation, 1500);
}

// Enhanced Particle System
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = window.innerWidth > 768 ? 60 : 30;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size and position
        const size = Math.random() * 8 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 15;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Random opacity for depth effect
        particle.style.opacity = Math.random() * 0.3 + 0.05;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + 5) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < numberOfParticles; i++) {
        setTimeout(() => createParticle(), i * 150);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 4000);
}

// Enhanced Scroll Animations with Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('projects-grid') || 
                    entry.target.classList.contains('certificates-grid') ||
                    entry.target.classList.contains('achievements-grid')) {
                    const items = entry.target.children;
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('loaded');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.section-header, .about-content, .stats-grid, .timeline, .education-timeline, .achievements-section, .projects-grid, .certificates-grid, .contact-content'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Education Timeline Animations
function initializeEducationAnimations() {
    const educationItems = document.querySelectorAll('.education-item');
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    const educationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    // Animate education items
    educationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        educationObserver.observe(item);
    });
    
    // Animate achievement cards
    achievementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        educationObserver.observe(card);
    });
}

// Timeline Animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.3}s, transform 0.8s ease ${index * 0.3}s`;
        timelineObserver.observe(item);
    });
}

// Enhanced Project Card Animations
function initializeProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });
        
        cardObserver.observe(card);
        
        // Add hover effects for project links
        const projectLinks = card.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    });
}

// Enhanced Contact Form with Advanced Validation
function initializeContactForm() {
    const form = document.forms['submit-to-google-sheet'];
    const message = document.getElementById('msg');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Google Sheets script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx0AuAkrudVuzSNHwsUmCdEnCRZlSTd_JE1Zyu1J1sWpRJ0ke1tuC6GWc_wFD7IXThl/exec';
    
    // Enhanced form validation
    function validateForm() {
        const name = form.Name.value.trim();
        const email = form.Email.value.trim();
        const subject = form.Subject.value.trim();
        const messageText = form.Message.value.trim();
        
        // Clear previous validation styles
        clearValidationStyles();
        
        let isValid = true;
        
        if (!name || name.length < 2) {
            showFieldError(form.Name, 'Please enter a valid name (minimum 2 characters)');
            isValid = false;
        }
        
        if (!email || !isValidEmail(email)) {
            showFieldError(form.Email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!subject || subject.length < 3) {
            showFieldError(form.Subject, 'Please enter a subject (minimum 3 characters)');
            isValid = false;
        }
        
        if (!messageText || messageText.length < 10) {
            showFieldError(form.Message, 'Please enter a message (minimum 10 characters)');
            isValid = false;
        }
        
        if (!isValid) {
            showMessage('Please fix the errors above and try again', 'error');
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(field, errorMessage) {
        field.style.borderColor = '#ef4444';
        field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        
        // Create or update error message
        let errorElement = field.parentElement.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.5rem;
                display: block;
            `;
            field.parentElement.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    }
    
    function clearValidationStyles() {
        const fields = form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
            field.style.boxShadow = '';
            
            const errorElement = field.parentElement.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
        });
    }
    
    function showMessage(text, type) {
        message.textContent = text;
        message.className = `form-message ${type}`;
        message.style.display = 'block';
        
        setTimeout(() => {
            message.style.display = 'none';
        }, 6000);
    }
    
    function setLoadingState(loading) {
        const btnText = submitBtn.querySelector('span');
        const btnIcon = submitBtn.querySelector('i');
        
        if (loading) {
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
        } else {
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }
    }
    
    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setLoadingState(true);
        clearValidationStyles();
        
        fetch(scriptURL, { 
            method: 'POST', 
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                showMessage('Message sent successfully! I\'ll get back to you soon. 🚀', 'success');
                form.reset();
                
                // Add success animation
                submitBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    submitBtn.style.transform = 'scale(1)';
                }, 150);
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            showMessage('Oops! Something went wrong. Please try again or contact me directly. 📧', 'error');
        })
        .finally(() => {
            setLoadingState(false);
        });
    });
    
    // Enhanced form interactions
    const formInputs = form.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            input.style.borderColor = 'var(--electric-blue)';
            input.style.boxShadow = '0 0 0 3px rgba(30, 144, 255, 0.1)';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.parentElement.classList.remove('focused');
            }
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
        
        // Real-time validation feedback
        input.addEventListener('input', () => {
            const errorElement = input.parentElement.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
            
            if (input.type === 'email' && input.value) {
                if (isValidEmail(input.value)) {
                    input.style.borderColor = '#22c55e';
                } else {
                    input.style.borderColor = '#ef4444';
                }
            }
        });
    });
}

// Enhanced Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add click animation
        backToTopBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            backToTopBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Enhanced Certificate Modal Functionality
function initializeCertificateModal() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            const imageSrc = card.querySelector('img')?.src;
            const date = card.querySelector('.certificate-date').textContent;
            
            showCertificateModal(title, description, imageSrc, date);
        });
    });
}

function showCertificateModal(title, description, imageSrc, date) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.cssText = `
        background: var(--bg-secondary);
        border-radius: 25px;
        padding: 2.5rem;
        margin: 2rem;
        max-width: 600px;
        width: 100%;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
        border: 2px solid var(--electric-blue);
        box-shadow: var(--card-hover-shadow);
    `;
    
    modalContent.innerHTML = `
        <button class="modal-close" style="
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: var(--electric-blue);
            border: none;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        ">&times;</button>
        ${imageSrc ? `<img src="${imageSrc}" alt="${title}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px; margin-bottom: 1.5rem; border: 2px solid var(--border-color);">` : ''}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
            <h3 style="color: var(--electric-blue); font-size: 1.5rem; margin: 0;">${title}</h3>
            <span style="background: var(--gradient-primary); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">${date}</span>
        </div>
        <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1rem;">${description}</p>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden';
    
    // Show modal with animation
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close modal functionality
    function closeModal() {
        modalOverlay.style.opacity = '0';
        modalContent.style.transform = 'scale(0.9)';
        setTimeout(() => {
            if (document.body.contains(modalOverlay)) {
                document.body.removeChild(modalOverlay);
            }
            document.body.style.overflow = '';
        }, 300);
    }
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    const closeBtn = modalContent.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'scale(1.1)';
        closeBtn.style.background = 'var(--electric-blue-light)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'scale(1)';
        closeBtn.style.background = 'var(--electric-blue)';
    });
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Enhanced Loading Animations
function initializeLoadingAnimations() {
    window.addEventListener('load', () => {
        // Fade in the entire page
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Animate hero section elements with staggered timing
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(40px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
        
        // Animate hero image with slide-in effect
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateX(60px)';
            heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
            
            setTimeout(() => {
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateX(0)';
            }, 600);
        }
        
        // Animate navigation
        const nav = document.querySelector('nav');
        if (nav) {
            nav.style.opacity = '0';
            nav.style.transform = 'translateY(-20px)';
            nav.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                nav.style.opacity = '1';
                nav.style.transform = 'translateY(0)';
            }, 200);
        }
    });
}

// Enhanced Scroll Effects with Parallax
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const header = document.getElementById('header');
    const nav = document.querySelector('nav');
    
    // Parallax effect for hero section
    if (header && scrolled < window.innerHeight) {
        const heroText = header.querySelector('.hero-text');
        const heroImage = header.querySelector('.hero-image');
        
        if (heroText && heroImage) {
            const parallaxSpeed = scrolled * 0.3;
            heroText.style.transform = `translateY(${parallaxSpeed}px)`;
            heroImage.style.transform = `translateY(${parallaxSpeed * 0.6}px)`;
        }
    }
    
    // Enhanced navigation background on scroll
    if (nav) {
        if (scrolled > 100) {
            nav.style.background = 'rgba(26, 31, 46, 0.95)';
            nav.style.backdropFilter = 'blur(15px)';
            nav.style.borderBottom = '1px solid var(--border-color)';
            nav.style.boxShadow = 'var(--card-shadow)';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.borderBottom = 'none';
            nav.style.boxShadow = 'none';
        }
    }
    
    // Update scroll progress
    updateScrollProgress();
}, 16)); // ~60fps

// Scroll Progress Indicator (optional feature)
function updateScrollProgress() {
    const scrollProgress = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar && scrollProgress > 0) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: ${scrollProgress}%;
            height: 3px;
            background: var(--gradient-primary);
            z-index: 1001;
            transition: width 0.1s ease;
            border-radius: 0 2px 2px 0;
        `;
        document.body.appendChild(progressBar);
    } else if (progressBar) {
        progressBar.style.width = scrollProgress + '%';
    }
}

// Enhanced Interactive Elements
function initializeInteractiveElements() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.project-card, .certificate-card, .achievement-card, .stat-item, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = card.classList.contains('project-card') || card.classList.contains('certificate-card') 
                ? 'translateY(-10px)' : 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Initialize interactive elements
document.addEventListener('DOMContentLoaded', initializeInteractiveElements);

// Add CSS for ripple animation
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Enhanced Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Performance Monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }
}

measurePerformance();

// Intersection Observer for Advanced Animations
function createAdvancedObserver() {
    const observerOptions = {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '0px 0px -100px 0px'
    };
    
    const advancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const ratio = entry.intersectionRatio;
            
            if (ratio > 0.1) {
                element.classList.add('animate-fade-up');
            }
            
            if (ratio > 0.5) {
                element.classList.add('fully-visible');
            }
            
            // Parallax effect for certain elements
            if (element.classList.contains('parallax-element')) {
                const translateY = (1 - ratio) * 50;
                element.style.transform = `translateY(${translateY}px)`;
            }
        });
    }, observerOptions);
    
    // Observe parallax elements
    const parallaxElements = document.querySelectorAll('.section-title, .hero-image');
    parallaxElements.forEach(el => {
        el.classList.add('parallax-element');
        advancedObserver.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', createAdvancedObserver);

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    // Skip to main content with Tab
    if (e.key === 'Tab' && e.shiftKey === false) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        
        // Add focus indicators
        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.style.outline = '2px solid var(--electric-blue)';
                el.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', () => {
                el.style.outline = '';
                el.style.outlineOffset = '';
            });
        });
    }
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Reinitialize particles on resize
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const currentParticles = particlesContainer.children.length;
        const targetParticles = window.innerWidth > 768 ? 60 : 30;
        
        // Adjust particle count if needed
        if (Math.abs(currentParticles - targetParticles) > 10) {
            // Clear and reinitialize particles
            particlesContainer.innerHTML = '';
            setTimeout(() => {
                for (let i = 0; i < targetParticles; i++) {
                    setTimeout(() => {
                        const particle = document.createElement('div');
                        particle.classList.add('particle');
                        const size = Math.random() * 8 + 3;
                        particle.style.width = size + 'px';
                        particle.style.height = size + 'px';
                        particle.style.left = Math.random() * 100 + '%';
                        const duration = Math.random() * 20 + 15;
                        particle.style.animationDuration = duration + 's';
                        particle.style.animationDelay = Math.random() * 5 + 's';
                        particle.style.opacity = Math.random() * 0.3 + 0.05;
                        particlesContainer.appendChild(particle);
                    }, i * 50);
                }
            }, 500);
        }
    }
    
    // Adjust hero layout on mobile
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && window.innerWidth <= 768) {
        heroContent.style.textAlign = 'center';
    } else if (heroContent) {
        heroContent.style.textAlign = '';
    }
}, 250));

// Console message for developers
console.log(`
🚀 Portfolio loaded successfully!
   
   Theme: Professional Dark/Light Mode with Enhanced Colors
   Features: 
   - Responsive Design with Advanced Animations
   - Interactive Contact Form with Validation
   - Education Timeline (Simplified)
   - Enhanced Glow Effects for Dark Mode Only
   - Orange & Existing Color Combination for Light Mode
   - Accessibility Features
   
   Built with: HTML5, CSS3, Vanilla JavaScript
   Author: Gauri Pandey
   
   For any questions, reach out at: gauripandey9720@gmail.com
   
   🎨 Color Scheme Optimized with Orange Accents in Light Mode
   📱 Fully Responsive Design
   ⚡ Performance Optimized
   ♿ Accessibility Features
   ✨ Enhanced Glow Effects in Dark Mode Only
`);

// Export functions for potential external use
window.PortfolioApp = {
    setTheme: (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },
    showMessage: (text, type) => {
        const message = document.getElementById('msg');
        if (message) {
            message.textContent = text;
            message.className = `form-message ${type}`;
            message.style.display = 'block';
        }
    },
    scrollToSection: (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },
    toggleMobileMenu: () => {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
};