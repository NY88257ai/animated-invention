# 📝 Quick Update Guide - Andrea's Salumeria

## Daily Updates (5 minutes)

### Update Today's Special
**File:** `index.html` (around line 110)

```html
<!-- FIND THIS SECTION: -->
<div class="card-body">
  <strong>Homemade Chicken Cutlet Sandwich</strong><br>
  Served with roasted peppers, fresh mozzarella, and balsamic drizzle.
</div>

<!-- CHANGE TO: -->
<div class="card-body">
  <strong>YOUR NEW SPECIAL NAME</strong><br>
  Description of the special.
</div>
```

### Update Soup of the Day
**File:** `index.html` (around line 125)

```html
<!-- FIND THIS SECTION: -->
<div class="card-body">
  <strong>Pasta Fagioli</strong><br>
  A hearty Italian classic made with love.
</div>

<!-- CHANGE TO: -->
<div class="card-body">
  <strong>YOUR SOUP NAME</strong><br>
  Description of the soup.
</div>
```

### Save Changes
```bash
# 1. Open terminal/command prompt
# 2. Navigate to your project folder
cd "C:\Users\dtuli\OneDrive\Documents\Andreas Slumeria"

# 3. Save changes to GitHub
git add index.html
git commit -m "Update daily specials - [Today's Date]"
git push
```

Your website will update automatically in 1-2 minutes!

---

## Add New Photos (10 minutes)

### For Gallery Photos
1. **Add photo** to `photos/gallery/` folder
2. **Name it** something descriptive (e.g., `meatball-sub-december.jpg`)
3. **Edit** `script.js` around line 90:

```javascript
const galleryImages = [
  // ... existing images ...
  { src: "photos/gallery/meatball-sub-december.jpg", alt: "Andrea's Salumeria - Meatball sub special" },
];
```

4. **Save and push:**
```bash
git add .
git commit -m "Add new gallery photo"
git push
```

### For Hero Slideshow
1. **Add photo** to `photos/hero/` folder
2. **Edit** `index.html` around line 90:

```html
<!-- Add new slide inside <div class="hero-slides"> -->
<div class="hero-slide" style="background-image: url('photos/hero/your-new-photo.jpg')"></div>
```

3. **Save and push:**
```bash
git add .
git commit -m "Add new hero image"
git push
```

---

## Update Menu Items (15 minutes)

### Add New Sandwich
**File:** `index.html` - Find the appropriate section (Classic Cuts, Italian Heroes, etc.)

```html
<!-- Add to the menu-items list: -->
<li>
  <span class="menu-item-name">New Sandwich Name</span>
  <div class="menu-item-desc">Description here (optional)</div>
</li>
```

### Remove Menu Item
Just delete the `<li>...</li>` block for that item.

### Change Prices
Currently prices aren't displayed. To add prices:

```html
<li>
  <span class="menu-item-name">Sandwich Name</span>
  <span class="menu-item-price">$12.99</span>
  <div class="menu-item-desc">Description</div>
</li>
```

Then add to `styles.css`:
```css
.menu-item-price {
  float: right;
  font-weight: 600;
  color: var(--color-primary);
}
```

---

## Update Business Hours

**File:** `index.html` (around line 480)

```html
<div class="info-value visit-hours">
  Monday – Friday: 8:00 AM – 6:00 PM<br>
  Saturday: 8:00 AM – 5:00 PM<br>
  Sunday: Closed
</div>
```

**Also update Schema.org data** (around line 45):
```json
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  ...
]
```

---

## Seasonal Changes

### Add Holiday Banner
**File:** `index.html` (add after header, before hero)

```html
<div class="holiday-banner">
  🎄 Holiday Hours: Closed Christmas Day | Call ahead for catering orders! 🎄
</div>
```

**File:** `styles.css` (add styling)

```css
.holiday-banner {
  background: #d22d2b;
  color: white;
  text-align: center;
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
}
```

### Summer/Winter Menu Changes
Simply comment out seasonal items:

```html
<!-- Winter only - uncomment in September
<li>
  <span class="menu-item-name">Hot Soup Special</span>
</li>
-->

<!-- Summer only - uncomment in May
<li>
  <span class="menu-item-name">Mediterranean Pesto Salad</span>
</li>
-->
```

---

## Emergency Updates

### Temporarily Closed
Add this banner at the top of the page:

```html
<div style="background: #d22d2b; color: white; text-align: center; padding: 1.5rem; font-size: 1.1rem; font-weight: bold;">
  ⚠️ TEMPORARILY CLOSED - Reopening [DATE] ⚠️
</div>
```

### Change Phone Number
**Find and replace** throughout `index.html`:
- Search: `(201) 653-1666`
- Replace with new number
- Update in multiple places (contact section, footer, schema.org)

---

## Common Git Commands

```bash
# Check what files you changed
git status

# See exactly what changed
git diff

# Add all changes
git add .

# Add specific file
git add index.html

# Commit with message
git commit -m "Your update description"

# Push to GitHub (make live)
git push

# Undo last commit (before pushing)
git reset HEAD~1

# Discard all local changes (be careful!)
git checkout .

# Pull latest changes from GitHub
git pull
```

---

## Testing Your Changes

### Before Pushing
1. Open `index.html` in your browser locally
2. Check that changes look correct
3. Test on mobile (use browser dev tools)
4. No errors in browser console (F12)

### After Pushing
1. Wait 1-2 minutes for GitHub Pages to update
2. Visit your live site
3. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
4. Verify changes appear correctly

---

## Troubleshooting

### Changes Not Showing?
1. **Hard refresh** the page (Ctrl+F5)
2. **Clear browser cache**
3. **Check GitHub Actions** tab - make sure deployment succeeded
4. **Wait 2-3 minutes** - GitHub Pages isn't instant

### Git Push Failed?
```bash
# Pull changes first
git pull

# Then try push again
git push
```

### Made a Mistake?
```bash
# Undo last commit (if not pushed yet)
git reset HEAD~1

# Restore specific file to last committed version
git checkout index.html

# See commit history
git log --oneline

# Go back to specific commit
git checkout COMMIT-HASH
```

### Need Help?
1. Check the error message carefully
2. Google the exact error message
3. Check GitHub repository "Issues" tab
4. Contact your web developer

---

## Monthly Maintenance Checklist

- [ ] Update daily specials archive (keep a list)
- [ ] Add new photos to gallery
- [ ] Check all links still work
- [ ] Update seasonal menu items
- [ ] Review and respond to customer feedback
- [ ] Check Google Analytics (if set up)
- [ ] Backup photos to external drive

---

## 💡 Pro Tips

1. **Always test locally** before pushing to live site
2. **Write clear commit messages** so you know what you changed
3. **Backup photos** regularly to external drive
4. **Keep a change log** of major updates
5. **Ask for help early** - don't struggle alone!

---

**Questions?** Check README.md or contact your developer!
