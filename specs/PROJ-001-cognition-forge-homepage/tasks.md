# PROJ Tasks: Cognition Forge Homepage

**Complexity Assessment: MEDIUM**
- Acceptance Criteria: 8 ACs (+2)
- Tech Stack: Familiar (HTML/CSS/JS) (+0)
- Integration: Single component (+0)
- Dependencies: 4 CDN libraries (+1)
- Ticket Type: PROJ (+2)
- **Total Score: 5 → MEDIUM**

## Definition of Ready (DoR)
- [x] Requirements clear and complete
- [x] Dependencies identified and accessible (CDN libraries)
- [x] Acceptance criteria testable
- [x] Architecture decisions made
- [x] Design sections complete for complexity tier (design.md includes all required sections)
- [x] Coverage tooling configured (Manual testing via browser + Lighthouse)
- [x] Project structure and naming finalized (see design.md)
- [x] Complexity tier determined (MEDIUM)

## Implementation Plan
**CRITICAL**: Implementation requires explicit user instruction to begin.

Once user approves, implementation will follow this approach:
1. Foundation: Create directory structure, base HTML, and asset folders
2. Implementation: Build each section (Hero, About, Expertise, Projects, Contact) with navigation
3. Validation: Test responsiveness, animations, accessibility, and performance

## Definition of Done (DoD)
- [ ] All acceptance criteria verified (AC-001 through AC-008)
- [ ] Manual testing passed on desktop, tablet, and mobile viewports
- [ ] Lighthouse audit scores: Performance 90+, Accessibility 95+, SEO 100
- [ ] Visual verification complete (logo, avatar, styling, animations working)

## Task Breakdown (MEDIUM: 8 tasks, embedded verification + phase gates)

### Foundation Phase (Tasks 1-2)

- [ ] **TASK-001**: Create project structure and base HTML
  - Create `assets/` directories: `css/`, `js/`, `images/`
  - Copy provided logo.png and avatar.png to `assets/images/`
  - Create `index.html` with semantic HTML5 structure and CDN links
  - Add meta tags, title, Open Graph tags for www.cognition-forge.com
  - **VERIFY**: Open `index.html` in browser - page loads without errors, CDN resources load successfully

- [ ] **TASK-002**: Implement navigation system and base styles
  - Create `assets/css/styles.css` with CSS custom properties (color scheme)
  - Build fixed navigation bar with section links (Home, About, Expertise, Projects, Insights, Contact)
  - Implement hamburger menu for mobile (show/hide toggle)
  - Create `assets/js/main.js` with smooth scroll and hash routing functions
  - **VERIFY**: Click nav links → smooth scroll to sections, URL hash updates, mobile menu toggles correctly

**FOUNDATION GATE**: Before proceeding to Implementation Phase
- [ ] **Verify dependencies work**: All CDN resources load (check browser DevTools Network tab)
- [ ] **Confirm project structure**: Directory layout matches design.md structure
- [ ] **Test navigation**: All nav links scroll to correct positions, hash routing updates URL

### Implementation Phase (Tasks 3-7)

- [ ] **TASK-003**: Build Hero section with branding and animations (AC-001)
  - Create hero section with full viewport height and dark gradient background
  - Add Cognition Forge logo prominently centered
  - Add professional tagline ("20+ Years Architecting Intelligent Systems")
  - Create `assets/js/typing.js` with typing animation for specializations
  - Add CTA buttons (View Work → #projects, Contact → #contact, GitHub → external link)
  - **VERIFY**: Hero section displays correctly, typing animation cycles through specializations, buttons navigate properly

- [ ] **TASK-004**: Build About section with brand identity (AC-002)
  - Create About section with avatar/logo as brand mascot
  - Add professional overview text emphasizing 20+ years expertise
  - Display research interests and core competencies (AI governance, agentic AI, trading, cloud)
  - Add AOS animations (fade-up) for content reveal on scroll
  - **VERIFY**: Scroll to About section → content animates in, avatar displays, no personal names visible

- [ ] **TASK-005**: Build Expertise section with domain cards (AC-003)
  - Create 4 expertise cards with Font Awesome icons:
    - AI & Innovation Hub (fa-brain): AI governance, agentic AI, AI trading strategies
    - Cloud & Architecture (fa-cloud): Microservices, distributed systems, messaging
    - Trading & FinTech (fa-chart-line): E-trading, low-latency streaming, crypto
    - Enterprise Solutions (fa-shield-alt): Email/web security, network monitoring
  - Implement hover effects (scale, glow, color shift)
  - Add AOS animations (fade-up with stagger)
  - **VERIFY**: Cards display in grid layout, hover effects work, icons render correctly, animations trigger on scroll

- [ ] **TASK-006**: Build Projects section with placeholder cards (AC-005)
  - Create 2-3 placeholder project cards with structure:
    - GitHub icon, project name, description, tech stack tags, "View on GitHub" link
  - Style cards with hover effects matching expertise cards
  - Add HTML comments explaining how to add new projects manually
  - **VERIFY**: Project cards display correctly, links open in new tabs, structure is easy to duplicate for new projects

- [ ] **TASK-007**: Build Contact section with icon-based contact methods (AC-006)
  - Create Contact section with Cognition Forge logo/avatar
  - Add email icon (fa-envelope) with mailto:contact@cognition-forge.com and tooltip
  - Add GitHub icon with external link
  - Create simple contact form with Name, Email, Message fields and Submit button (mailto fallback)
  - Add domain reference: "www.cognition-forge.com" in footer or contact area
  - **VERIFY**: Email icon opens mailto with correct address, tooltip shows on hover, form works, GitHub link opens correctly

**IMPLEMENTATION GATE**: Before proceeding to Validation Phase
- [ ] **Verify core functionality**: All 6 sections (Hero, About, Expertise, Projects, Insights placeholder, Contact) display correctly
- [ ] **Confirm navigation**: Clicking nav links scrolls to each section smoothly
- [ ] **Test animations**: Typing effect works, AOS animations trigger on scroll, hover effects responsive

### Validation Phase (Tasks 8-9)

- [ ] **TASK-008**: Implement responsive design and accessibility (AC-004, AC-008)
  - Test and fix mobile layouts (375px), tablet (768px), desktop (1920px)
  - Verify hamburger menu works on mobile
  - Add ARIA labels to navigation, buttons, and icons
  - Ensure keyboard navigation works (Tab, Enter, Space)
  - Add alt text to logo and avatar images
  - Test with keyboard only (no mouse)
  - **VERIFY**: Site works on all viewport sizes, keyboard navigation functional, screen reader friendly (test with browser accessibility tools)

- [ ] **TASK-009**: Polish animations and performance optimization (AC-007, AC-008)
  - Add smooth transitions between sections
  - Implement lazy loading for images (loading="lazy" attribute)
  - Optimize image sizes (logo, avatar, og-image under 200KB each)
  - Test scroll-triggered animations work smoothly
  - Run Lighthouse audit and fix issues
  - **VERIFY**: Lighthouse scores - Performance 90+, Accessibility 95+, SEO 100, page loads < 3s on standard connection

**COMPLETION GATE**: Before marking project complete
- [ ] **All ACs verified**: Test each acceptance criterion (AC-001 through AC-008) manually
- [ ] **Cross-browser testing**: Test in Chrome, Firefox, Safari (if available)
- [ ] **Responsive verified**: Test on actual mobile device or DevTools device emulation
- [ ] **Performance acceptable**: Lighthouse audit passes performance targets

### Gate Rules
1. **Cannot proceed to next phase without gate completion**
2. **Gates verify working software, not documentation**
3. **Each gate has 3-4 concrete verification steps**
4. **If gate fails, return to current phase and fix**
5. **Every task still has embedded VERIFY step**

## Implementation Notes

### Task Dependencies
- TASK-001 must complete before TASK-002 (need HTML structure for navigation)
- TASK-002 must complete before TASK-003-007 (sections need navigation system)
- TASK-003-007 can be done sequentially (each section builds independently)
- TASK-008-009 require all sections complete (testing full integration)

### Key Files to Create
1. `index.html` - Main HTML structure (TASK-001)
2. `assets/css/styles.css` - Custom styles (TASK-002)
3. `assets/js/main.js` - Navigation and hash routing (TASK-002)
4. `assets/js/typing.js` - Typing animation (TASK-003)
5. `assets/images/favicon.ico` - Browser icon (TASK-001 or TASK-009)
6. `.gitignore` - Git exclusions (TASK-001)

### Verification Commands
Since this is a static HTML site, verification is primarily manual:
- **Browser testing**: Open `index.html` in browser (or use local server: `python3 -m http.server 8000`)
- **Lighthouse audit**: Chrome DevTools → Lighthouse tab → Generate report
- **Responsive testing**: Chrome DevTools → Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
- **Accessibility testing**: Chrome DevTools → Lighthouse → Accessibility audit
- **Keyboard navigation**: Use Tab, Shift+Tab, Enter, Space keys only

### Content Placeholders
Use content from design.md:
- **Hero tagline**: "Pioneering AI Governance & Agentic Systems"
- **Typing animation strings**: AI Governance, Agentic AI Systems, Trading Platforms, Cloud Architecture, Security Solutions
- **About text**: "20+ years of software engineering leadership in AI governance, agentic AI systems, trading platforms, and cloud architecture"
- **Contact email**: contact@cognition-forge.com
- **Domain**: www.cognition-forge.com

### Style Guidelines
- Use Tailwind utility classes for rapid styling
- Custom CSS in `styles.css` only for animations and complex effects
- Color scheme: Deep navy (#0a0e27), cyan (#00d4ff), teal (#00ffaa), purple (#9b59b6), orange (#ffa500)
- Typography: Inter or Poppins from Google Fonts
- Spacing: Consistent padding/margins using Tailwind scale (p-4, p-8, p-12, etc.)
