# Testing Checklist

## Manual Testing

### Responsive Design Testing

**Desktop (1920px)**
- [ ] Navigation bar displays correctly with all links visible
- [ ] Hero section full viewport with logo and typing animation
- [ ] All sections display in proper layout
- [ ] Footer displays correctly

**Tablet (768px)**
- [ ] Navigation bar displays correctly
- [ ] Content sections stack appropriately
- [ ] Expertise cards display in 2 columns
- [ ] Project cards display in 2 columns
- [ ] Contact form and info side-by-side

**Mobile (375px)**
- [ ] Hamburger menu appears and works
- [ ] Hero section scales properly
- [ ] All sections single column
- [ ] Expertise cards single column
- [ ] Project cards single column
- [ ] Contact form and info stack vertically
- [ ] All text readable without horizontal scroll

### Navigation Testing

- [ ] Clicking "Home" scrolls to hero section
- [ ] Clicking "About" scrolls to about section
- [ ] Clicking "Expertise" scrolls to expertise section
- [ ] Clicking "Projects" scrolls to projects section
- [ ] Clicking "Insights" scrolls to insights section
- [ ] Clicking "Contact" scrolls to contact section
- [ ] URL hash updates when scrolling
- [ ] Active nav link highlights correctly
- [ ] Mobile menu opens/closes on hamburger click
- [ ] Mobile menu closes when nav link clicked

### Animations Testing

- [ ] Hero typing effect cycles through specializations
- [ ] Scroll animations trigger when sections enter viewport
- [ ] Expertise cards animate with stagger effect
- [ ] Project cards animate on scroll
- [ ] Hover effects work on cards
- [ ] Button hover effects work
- [ ] Contact icons scale on hover

### Contact Form Testing

- [ ] Form validates required fields
- [ ] Email validation works (rejects invalid emails)
- [ ] Form submission opens mailto link
- [ ] Mailto includes correct email: contact@cognition-forge.com
- [ ] Form resets after submission
- [ ] Alert messages display correctly

### Accessibility Testing

**Keyboard Navigation**
- [ ] Tab key navigates through all interactive elements
- [ ] Enter key activates navigation links
- [ ] Enter key submits contact form
- [ ] Focus indicators visible on all elements
- [ ] Skip-to-content link works (Tab from top)

**Screen Reader**
- [ ] All images have alt text
- [ ] ARIA labels present on icons
- [ ] Semantic HTML structure (nav, main, section, footer)
- [ ] Headings in logical order (h1 → h2 → h3)

**Color Contrast**
- [ ] Text on dark backgrounds readable
- [ ] Links have sufficient contrast
- [ ] Buttons have clear text

### Links Testing

- [ ] GitHub links open in new tab with rel="noopener"
- [ ] Email icon opens mailto link
- [ ] LinkedIn icon links (update with real URL)
- [ ] All external links have proper attributes
- [ ] Domain reference (www.cognition-forge.com) displays

### Performance Testing

**Lighthouse Audit** (Chrome DevTools)
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories: Performance, Accessibility, SEO
4. Select "Desktop" or "Mobile"
5. Click "Generate report"

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 100

**Manual Checks:**
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors in DevTools
- [ ] Animations smooth (no jank)
- [ ] Scroll performance smooth

### Cross-Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Edge (latest)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

## Acceptance Criteria Verification

### AC-001: Hero Section with Branding
- [ ] Logo displays prominently
- [ ] Tagline: "Pioneering AI Governance & Agentic Systems"
- [ ] Typing animation shows specializations
- [ ] CTA buttons: View Work, Contact, GitHub
- [ ] Dark theme with gradient background

### AC-002: About Section with Brand Identity
- [ ] Avatar displays as brand mascot
- [ ] Professional overview present
- [ ] Research interests displayed attractively
- [ ] Core competencies (4 cards)
- [ ] No personal names visible

### AC-003: Expertise Domains Organization
- [ ] 4 expertise cards displayed
- [ ] AI & Innovation Hub card
- [ ] Cloud & Architecture card
- [ ] Trading & FinTech card
- [ ] Enterprise Solutions card
- [ ] Hover effects work

### AC-004: Responsive Navigation System
- [ ] Fixed navigation bar
- [ ] Smooth scroll works
- [ ] Hamburger menu on mobile
- [ ] Active section highlighting
- [ ] URL hash updates

### AC-005: Manual GitHub Project Links
- [ ] 3 example project cards
- [ ] Each card has: name, description, tech tags, GitHub link
- [ ] HTML comments explain how to add more
- [ ] Consistent styling
- [ ] No API calls

### AC-006: Contact Section with Multiple Channels
- [ ] Contact form with mailto
- [ ] Email icon with tooltip
- [ ] GitHub icon link
- [ ] LinkedIn icon link (placeholder)
- [ ] Logo/avatar displayed
- [ ] Domain reference: www.cognition-forge.com

### AC-007: Visual Polish and Animations
- [ ] Scroll-triggered animations
- [ ] Smooth transitions
- [ ] Hover effects on cards/buttons
- [ ] Professional loading/animations

### AC-008: Performance and Accessibility
- [ ] Page loads < 3 seconds
- [ ] Semantic HTML5 structure
- [ ] ARIA labels present
- [ ] Alt text on images
- [ ] Keyboard navigation works
- [ ] Responsive on all sizes

## Browser DevTools Checks

### Console (F12)
- [ ] No JavaScript errors
- [ ] No 404 errors for assets
- [ ] All CDN resources load successfully

### Network Tab
- [ ] All resources load (200 status)
- [ ] Tailwind CSS loads
- [ ] Font Awesome loads
- [ ] AOS library loads
- [ ] Google Fonts load
- [ ] Images load

### Elements/Inspector
- [ ] Tailwind classes applied correctly
- [ ] Custom CSS styles present
- [ ] No layout shifts (CLS issues)

## Issues Found

Record any issues here:

1. Issue: _______________________________
   - Severity: High / Medium / Low
   - Status: Open / Fixed
   - Notes: _______________________________

2. Issue: _______________________________
   - Severity: High / Medium / Low
   - Status: Open / Fixed
   - Notes: _______________________________

## Test Results

- Testing Date: ________________
- Tested By: ________________
- Browser Used: ________________
- Viewport: Desktop / Tablet / Mobile
- Overall Status: Pass / Fail
- Notes: _______________________________
