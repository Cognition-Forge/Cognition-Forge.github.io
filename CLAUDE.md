# CLAUDE.md - AI Agent Instructions

This file provides context and instructions for AI agents working on the Cognition Forge homepage.

## Project Overview

**Project Name**: Cognition Forge Professional Homepage
**Domain**: www.cognition-forge.com
**Contact**: contact@cognition-forge.com
**Status**: Production Ready
**Tech Stack**: Pure HTML/CSS/JS (no build process)

## Project Context

This is a professional homepage showcasing 20+ years of expertise in:
- AI Governance & Compliance for software engineering
- Agentic AI Systems & Workflow Automation
- High-Performance Trading Platforms (stocks, futures, crypto)
- Cloud Architecture & Microservices
- Enterprise Security Solutions

**Brand Identity**: Cognition Forge (no personal names exposed)
**Design**: Dark theme with gradient accents (cyan, teal, purple, orange)

## File Structure

```
/
├── index.html              # Main entry point (single-page application)
├── assets/
│   ├── css/styles.css     # Custom styles and animations
│   ├── js/main.js         # Navigation, hash routing, contact form
│   ├── js/typing.js       # Typing animation effect
│   └── images/
│       ├── logo.png       # AI circuit logo (176KB)
│       ├── avatar.png     # Brand mascot (152KB)
│       └── README.md      # Image asset instructions
├── docs/
│   ├── DEPLOYMENT.md      # Deployment guide
│   ├── PROJECT_SUMMARY.md # Complete project overview
│   └── TESTING.md         # Manual testing checklist
├── specs/
│   └── PROJ-001-cognition-forge-homepage/
│       ├── requirements.md # Business requirements & ACs
│       ├── design.md      # Architecture & design decisions
│       └── tasks.md       # Implementation tasks
├── README.md              # User-facing documentation
└── CLAUDE.md              # This file (AI agent instructions)
```

## Key Technologies

- **HTML5**: Semantic structure, no templating
- **Tailwind CSS v3**: Via CDN, custom config in `<head>`
- **Vanilla JavaScript**: No frameworks, ES6 syntax
- **Font Awesome v6**: Icons via CDN
- **AOS v2.3**: Scroll animations via CDN
- **Google Fonts**: Inter typography via CDN

## Content Sections

1. **Hero** (#hero): Logo, tagline, typing animation, CTA buttons
2. **About** (#about): Brand identity, competencies, research interests
3. **Expertise** (#expertise): 4 domain cards with hover effects
4. **Projects** (#projects): Portfolio with placeholder cards
5. **Insights** (#insights): Placeholder for future blog/articles
6. **Contact** (#contact): Email form, social icons, contact methods
7. **Footer**: Quick links, copyright, domain reference

## Common Tasks for AI Agents

### Adding New Projects

**Location**: `index.html` → Projects section (`id="projects"`)

**Template** (copy existing card):
```html
<div class="project-card" data-aos="fade-up" data-aos-delay="100">
    <div class="flex items-center justify-between mb-4">
        <i class="fab fa-github text-accent-purple text-3xl"></i>
        <span class="text-xs text-text-secondary">Public Repository</span>
    </div>
    <h3 class="text-xl font-semibold mb-3">[Project Title]</h3>
    <p class="text-text-secondary mb-4">[Description]</p>
    <div class="flex flex-wrap gap-2 mb-4">
        <span class="tech-tag">[Tech1]</span>
        <span class="tech-tag">[Tech2]</span>
    </div>
    <a href="[GitHub URL]" target="_blank" rel="noopener"
       class="inline-flex items-center text-accent-cyan hover:text-accent-teal transition-colors">
        View on GitHub <i class="fas fa-external-link-alt ml-2 text-sm"></i>
    </a>
</div>
```

### Updating Content

**Expertise domains**: Edit `index.html` → Expertise section → Update card content
**About section**: Edit `index.html` → About section → Update text/competencies
**Typing animation**: Edit `assets/js/typing.js` → strings array
**Colors**: Edit `assets/css/styles.css` → :root variables AND `index.html` → tailwind.config

### Adding New Features

**Navigation**: Update `assets/js/main.js` → initNavigation()
**Animations**: Use AOS attributes: `data-aos="fade-up"` `data-aos-delay="100"`
**Styling**: Prefer Tailwind utility classes, custom CSS only for complex effects
**Icons**: Use Font Awesome classes: `<i class="fas fa-icon-name"></i>`

## Design Principles

### Brand Guidelines
- **No personal names**: Only "Cognition Forge" brand identity
- **Professional tone**: Expertise-focused, not promotional
- **Dark theme**: Deep navy backgrounds (#0a0e27, #1a1f3a)
- **Gradient accents**: Cyan (#00d4ff), Teal (#00ffaa), Purple (#9b59b6), Orange (#ffa500)

### Code Style
- **HTML**: Semantic elements (nav, main, section, article, footer)
- **CSS**: Mobile-first, use Tailwind utilities, custom CSS for animations only
- **JavaScript**: ES6+, functional style, no jQuery, no frameworks
- **Accessibility**: ARIA labels, alt text, keyboard navigation, semantic structure

### Performance
- Lazy load images: `loading="lazy"`
- Optimize images: < 200KB each
- Minimize custom CSS/JS
- Use CDN for libraries
- Target: < 3s page load, Lighthouse 90+ scores

## Important Constraints

### DO NOT:
- ❌ Add build process (webpack, npm scripts, etc.)
- ❌ Introduce frameworks (React, Vue, Angular)
- ❌ Use TypeScript or JSX
- ❌ Add backend/API calls (except mailto)
- ❌ Expose personal information
- ❌ Use Node.js dependencies
- ❌ Add cookies or localStorage (GDPR)

### DO:
- ✅ Keep it simple and static
- ✅ Use pure HTML/CSS/JS
- ✅ Maintain single-page structure
- ✅ Preserve accessibility features
- ✅ Follow existing patterns
- ✅ Test across browsers/devices
- ✅ Document changes

## Testing Requirements

Before committing changes:

1. **Visual verification**: Open in browser, check all sections
2. **Responsive testing**: Test mobile (375px), tablet (768px), desktop (1920px)
3. **Navigation**: Click all nav links, verify smooth scroll
4. **Animations**: Scroll page, verify AOS animations trigger
5. **Forms**: Test contact form validation and mailto
6. **Accessibility**: Tab through page, check focus indicators
7. **Console**: No JavaScript errors in browser DevTools
8. **Performance**: Run Lighthouse audit, check scores

## Key Files to Read First

When starting work on this project, read in order:

1. **This file (CLAUDE.md)**: Project context and guidelines
2. **README.md**: User-facing setup and customization
3. **docs/PROJECT_SUMMARY.md**: Complete implementation details
4. **specs/PROJ-001-cognition-forge-homepage/requirements.md**: Business requirements
5. **specs/PROJ-001-cognition-forge-homepage/design.md**: Architecture and design decisions

## Common Scenarios

### Scenario: User asks to update expertise domains

1. Read current content in `index.html` → Expertise section
2. Identify which card to update (AI, Cloud, Trading, Enterprise)
3. Edit the `<ul>` list items within that card
4. Preserve existing structure and classes
5. Verify changes in browser

### Scenario: User asks to change colors

1. Edit `assets/css/styles.css` → :root variables
2. Edit `index.html` → `<script>` tag → tailwind.config.theme.extend.colors
3. Keep both in sync
4. Test contrast ratios for accessibility
5. Verify all sections look correct

### Scenario: User asks to add animation

1. Use AOS library: Add `data-aos="animation-type"` to element
2. Optional delay: `data-aos-delay="100"` (100ms increments)
3. Animation types: fade-up, fade-down, fade-left, fade-right, zoom-in
4. Test by scrolling in browser
5. No need to modify JavaScript

### Scenario: User asks to optimize performance

1. Check image sizes: `du -h assets/images/*.png`
2. Verify lazy loading: `grep 'loading="lazy"' index.html`
3. Run Lighthouse audit in Chrome DevTools
4. Address specific issues reported
5. Target: Performance 90+, Accessibility 95+, SEO 100

## Deployment Readiness Checklist

Before deployment, verify:
- [ ] All placeholder URLs updated (GitHub, LinkedIn)
- [ ] Real projects added to Projects section
- [ ] og-image.jpg created (1200x630px)
- [ ] Lighthouse audit passed (90/95/100 scores)
- [ ] Tested on mobile and desktop
- [ ] No console errors
- [ ] Contact form works
- [ ] All links open correctly

## Contact & Resources

**Email**: contact@cognition-forge.com
**Domain**: www.cognition-forge.com
**Server**: `python3 -m http.server 8000` (local testing)

**Documentation**:
- User guide: `README.md`
- Testing: `docs/TESTING.md`
- Deployment: `docs/DEPLOYMENT.md`
- Overview: `docs/PROJECT_SUMMARY.md`

**Specifications**:
- Requirements: `specs/PROJ-001-cognition-forge-homepage/requirements.md`
- Design: `specs/PROJ-001-cognition-forge-homepage/design.md`
- Tasks: `specs/PROJ-001-cognition-forge-homepage/tasks.md`

## AI Agent Tips

1. **Always read context first**: Understand the brand, constraints, and architecture
2. **Follow existing patterns**: Don't introduce new paradigms
3. **Test before committing**: Open in browser, verify changes work
4. **Preserve accessibility**: Maintain ARIA labels, semantic HTML, keyboard nav
5. **Keep it simple**: This is intentionally a static site, don't over-engineer
6. **Document changes**: Update relevant docs if adding features
7. **Ask before breaking changes**: Confirm with user before major modifications

## Version Info

- Project Version: 1.0.0
- Status: Production Ready
- Last Updated: October 31, 2024
- Git Commit: 8451f21

---

**For AI Agents**: This file is your starting point. Read it thoroughly before making any changes to ensure you understand the project context, constraints, and best practices.
