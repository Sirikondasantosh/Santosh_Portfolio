# 🖼️ GitHub Images Guide - Display Images from GitHub

## 📋 **Method 1: Direct GitHub Image URLs**

### How to Get GitHub Image URLs:
1. **Upload image** to your GitHub repository
2. **Right-click** on the image in GitHub
3. **Copy image address** or **copy link**
4. **Use the URL** in your HTML

### GitHub Image URL Format:
```
https://raw.githubusercontent.com/USERNAME/REPOSITORY/BRANCH/PATH/TO/IMAGE.jpg
```

### Example:
```html
<img src="https://raw.githubusercontent.com/santoshsirikonda/santosh-portfolio/main/profile-photo.jpg" alt="Santosh Sirikonda">
```

## 🔧 **Method 2: Update HTML to Use GitHub Images**

### Step 1: Upload Image to GitHub
1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Upload your profile photo
4. Commit the changes

### Step 2: Get the Raw URL
1. Click on the uploaded image in GitHub
2. Right-click → "Copy image address"
3. The URL will look like: `https://raw.githubusercontent.com/USERNAME/REPO/main/FILENAME.jpg`

### Step 3: Update HTML
Replace the current image source in `index.html`:

```html
<!-- Current -->
<img src="profile-photo.jpg" alt="Santosh Sirikonda" id="profileImg">

<!-- Updated to use GitHub URL -->
<img src="https://raw.githubusercontent.com/santoshsirikonda/santosh-portfolio/main/profile-photo.jpg" alt="Santosh Sirikonda" id="profileImg">
```

## 🚀 **Method 3: Multiple Images (Certifications, Projects)**

### For Certification Images:
```html
<div class="cert-image">
    <img src="https://raw.githubusercontent.com/USERNAME/REPO/main/certifications/aws-certified.jpg" alt="AWS Certified">
</div>
```

### For Project Images:
```html
<div class="project-image">
    <img src="https://raw.githubusercontent.com/USERNAME/REPO/main/projects/ai-project.jpg" alt="AI Project">
</div>
```

## 📁 **Recommended Folder Structure:**
```
santosh-portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── profile-photo.jpg
│   ├── certifications/
│   │   ├── aws-certified.jpg
│   │   ├── azure-certified.jpg
│   │   └── kubernetes-certified.jpg
│   └── projects/
│       ├── ai-project.jpg
│       ├── web-app.jpg
│       └── data-pipeline.jpg
```

## 🔄 **Updating Your Current Portfolio:**

### Quick Update Script:
```bash
# After uploading images to GitHub, update the HTML
sed -i 's|src="profile-photo.jpg"|src="https://raw.githubusercontent.com/USERNAME/REPO/main/profile-photo.jpg"|g' index.html
```

### Manual Update:
1. Find the image tag in `index.html` (around line 94)
2. Replace `src="profile-photo.jpg"` with your GitHub raw URL
3. Commit and push changes

## ✅ **Benefits of GitHub Images:**
- **Always Available**: Images hosted on GitHub's CDN
- **Version Control**: Images are versioned with your code
- **Direct Access**: No need to download files locally
- **Reliable**: GitHub's infrastructure ensures uptime
- **Free**: No additional hosting costs

## 🎯 **Best Practices:**
1. **Optimize Images**: Compress before uploading (use tools like TinyPNG)
2. **Descriptive Names**: Use clear filenames (e.g., `aws-certified-developer.jpg`)
3. **Organize Folders**: Keep images in logical folders
4. **Consistent Sizing**: Maintain consistent image dimensions
5. **Alt Text**: Always include descriptive alt attributes

## 🔧 **Troubleshooting:**
- **Image Not Loading**: Check if the GitHub URL is correct
- **Slow Loading**: Optimize image file size
- **Broken Links**: Ensure repository is public for GitHub Pages
- **CORS Issues**: GitHub raw URLs work well with GitHub Pages

## 📱 **Mobile Optimization:**
```css
/* Responsive images */
.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

/* For different screen sizes */
@media (max-width: 768px) {
    .profile-image {
        width: 80px;
        height: 80px;
    }
}
```

This approach ensures your images are always available and properly displayed across all devices!
