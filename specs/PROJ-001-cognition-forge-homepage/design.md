# PROJ Design: Cognition Forge Homepage

## Architecture

### System Overview
Static single-page application (SPA) with client-side navigation using pure HTML5, CSS3, and vanilla JavaScript. No build process or backend required. All assets served statically with CDN dependencies for styling and icons.

### Core Components
1. **Navigation System** - Fixed header with smooth scroll and hash routing
2. **Hero Section** - Full-viewport landing with logo, tagline, and animated typing effect
3. **About Section** - Brand identity showcase with expertise overview
4. **Expertise Section** - Card-based domain showcase with hover effects
5. **Projects Section** - Static portfolio grid with manual project entries
6. **Insights Section** - Placeholder for blog/articles (future content)
7. **Contact Section** - Icon-based contact methods with mailto form
8. **Footer** - Branding, quick links, copyright

### Technology Choices
- **HTML5**: Semantic structure for SEO and accessibility
- **Tailwind CSS (CDN)**: Utility-first styling with custom dark theme
- **Vanilla JavaScript**: Lightweight interactivity without framework overhead
- **Font Awesome (CDN)**: Professional icon library
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Google Fonts (CDN)**: Inter or Poppins for typography

### Design Pattern
**Single-Page Layout with Section Navigation**
- All content on one page, divided into semantic sections
- JavaScript-powered smooth scrolling between sections
- URL hash updates for bookmarkability (#about, #expertise, etc.)
- Progressive enhancement: content accessible without JavaScript

## Data Flow

### Page Load Sequence
```
Browser Request (index.html)
    ↓
Load HTML Structure
    ↓
Parse & Load CDN Resources (Tailwind, Font Awesome, Google Fonts, AOS)
    ↓
Execute main.js
    ├→ Initialize navigation listeners
    ├→ Initialize AOS animations
    ├→ Initialize typing effect
    └→ Initialize hash routing
    ↓
Page Interactive
```

### Navigation Flow
```
User Clicks Nav Link / Scrolls
    ↓
JavaScript Event Handler
    ├→ Update URL hash
    ├→ Smooth scroll to section
    └→ Update active nav indicator
    ↓
Section Visible
    ↓
AOS Triggers Animations
```

### Contact Form Flow
```
User Fills Form → Clicks Submit
    ↓
JavaScript Validation (optional)
    ↓
mailto: Link Opens Email Client
    ├→ Pre-filled: contact@cognition-forge.com
    ├→ Subject: Contact from Cognition Forge
    └→ Body: Form data
```

## Dependencies

### CDN Resources
1. **Tailwind CSS v3.x**
   - `https://cdn.jsdelivr.net/npm/tailwindcss@3/dist/tailwind.min.css` (or alternative CDN)
   - Custom dark theme configuration via inline script

2. **Font Awesome v6.x**
   - `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
   - Icons: envelope, github, linkedin, bars, xmark, etc.

3. **AOS (Animate On Scroll) v2.x**
   - `https://unpkg.com/aos@2.3.1/dist/aos.css`
   - `https://unpkg.com/aos@2.3.1/dist/aos.js`
   - Init: `AOS.init({ duration: 800, once: true })`

4. **Google Fonts**
   - `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`
   - Alternative: Poppins

### Image Assets
- `assets/images/logo.png` - AI circuit logo (provided)
- `assets/images/avatar.png` - Cartoon avatar (provided)
- `assets/images/favicon.ico` - Browser tab icon (generated from logo)
- `assets/images/og-image.jpg` - Social sharing image (1200x630px)

### Local Files
- `index.html` - Main HTML structure
- `assets/css/styles.css` - Custom CSS overrides and animations
- `assets/js/main.js` - Navigation, typing effect, hash routing
- `assets/js/typing.js` - Animated typing effect for hero section
- `.gitignore` - Git exclusions

## Constraints

### Performance Constraints
- **First Contentful Paint < 1.5s**: Minimize render-blocking resources
- **Largest Contentful Paint < 2.5s**: Optimize hero image/logo loading
- **Cumulative Layout Shift < 0.1**: Reserve space for images, avoid layout jumps
- **Page Weight < 2MB**: Optimize images, minimize dependencies

### Browser Compatibility
- Modern ES6 JavaScript (const, let, arrow functions, template literals)
- CSS Grid and Flexbox for layouts
- IntersectionObserver API for scroll animations (AOS handles polyfills)
- No IE11 support required

### Accessibility Constraints
- WCAG 2.1 AA minimum compliance
- Color contrast: Text on dark backgrounds must meet 4.5:1 ratio
- All interactive elements keyboard accessible (tab, enter, space)
- Skip-to-content link for screen readers
- Semantic HTML5 elements (nav, main, section, article, footer)

### SEO Constraints
- Single-page structure with meaningful URL hashes
- Meta tags: title, description, Open Graph, Twitter Card
- Schema.org Organization structured data
- Alt text for all images
- Semantic heading hierarchy (h1 → h2 → h3)

### Security Constraints
- No external API calls (eliminates XSS/CSRF risks)
- No user-generated content storage
- No cookies or localStorage (GDPR compliant by default)
- mailto: links only for contact (no backend form processing)

## Project Structure

### Project Name
**cognition-forge-homepage** (directory: `/Users/jwwang/src/Cognition`)

### Root Directory Layout
```
/Users/jwwang/src/Cognition/
├── index.html                  # Main entry point
├── assets/
│   ├── css/
│   │   └── styles.css         # Custom styles and animations
│   ├── js/
│   │   ├── main.js            # Core functionality (nav, hash routing)
│   │   └── typing.js          # Typing animation effect
│   └── images/
│       ├── logo.png           # Cognition Forge logo (provided)
│       ├── avatar.png         # Brand avatar/mascot (provided)
│       ├── favicon.ico        # Browser favicon
│       └── og-image.jpg       # Social sharing image (1200x630)
├── specs/
│   └── PROJ-001-cognition-forge-homepage/
│       ├── requirements.md
│       ├── design.md
│       └── tasks.md
├── .gitignore                  # Git exclusions
└── README.md                   # Project documentation

```

### Naming Conventions
- **HTML**: `index.html` (single page)
- **CSS**: `kebab-case.css` (e.g., `styles.css`)
- **JavaScript**: `camelCase.js` for files, camelCase for functions/variables
- **Images**: `kebab-case.png/jpg/ico` (e.g., `og-image.jpg`)
- **CSS Classes**: Tailwind utility classes + custom classes in `kebab-case`
- **IDs**: `kebab-case` for section anchors (`#hero`, `#about`, `#expertise`)

## Interfaces

### HTML Structure Contract
```html
<!-- Section IDs for navigation anchors -->
<section id="hero">...</section>
<section id="about">...</section>
<section id="expertise">...</section>
<section id="projects">...</section>
<section id="insights">...</section>
<section id="contact">...</section>
```

### JavaScript API (main.js)
```javascript
// Navigation
function initNavigation()
  - Attaches click handlers to nav links
  - Enables smooth scroll behavior
  - Updates active nav indicator

// Hash Routing
function handleHashChange()
  - Reads window.location.hash
  - Scrolls to corresponding section
  - Updates document.title

// Typing Effect (typing.js)
function initTypingEffect(elementId, strings, options)
  - elementId: DOM element to animate
  - strings: Array of text to cycle through
  - options: { typeSpeed, deleteSpeed, pauseDuration }
```

### CSS Custom Properties
```css
:root {
  --color-bg-primary: #0a0e27;      /* Deep navy */
  --color-bg-secondary: #1a1f3a;    /* Lighter navy */
  --color-accent-cyan: #00d4ff;     /* Primary accent */
  --color-accent-teal: #00ffaa;     /* Secondary accent */
  --color-accent-purple: #9b59b6;   /* Tertiary accent */
  --color-accent-orange: #ffa500;   /* Highlight accent */
  --color-text-primary: #ffffff;    /* White text */
  --color-text-secondary: #b0b8cc;  /* Muted text */
}
```

## Data Models

### Project Card Structure (Static HTML)
```html
<!-- Repeatable project card template -->
<div class="project-card">
  <div class="project-icon">
    <i class="fab fa-github"></i>
  </div>
  <h3 class="project-name">[Project Name]</h3>
  <p class="project-description">[Brief description]</p>
  <div class="tech-stack">
    <span class="tech-tag">[Tech 1]</span>
    <span class="tech-tag">[Tech 2]</span>
  </div>
  <a href="[GitHub URL]" class="project-link" target="_blank" rel="noopener">
    View on GitHub <i class="fas fa-external-link-alt"></i>
  </a>
</div>
```

### Expertise Domain Structure
```html
<!-- Repeatable expertise card template -->
<div class="expertise-card" data-aos="fade-up">
  <div class="expertise-icon">
    <i class="[Font Awesome icon class]"></i>
  </div>
  <h3 class="expertise-title">[Domain Name]</h3>
  <ul class="expertise-list">
    <li>[Capability 1]</li>
    <li>[Capability 2]</li>
    <li>[Capability 3]</li>
  </ul>
</div>
```

### Contact Method Structure
```html
<!-- Icon-based contact links -->
<a href="mailto:contact@cognition-forge.com"
   class="contact-icon"
   title="Email: contact@cognition-forge.com"
   aria-label="Send email to Cognition Forge">
  <i class="fas fa-envelope"></i>
</a>

<a href="[GitHub URL]"
   class="contact-icon"
   title="GitHub"
   aria-label="Visit Cognition Forge on GitHub"
   target="_blank" rel="noopener">
  <i class="fab fa-github"></i>
</a>
```

## Error Handling

### CDN Failure Handling
```html
<!-- Fallback for CDN failures -->
<script>
// Check if Tailwind loaded
if (typeof tailwind === 'undefined') {
  console.warn('Tailwind CSS failed to load from CDN');
  // Page remains functional with degraded styling
}

// Check if Font Awesome loaded
if (!document.querySelector('.fa-envelope')) {
  console.warn('Font Awesome failed to load from CDN');
  // Fallback: Display text labels instead of icons
}
</script>
```

### Image Loading Errors
```html
<!-- Lazy loading with error handling -->
<img src="assets/images/logo.png"
     alt="Cognition Forge Logo"
     loading="lazy"
     onerror="this.src='data:image/svg+xml,...'; this.onerror=null;">
```

### Hash Routing Errors
```javascript
// Handle invalid hash values
function handleHashChange() {
  const hash = window.location.hash.slice(1);
  const validSections = ['hero', 'about', 'expertise', 'projects', 'insights', 'contact'];

  if (hash && !validSections.includes(hash)) {
    console.warn(`Invalid section hash: ${hash}`);
    window.location.hash = '#hero'; // Redirect to hero
  }
}
```

### Form Validation (Optional Enhancement)
```javascript
// Client-side validation before mailto
function validateContactForm(formData) {
  const { name, email, message } = formData;

  if (!name || !email || !message) {
    alert('Please fill in all required fields');
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}
```

## Testing Strategy

### Manual Testing Checklist
**What to Test Manually:**
1. **Navigation**: All nav links scroll to correct sections
2. **Responsive Design**: Test on desktop (1920px), tablet (768px), mobile (375px)
3. **Animations**: Scroll triggers AOS animations, typing effect works
4. **Contact**: Email icon opens mailto link with correct address
5. **Browser Compatibility**: Test in Chrome, Firefox, Safari, Edge
6. **Accessibility**: Keyboard navigation (Tab, Enter), screen reader (NVDA/JAWS)

**What to Validate:**
- All images load correctly with proper alt text
- Logo and avatar display at correct sizes
- Color contrast meets WCAG AA (use browser DevTools)
- No console errors on page load
- Hash navigation updates URL and scrolls smoothly
- Mobile hamburger menu opens/closes correctly

### Performance Testing
**Tools:**
- Lighthouse (Chrome DevTools) - Target scores: Performance 90+, Accessibility 95+, SEO 100
- WebPageTest - Verify FCP < 1.5s, LCP < 2.5s
- GTmetrix - Check page weight < 2MB

**Test Data Approach:**
- Use actual provided logo and avatar images
- Create 4-6 placeholder project cards with realistic descriptions
- Populate expertise cards with real domain knowledge from requirements
- Test with real domain: www.cognition-forge.com

### Coverage Target
**Not applicable** - Static HTML/CSS/JS with minimal logic doesn't require unit tests. Manual testing and Lighthouse audits provide sufficient quality assurance.

**If JavaScript grows complex**, consider:
- Jest for unit testing typing animation logic
- Cypress for E2E testing of navigation flow
- Target: ≥68% coverage for JS functions (not required initially)

## Design Tokens

### Typography Scale
```css
/* Headings */
.text-hero: 4rem (64px) - Hero section main title
.text-h1: 3rem (48px) - Section headings
.text-h2: 2rem (32px) - Subsection headings
.text-h3: 1.5rem (24px) - Card titles
.text-body: 1rem (16px) - Body text
.text-small: 0.875rem (14px) - Captions, metadata

/* Font Weights */
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
```

### Spacing Scale (Tailwind Default)
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
(p-1, p-2, p-3, p-4, p-6, p-8, p-12, p-16, p-24, p-32)
```

### Animation Timing
```css
/* Transitions */
transition-fast: 150ms
transition-base: 300ms
transition-slow: 500ms

/* AOS Animations */
duration: 800ms
easing: ease-out-cubic
```

### Breakpoints
```css
/* Tailwind default breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large desktop */
```

## Content Guidelines

### Expertise Domains (4 cards)
1. **AI & Innovation Hub**
   - Icon: `fa-brain` or `fa-robot`
   - Content: AI Governance, Agentic AI Systems, AI Trading Strategies

2. **Cloud & Architecture**
   - Icon: `fa-cloud` or `fa-server`
   - Content: Microservices, Distributed Systems, Messaging Services

3. **Trading & FinTech**
   - Icon: `fa-chart-line` or `fa-bitcoin`
   - Content: E-Trading Platforms, Low-Latency Streaming, Cryptocurrency

4. **Enterprise Solutions**
   - Icon: `fa-shield-alt` or `fa-lock`
   - Content: Email/Web Security, Network Monitoring, Performance Optimization

### Hero Section Content
**Tagline Options:**
- "Pioneering AI Governance & Agentic Systems"
- "20+ Years Architecting Intelligent Systems"
- "From Cloud Infrastructure to AI Innovation"

**Typing Animation Strings:**
```javascript
[
  "AI Governance for Software Engineering",
  "Agentic AI Systems & Automation",
  "High-Performance Trading Platforms",
  "Cloud Architecture & Microservices",
  "Enterprise Security Solutions"
]
```

### Meta Tags
```html
<title>Cognition Forge - AI Governance & Agentic Systems</title>
<meta name="description" content="20+ years of software engineering leadership in AI governance, agentic AI systems, trading platforms, and cloud architecture. Professional portfolio and thought leadership.">
<meta property="og:title" content="Cognition Forge - AI Governance & Agentic Systems">
<meta property="og:description" content="Professional expertise in AI governance, agentic AI, trading platforms, and cloud architecture.">
<meta property="og:image" content="https://www.cognition-forge.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://www.cognition-forge.com">
<meta property="og:type" content="website">
```
