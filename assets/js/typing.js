// Cognition Forge - Typing Animation Effect

/**
 * Typing Animation Class
 */
class TypingEffect {
    constructor(elementId, strings, options = {}) {
        this.element = document.getElementById(elementId);
        this.strings = strings;
        this.options = {
            typeSpeed: options.typeSpeed || 80,
            deleteSpeed: options.deleteSpeed || 50,
            pauseDuration: options.pauseDuration || 2000,
            loop: options.loop !== undefined ? options.loop : true,
            showCursor: options.showCursor !== undefined ? options.showCursor : true
        };

        this.currentStringIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;

        if (this.element) {
            this.init();
        }
    }

    /**
     * Initialize typing effect
     */
    init() {
        // Add cursor class if enabled
        if (this.options.showCursor) {
            this.element.classList.add('typing-cursor');
        }

        // Start typing
        this.type();
    }

    /**
     * Main typing logic
     */
    type() {
        const currentString = this.strings[this.currentStringIndex];

        if (this.isDeleting) {
            // Delete character
            this.currentCharIndex--;
            this.element.textContent = currentString.substring(0, this.currentCharIndex);

            if (this.currentCharIndex === 0) {
                // Finished deleting, move to next string
                this.isDeleting = false;
                this.currentStringIndex = (this.currentStringIndex + 1) % this.strings.length;

                // Pause before typing next string
                setTimeout(() => this.type(), 500);
                return;
            }
        } else {
            // Type character
            this.currentCharIndex++;
            this.element.textContent = currentString.substring(0, this.currentCharIndex);

            if (this.currentCharIndex === currentString.length) {
                // Finished typing, pause then start deleting
                this.isDeleting = true;

                setTimeout(() => this.type(), this.options.pauseDuration);
                return;
            }
        }

        // Continue typing/deleting
        const speed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        setTimeout(() => this.type(), speed);
    }

    /**
     * Stop the typing animation
     */
    stop() {
        this.options.loop = false;
    }

    /**
     * Reset the typing animation
     */
    reset() {
        this.currentStringIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.element.textContent = '';
    }
}

// Initialize typing effect when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');

    if (typingElement) {
        // Strings to type
        const strings = [
            'AI Governance for Software Engineering',
            'AI-assisted Software Development Process',
            'Agentic AI Systems & Automation',
            'Cloud Architecture & Microservices',
            'High-Performance Trading Platforms',
            'Enterprise Security Solutions'
        ];

        // Create typing effect
        const typing = new TypingEffect('typing-text', strings, {
            typeSpeed: 80,
            deleteSpeed: 50,
            pauseDuration: 2000,
            loop: true,
            showCursor: true
        });

        // Store reference globally for potential control
        window.typingEffect = typing;
    }
});
