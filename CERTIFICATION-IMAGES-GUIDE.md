# Certification Images Guide

## How to Add Your Certification Images

### Step 1: Prepare Your Certification Images
1. **Download your certification badges/certificates** from:
   - AWS Certification Portal
   - Kubernetes Certification Portal
   - Microsoft Learn Portal
2. **Recommended image specifications:**
   - Format: PNG or JPG
   - Size: 300x200 pixels or similar aspect ratio
   - File size: Under 100KB for faster loading

### Step 2: Add Images to Your Portfolio
1. **Create an `images` folder** in your portfolio directory
2. **Save your certification images** with descriptive names:
   ```
   images/
   ├── aws-devops-professional.png
   ├── aws-developer-associate.png
   ├── aws-cloud-practitioner.png
   ├── kubernetes-administrator.png
   ├── kubernetes-application-developer.png
   ├── azure-administrator.png
   └── azure-fundamentals.png
   ```

### Step 3: Update the HTML
Replace the placeholder divs with actual images:

**Example for AWS DevOps Professional:**
```html
<!-- Replace this placeholder -->
<div class="cert-image-placeholder">
    <div class="placeholder-icon">📜</div>
    <p>Certification Image</p>
</div>

<!-- With this actual image -->
<img src="images/aws-devops-professional.png" 
     alt="AWS Certified DevOps Engineer Professional" 
     class="cert-image">
```

### Step 4: Add CSS for Images (if needed)
Add this CSS to your `style.css` file:
```css
.cert-image {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}

.cert-image:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

### Step 5: Verify Your Changes
1. Open your portfolio in a web browser
2. Navigate to the Certifications section
3. Verify that all images load correctly
4. Test the hover effects and responsiveness

### Certification Links (Optional)
You can also add verification links to your certifications:

```html
<div class="cert-details">
    <span class="cert-date">2023</span>
    <a href="https://www.credly.com/badges/your-badge-id" 
       target="_blank" 
       class="cert-status verified">
        View Badge
    </a>
</div>
```

### Pro Tips:
- **Use high-quality images** for professional appearance
- **Optimize file sizes** for faster loading
- **Add alt text** for accessibility
- **Test on mobile devices** to ensure responsiveness
- **Keep backup copies** of your original certification files

### Troubleshooting:
- **Images not loading?** Check file paths and names
- **Images too large?** Resize them using image editing software
- **Layout broken?** Ensure consistent image dimensions
- **Slow loading?** Compress images using online tools like TinyPNG

---

**Note:** Always ensure you have permission to use these certification images and badges according to the respective platform's terms of service.
