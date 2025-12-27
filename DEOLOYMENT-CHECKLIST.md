# 🚀 Andrea's Salumeria - Deployment Checklist

## Pre-Deployment

### ✅ Files Ready
- [ ] `index.html` - Main website file
- [ ] `styles.css` - Stylesheet
- [ ] `script.js` - JavaScript functionality
- [ ] `manifest.json` - PWA manifest
- [ ] `README.md` - Documentation
- [ ] `.gitignore` - Git ignore file
- [ ] All photos in `photos/` folder

### ✅ Photos Organized
- [ ] **Hero folder** (`photos/hero/`) - 8 images
  - hero1.jpg, hero2.jpg, hero3.jpg, hero4.jpg, hero5.jpg
  - herotray1.jpg, prosciuttodiparma.jpg, wassup.jpg
  
- [ ] **Gallery folder** (`photos/gallery/`) - 9 images
  - footerhero1.jpg, footerhero2.jpg, homemadepestopasta.jpg
  - saladtray1.jpg, tray1.jpg, tray2.jpg, tray3.jpg, tray4.jpg, tray5.jpg
  
- [ ] **Logo folder** (`photos/logo/`) - 2 images
  - andreas-header-light.png, andreas-header-dark.png

### ✅ Content Review
- [ ] Business hours are correct (Mon-Fri 8-6, Sat 8-5, Sun Closed)
- [ ] Phone number is correct: (201) 653-1666
- [ ] Address is correct: 247 Central Ave #A, Jersey City, NJ 07307
- [ ] Daily special is updated
- [ ] Soup of the day is updated
- [ ] All menu items are current

## GitHub Setup

### ✅ Repository Creation
1. [ ] Create new repository on GitHub
   - Name: `andreas-salumeria` (or your preferred name)
   - Public repository
   - Don't initialize with README (we have our own)

2. [ ] Copy repository URL

### ✅ Local Git Setup
```bash
# Navigate to your project folder
cd "C:\Users\dtuli\OneDrive\Documents\Andreas Slumeria"

# Initialize git (if not already done)
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Andrea's Salumeria website"

# Connect to GitHub (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/andreas-salumeria.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## GitHub Pages Configuration

### ✅ Enable GitHub Pages
1. [ ] Go to repository Settings
2. [ ] Click on "Pages" in left sidebar
3. [ ] Under "Source", select branch: `main`
4. [ ] Click "Save"
5. [ ] Wait 2-5 minutes for deployment
6. [ ] Your site will be at: `https://YOUR-USERNAME.github.io/andreas-salumeria/`

### ✅ Custom Domain (Optional)
If you want a custom domain like `www.andreassalumeria.com`:
1. [ ] Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. [ ] In GitHub Pages settings, add custom domain
3. [ ] Configure DNS records at your registrar:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```
4. [ ] Enable "Enforce HTTPS" in GitHub Pages settings

## Post-Deployment Updates

### ✅ Update URLs in Code
After you know your final URL, update these files:

**In `index.html`:**
- [ ] Line 18: Update OG image URL
  ```html
  <meta property="og:url" content="https://YOUR-ACTUAL-URL">
  ```
- [ ] Line 73: Update Schema.org URL
  ```json
  "url": "https://YOUR-ACTUAL-URL"
  ```

**Commit changes:**
```bash
git add index.html
git commit -m "Update URLs with actual GitHub Pages URL"
git push
```

## Testing

### ✅ Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### ✅ Responsive Testing
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667 - iPhone SE)
- [ ] Mobile (390x844 - iPhone 12/13/14)

### ✅ Functionality Testing
- [ ] All navigation links work
- [ ] Hero slideshow rotates
- [ ] Mobile menu opens/closes
- [ ] Gallery images load
- [ ] Google review button works
- [ ] All social media links work
- [ ] Map loads correctly
- [ ] Smooth scrolling works

### ✅ Performance Testing
- [ ] Google PageSpeed Insights (aim for 90+)
- [ ] All images load properly
- [ ] No console errors
- [ ] Fast load time (<3 seconds)

### ✅ SEO Testing
- [ ] Google Search Console verification
- [ ] Submit sitemap (optional)
- [ ] Meta tags showing correctly when sharing on social media
- [ ] Google Business Profile linked to website

## Maintenance

### Daily/Weekly Updates
- [ ] Update "Special of the Day" in index.html
- [ ] Update "Soup of the Day" in index.html
- [ ] Commit and push changes:
  ```bash
  git add index.html
  git commit -m "Update daily specials"
  git push
  ```

### Add New Photos
1. [ ] Optimize images (recommended: <500KB each)
2. [ ] Add to appropriate folder (hero or gallery)
3. [ ] Update `index.html` (for hero) or `script.js` (for gallery)
4. [ ] Commit and push:
   ```bash
   git add .
   git commit -m "Add new photos"
   git push
   ```

## Marketing & Promotion

### ✅ Share Your Website
- [ ] Add to Google Business Profile
- [ ] Update Instagram bio link
- [ ] Share on Facebook page
- [ ] Update Yelp listing
- [ ] Print QR code for in-store display
- [ ] Add to business cards
- [ ] Email to regular customers

### ✅ SEO Improvements
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google Business Profile posts linking to website
- [ ] Get customers to leave reviews mentioning website
- [ ] Create social media posts linking to specific menu items

## Support

### ✅ Get Help
- **GitHub Issues**: Create an issue if something's not working
- **GitHub Discussions**: Ask questions about customization
- **Documentation**: Check README.md for common tasks

## Quick Reference Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes (if working from multiple computers)
git pull

# View commit history
git log --oneline

# Create a backup branch
git branch backup-YYYY-MM-DD
```

---

## 🎉 Launch Day!

When everything is checked off:
1. Share the website URL on social media
2. Email customers
3. Update all business listings
4. Print QR codes for in-store
5. Celebrate! 🇮🇹🥪🧀

**Your website will be live at:**
`https://YOUR-USERNAME.github.io/andreas-salumeria/`

---

*Last updated: December 2024*
