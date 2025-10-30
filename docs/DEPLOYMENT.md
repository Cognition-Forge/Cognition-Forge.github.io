# Deployment Checklist

Before deploying to production, complete this checklist.

## Pre-Deployment

### Content Updates

- [ ] Update all GitHub links with your actual GitHub profile URL
  - Hero section GitHub button
  - Contact section GitHub icon
  - Projects section "View All Projects" button
  - Individual project card links

- [ ] Update LinkedIn URL in Contact section
  - Replace `https://linkedin.com` with your actual profile

- [ ] Add your actual project repositories
  - Edit Projects section in `index.html`
  - Replace placeholder projects with real ones
  - Update project names, descriptions, and tech stacks

- [ ] Create og-image.jpg for social sharing
  - Follow instructions in `assets/images/og-image-placeholder.md`
  - Size: 1200x630px
  - Save as `assets/images/og-image.jpg`

### Domain Configuration

If using custom domain (www.cognition-forge.com):

- [ ] Verify domain ownership
- [ ] Configure DNS records:
  - A record pointing to hosting IP
  - CNAME record for www subdomain
- [ ] Update HTTPS/SSL certificate
- [ ] Test domain resolves correctly

### File Verification

- [ ] All images exist and load:
  - `assets/images/logo.png` ✓
  - `assets/images/avatar.png` ✓
  - `assets/images/og-image.jpg` (create this)

- [ ] All JavaScript files present:
  - `assets/js/main.js` ✓
  - `assets/js/typing.js` ✓

- [ ] All CSS files present:
  - `assets/css/styles.css` ✓

### Performance Optimization

- [ ] Run Lighthouse audit (Chrome DevTools)
  - Performance score: 90+
  - Accessibility score: 95+
  - SEO score: 100

- [ ] Check page load time
  - Target: < 3 seconds on 3G connection
  - Use: Chrome DevTools Network tab (throttling)

- [ ] Verify image optimization
  - Logo: ~176KB ✓
  - Avatar: ~152KB ✓
  - Total page weight: < 2MB

- [ ] Test CDN resources load
  - Tailwind CSS
  - Font Awesome
  - AOS library
  - Google Fonts

### Security Checks

- [ ] All external links have `rel="noopener"` ✓
- [ ] No sensitive information in code
- [ ] No API keys or credentials exposed
- [ ] HTTPS enabled (after deployment)

### Browser Testing

Test in these browsers:
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (if available)
- [ ] Edge (latest version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Responsive Testing

Test these viewport sizes:
- [ ] Desktop: 1920px, 1440px, 1280px
- [ ] Tablet: 1024px, 768px
- [ ] Mobile: 414px, 375px, 320px

## Deployment Steps

### GitHub Pages

1. **Create GitHub repository**
   ```bash
   git add .
   git commit -m "Initial commit: Cognition Forge homepage"
   git branch -M main
   git remote add origin https://github.com/yourusername/cognition-forge.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

3. **Verify deployment**
   - Wait 1-2 minutes
   - Visit: https://yourusername.github.io/cognition-forge/
   - Test all functionality

### Netlify

1. **Deploy via drag-and-drop**
   - Go to netlify.com
   - Drag project folder to deployment area
   - Wait for deployment to complete

2. **Configure custom domain** (if applicable)
   - Site settings → Domain management
   - Add custom domain: www.cognition-forge.com
   - Configure DNS as instructed
   - Enable HTTPS (automatic)

3. **Verify deployment**
   - Visit Netlify URL
   - Test all functionality
   - Verify custom domain (if configured)

### Vercel

1. **Deploy via CLI or dashboard**
   ```bash
   npx vercel --prod
   ```
   Or use Vercel dashboard drag-and-drop

2. **Configure domain**
   - Project settings → Domains
   - Add www.cognition-forge.com
   - Configure DNS

3. **Verify deployment**
   - Visit deployment URL
   - Test all functionality

## Post-Deployment

### Final Verification

- [ ] Visit live site and test all features
- [ ] Test contact form mailto functionality
- [ ] Verify all navigation links work
- [ ] Test mobile hamburger menu
- [ ] Verify typing animation works
- [ ] Test scroll animations
- [ ] Check all external links open correctly

### SEO and Social

- [ ] Test Open Graph tags
  - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
  - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
  - Twitter Card Validator: https://cards-dev.twitter.com/validator

- [ ] Submit to search engines
  - Google Search Console: https://search.google.com/search-console
  - Bing Webmaster Tools: https://www.bing.com/webmasters

- [ ] Create sitemap.xml (optional)
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.cognition-forge.com/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

### Analytics (Optional)

- [ ] Add Google Analytics
- [ ] Add Plausible Analytics
- [ ] Configure tracking (respect GDPR/privacy)

### Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure status page (optional)
- [ ] Set up error tracking (Sentry, LogRocket)

## Maintenance

### Regular Tasks

**Monthly:**
- Review analytics and visitor behavior
- Update project portfolio with new work
- Check for broken links
- Update content as needed

**Quarterly:**
- Run Lighthouse audits
- Update dependencies (if any)
- Review browser compatibility
- Optimize images if site grows

**Annually:**
- Review overall design and content
- Update copyright year in footer
- Consider design refresh if needed

## Rollback Plan

If issues occur after deployment:

1. **GitHub Pages:**
   - Revert commit: `git revert HEAD`
   - Push: `git push`
   - Wait for redeployment

2. **Netlify/Vercel:**
   - Go to Deployments
   - Select previous working deployment
   - Click "Publish deploy"

## Support Resources

- **HTML/CSS Issues**: MDN Web Docs (developer.mozilla.org)
- **Tailwind CSS**: tailwindcss.com/docs
- **Font Awesome**: fontawesome.com/icons
- **AOS Library**: michalsnik.github.io/aos/

## Deployment Checklist Complete?

- [ ] All pre-deployment items checked
- [ ] Deployment successful
- [ ] Post-deployment verification complete
- [ ] Monitoring configured
- [ ] Documentation updated

**Deployment Date:** ________________
**Deployed By:** ________________
**Live URL:** ________________
**Status:** ✓ Live / ⚠ Issues / ✗ Failed
**Notes:** ________________
