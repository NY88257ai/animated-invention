# Andrea's Salumeria - Official Website

Fine Italian Deli & Grocer serving Jersey City since 1975.

## 🇮🇹 About

Andrea's Salumeria is a family-owned Italian deli and grocer known for:
- Homemade mozzarella made fresh daily
- Classic Italian sandwiches
- Fine deli meats and artisan cheeses
- Imported Italian specialties
- Catering services

## 🚀 Setup for GitHub Pages

### 1. Create Repository
```bash
# Create a new repository on GitHub named: andreas-salumeria
# Then clone it locally:
git clone https://github.com/YOUR-USERNAME/andreas-salumeria.git
cd andreas-salumeria
```

### 2. Add Files
Copy all files from this project into your repository:
```
andreas-salumeria/
├── index.html
├── styles.css
├── script.js
├── manifest.json
├── README.md
└── photos/
    ├── hero/
    │   ├── hero1.jpg
    │   ├── hero2.jpg
    │   ├── hero3.jpg
    │   ├── hero4.jpg
    │   ├── hero5.jpg
    │   ├── herotray1.jpg
    │   ├── prosciuttodiparma.jpg
    │   └── wassup.jpg
    ├── gallery/
    │   ├── footerhero1.jpg
    │   ├── footerhero2.jpg
    │   ├── homemadepestopasta.jpg
    │   ├── saladtray1.jpg
    │   ├── tray1.jpg
    │   ├── tray2.jpg
    │   ├── tray3.jpg
    │   ├── tray4.jpg
    │   └── tray5.jpg
    └── logo/
        ├── andreas-header-light.png
        └── andreas-header-dark.png
```

### 3. Push to GitHub
```bash
git add .
git commit -m "Initial commit - Andrea's Salumeria website"
git push origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/andreas-salumeria/`

### 5. Update Links (Important!)
After deploying, update the following in `index.html`:
- Line 18: Change `content` URL to your actual GitHub Pages URL
- Line 73: Update Schema.org `url` to your GitHub Pages URL

## 📱 Features

### ✅ Fully Responsive
- Mobile-first design
- Responsive navigation with hamburger menu
- Optimized for all screen sizes

### ✅ Performance Optimized
- Lazy loading for gallery images
- Optimized image delivery
- Smooth animations and transitions

### ✅ SEO Ready
- Meta tags for search engines
- Open Graph tags for social media
- Schema.org structured data
- Semantic HTML5

### ✅ Accessibility
- ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

### ✅ Progressive Web App (PWA)
- Can be installed on mobile devices
- Works offline (basic functionality)
- Manifest file included

## 🎨 Customization

### Update Daily Specials
Edit `index.html` around line 110:
```html
<strong>Homemade Chicken Cutlet Sandwich</strong><br>
Served with roasted peppers, fresh mozzarella, and balsamic drizzle.
```

### Update Soup of the Day
Edit `index.html` around line 125:
```html
<strong>Pasta Fagioli</strong><br>
A hearty Italian classic made with love.
```

### Change Colors
Edit `styles.css` CSS variables:
```css
:root {
  --color-primary: #7b1b1b;      /* Main red color */
  --color-primary-dark: #5b1414; /* Darker red */
  --color-accent: #4b5a2a;       /* Green accent */
  --color-cream: #f7f1e3;        /* Background */
  --color-text: #2b1b0f;         /* Text color */
}
```

### Add More Gallery Photos
1. Add images to `photos/gallery/` folder
2. Edit `script.js` around line 90 to add new entries:
```javascript
const galleryImages = [
  { src: "photos/gallery/your-image.jpg", alt: "Description here" },
  // ... add more
];
```

### Add More Hero Slides
1. Add images to `photos/hero/` folder
2. Edit `index.html` around line 90 to add new slides:
```html
<div class="hero-slide" style="background-image: url('photos/hero/new-image.jpg')"></div>
```

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **Vanilla JavaScript** - No frameworks needed
- **Google Fonts** - Playfair Display & Lato
- **Progressive Web App** - Manifest.json

## 📞 Contact Information

**Andrea's Salumeria**  
247 Central Ave #A  
Jersey City, NJ 07307  
Phone: (201) 653-1666

**Hours:**
- Monday–Friday: 8:00 AM – 6:00 PM
- Saturday: 8:00 AM – 5:00 PM
- Sunday: Closed

## 📄 License

© 2024 Andrea's Salumeria. All rights reserved.

## 🙏 Credits

Website designed and developed for Andrea's Salumeria - A Jersey City tradition since 1975.

---

**Need help?** Contact the website developer or create an issue in this repository.
