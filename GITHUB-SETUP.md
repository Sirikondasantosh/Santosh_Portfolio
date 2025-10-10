# 🚀 GitHub Setup Guide - Professional Portfolio

## ✅ Current Status:
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Professional profile photo added
- ✅ Portfolio ready for GitHub Pages

## 📋 Steps to Upload to GitHub:

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Repository name: `santosh-portfolio` or `santosh-sirikonda-portfolio`
4. Description: "Professional Portfolio - AI/ML Engineer & Full Stack Developer"
5. Set to **Public** (required for GitHub Pages)
6. **DO NOT** initialize with README (we already have files)
7. Click "Create repository"

### Step 2: Connect Local Repository to GitHub
Run these commands in your terminal:

```bash
cd /Users/santoshsirikonda/santosh-portfolio

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/santosh-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Live Portfolio
- Your portfolio will be available at: `https://YOUR_USERNAME.github.io/santosh-portfolio`
- It may take 5-10 minutes to deploy

## 📸 To Use Your Actual Profile Photo:

### Option 1: Replace Current Image
1. Save one of your professional headshots from the chat
2. Rename it to `profile-photo.jpg`
3. Replace the file in the portfolio folder
4. Commit and push changes:

```bash
git add profile-photo.jpg
git commit -m "Update profile photo"
git push origin main
```

### Option 2: Use Different Filename
1. Save your image as `santosh-photo.jpg`
2. Edit `index.html` line 94:
   ```html
   <img src="santosh-photo.jpg" alt="Santosh Sirikonda" id="profileImg">
   ```
3. Commit and push changes

## 🎯 What's Included:
- ✅ Professional portfolio website
- ✅ Profile photo with circular styling
- ✅ Career progression with technology evolution
- ✅ Skills map with 6 categories
- ✅ Compact projects section
- ✅ Responsive design for all devices
- ✅ Professional animations and effects

## 🔧 Customization:
- **Profile Photo**: Replace `profile-photo.jpg`
- **Contact Info**: Update in `index.html`
- **Projects**: Add your real projects
- **Certifications**: Add certification images
- **Colors**: Modify CSS variables in `style.css`

## 📱 Features:
- Modern glass morphism design
- Smooth animations and hover effects
- Mobile-responsive layout
- Professional color scheme
- Fast loading optimized images

Your professional portfolio is ready for GitHub! 🎉
