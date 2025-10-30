# Cognition Forge - Professional Homepage

A professional homepage showcasing 20+ years of expertise in AI governance, agentic AI systems, trading platforms, and cloud architecture.

**Live at:** www.cognition-forge.com
**Contact:** contact@cognition-forge.com

## Features

- Modern dark theme with gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations and typing effects
- WCAG 2.1 AA accessible
- Pure HTML/CSS/JS - no build process required

## Quick Start

### 1. Local Development

```bash
# Clone and navigate to directory
git clone <repository-url>
cd Cognition

# Start local server (choose one)
python3 -m http.server 8000
# or
php -S localhost:8000
# or
npx http-server -p 8000

# Open http://localhost:8000 in browser
```

### 2. Customize Content

**Update Your Links:**
- Open `index.html`
- Search for `https://github.com` and replace with your GitHub profile
- Search for `https://linkedin.com` and replace with your LinkedIn profile

**Add Your Projects:**
- In `index.html`, find the Projects section (`id="projects"`)
- Copy an existing project card template
- Update: title, description, tech tags, and GitHub link

**Modify Typing Animation:**
- Edit `assets/js/typing.js`
- Update the `strings` array with your specializations

### 3. Deploy

**GitHub Pages** (Recommended)
1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/` root
3. Site goes live at `https://username.github.io/repo-name/`

**Other Options:**
- **Netlify**: Drag and drop project folder at netlify.com
- **Vercel**: Run `vercel --prod` in project directory

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## Project Structure

```
/
├── index.html              # Main page
├── assets/
│   ├── css/styles.css     # Custom styles
│   ├── js/                # Navigation & animations
│   └── images/            # Logo and avatar
├── docs/                   # Deployment, testing, project summary
└── specs/                  # Requirements, design, tasks
```

## Customization

### Colors
Edit `assets/css/styles.css` `:root` variables:
```css
--color-bg-primary: #0a0e27;
--color-accent-cyan: #00d4ff;
--color-accent-teal: #00ffaa;
/* ... */
```
Also update matching values in `index.html` `<head>` → `tailwind.config`

### Content
All content is in `index.html` - edit directly:
- Hero section: Logo, tagline, CTA buttons
- About section: Overview and competencies
- Expertise section: Domain cards
- Projects section: Portfolio items
- Contact section: Social links and form

## Technology

- HTML5, CSS3, Vanilla JavaScript
- Tailwind CSS (CDN)
- Font Awesome icons (CDN)
- AOS animations (CDN)
- Google Fonts - Inter (CDN)

## Browser Support

Chrome, Firefox, Safari, Edge (last 2 versions) and mobile browsers.

## Documentation

- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment guide
- [docs/TESTING.md](docs/TESTING.md) - Testing checklist
- [docs/PROJECT_SUMMARY.md](docs/PROJECT_SUMMARY.md) - Complete overview
- [CLAUDE.md](CLAUDE.md) - AI agent instructions

## License

© 2024 Cognition Forge. All rights reserved.

---

Built with ❤️ and Cognition
