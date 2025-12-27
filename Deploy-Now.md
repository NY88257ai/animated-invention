# 🚀 Deploy to GitHub Pages - animated-invention

## Your Website Will Be Live At:
**https://ny88257ai.github.io/animated-invention/**

---

## Quick Deployment Steps

### 1. Open Command Prompt or PowerShell

Press `Win + R`, type `cmd`, press Enter

### 2. Navigate to Your Project Folder

```bash
cd "C:\Users\dtuli\OneDrive\Documents\Andreas Slumeria"
```

### 3. Initialize Git (if not already done)

```bash
git init
```

### 4. Add All Files

```bash
git add .
```

### 5. Create First Commit

```bash
git commit -m "Initial commit - Andrea's Salumeria website"
```

### 6. Connect to Your GitHub Repository

```bash
git remote add origin https://github.com/NY88257ai/animated-invention.git
```

If you get an error saying "remote origin already exists", run:
```bash
git remote set-url origin https://github.com/NY88257ai/animated-invention.git
```

### 7. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**Note:** You may be asked for your GitHub credentials:
- Username: `NY88257ai`
- Password: Use a Personal Access Token (see below if you don't have one)

### 8. Enable GitHub Pages (if not already enabled)

1. Go to: https://github.com/NY88257ai/animated-invention
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 9. Wait and Visit Your Site!

- Wait 2-5 minutes for deployment
- Visit: **https://ny88257ai.github.io/animated-invention/**
- Hard refresh with `Ctrl + F5` if needed

---

## 🔑 Need a Personal Access Token?

GitHub requires a token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click: **Generate new token** → **Generate new token (classic)**
3. Name it: `Website Deploy`
4. Select scopes: Check `repo` (all boxes under it)
5. Click: **Generate token**
6. **COPY THE TOKEN** (you won't see it again!)
7. Use this token as your password when Git asks

---

## 📝 After Initial Deployment

### Update Daily Specials

Edit `index.html` and change lines 110 and 125, then:

```bash
git add index.html
git commit -m "Update daily specials"
git push
```

Wait 1-2 minutes and your site updates automatically!

### Add New Photos

1. Add photos to `photos/gallery/` or `photos/hero/`
2. Update the appropriate file (see QUICK-UPDATE-GUIDE.md)
3. Run:
```bash
git add .
git commit -m "Add new photos"
git push
```

---

## ✅ Checklist

- [ ] Files downloaded and in correct folders
- [ ] Photos organized in photos/ folder
- [ ] Git initialized
- [ ] Files committed
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live at https://ny88257ai.github.io/animated-invention/
- [ ] Tested on mobile
- [ ] Daily specials updated
- [ ] Shared on social media!

---

## 🆘 Troubleshooting

### "Git is not recognized"
Install Git: https://git-scm.com/download/win

### "Permission denied (publickey)"
You need a Personal Access Token (see above)

### "Failed to push some refs"
Run: `git pull origin main --rebase` then `git push`

### Site shows 404
1. Check Settings → Pages is enabled
2. Make sure branch is `main` not `master`
3. Wait 5 minutes
4. Hard refresh: Ctrl+F5

### Images not showing
1. Check photo filenames match exactly (case-sensitive!)
2. Make sure photos are in the correct folders
3. Check browser console (F12) for errors

---

## 📞 Quick Help

**Repository:** https://github.com/NY88257ai/animated-invention
**Live Site:** https://ny88257ai.github.io/animated-invention/
**Check Deployment:** https://github.com/NY88257ai/animated-invention/actions

---

## 🎉 You're Almost There!

Just run the commands above and your beautiful website will be live in minutes!

**Questions?** Check the README.md or QUICK-UPDATE-GUIDE.md files.

