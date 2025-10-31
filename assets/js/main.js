// Cognition Forge - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // Initialize Navigation
    initNavigation();

    // Initialize Mobile Menu
    initMobileMenu();

    // Initialize Hash Routing
    initHashRouting();

    // Initialize Scroll Progress (optional)
    initScrollProgress();

    // Initialize Contact Form
    initContactForm();
});

/**
 * Initialize Navigation System
 * Handles smooth scrolling and active state
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get target section
            const targetId = this.getAttribute('href');

            // Handle root path (/) - scroll to top
            if (targetId === '/') {
                e.preventDefault();

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    updateMenuIcon(false);
                }

                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                // Update URL without hash
                history.pushState(null, null, '/');
                return;
            }

            // If it's not a hash link, allow default navigation
            if (!targetId.startsWith('#')) {
                return;
            }

            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    updateMenuIcon(false);
                }

                // Smooth scroll to section
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL hash
                history.pushState(null, null, targetId);

                // Update active state
                updateActiveNavLink(targetId);
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        updateActiveNavLinkOnScroll();
    });
}

/**
 * Initialize Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            const isActive = mobileMenu.classList.toggle('active');
            updateMenuIcon(isActive);
        });
    }
}

/**
 * Update Mobile Menu Icon
 */
function updateMenuIcon(isOpen) {
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        if (isOpen) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        } else {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    }
}

/**
 * Initialize Hash Routing
 * Handles direct navigation via URL hash
 */
function initHashRouting() {
    // Handle hash on page load
    if (window.location.hash) {
        handleHashChange();
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
}

/**
 * Handle Hash Change Events
 */
function handleHashChange() {
    const hash = window.location.hash;
    const validSections = ['#hero', '#about', '#expertise', '#projects', '#insights', '#contact'];

    if (hash && validSections.includes(hash)) {
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            updateActiveNavLink(hash);
        }
    } else if (hash && !validSections.includes(hash)) {
        // Invalid hash - redirect to hero
        console.warn(`Invalid section hash: ${hash}`);
        window.location.hash = '#hero';
    }
}

/**
 * Update Active Navigation Link
 */
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Update Active Link Based on Scroll Position
 */
function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const scrollPosition = window.scrollY + navbarHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(sectionId);
        }
    });
}

/**
 * Initialize Scroll Progress Indicator (Optional)
 */
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = progress + '%';
    });
}

/**
 * Utility: Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize Contact Form
 * Handles form submission via mailto
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validate form
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Construct mailto URL
            const mailtoSubject = encodeURIComponent(`Contact from ${name}: ${subject}`);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n` +
                `Subject: ${subject}\n\n` +
                `Message:\n${message}\n\n` +
                `---\n` +
                `This message was sent via www.cognition-forge.com contact form`
            );

            const mailtoLink = `mailto:contact@cognition-forge.com?subject=${mailtoSubject}&body=${mailtoBody}`;

            // Open mailto link
            window.location.href = mailtoLink;

            // Optional: Reset form after submission
            setTimeout(() => {
                contactForm.reset();
                alert('Your email client should open with the pre-filled message. Please send it from your email client.');
            }, 500);
        });
    }
}

// Export functions for potential reuse
window.CognitionForge = {
    updateActiveNavLink,
    handleHashChange
};
