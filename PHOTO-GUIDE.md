# How to Add Your LinkedIn Profile Photo

Follow these simple steps to add your professional photo from LinkedIn to your portfolio:

## Method 1: Download from LinkedIn (Recommended)

### Step 1: Get Your LinkedIn Photo
1. Go to your LinkedIn profile: https://www.linkedin.com/in/santosh-sirikonda-1ab988246/
2. Click on your profile photo
3. Click the three dots (•••) or "Download" option
4. Save the image to your computer

### Step 2: Prepare the Photo
1. **Recommended specifications:**
   - **Size:** 400x400 pixels (minimum)
   - **Format:** JPG or PNG
   - **File size:** Under 500KB for fast loading
   - **Background:** Professional (solid color or blurred background works best)

2. **Optional: Edit/Crop the photo:**
   - Use online tools like:
     - [Canva](https://www.canva.com) - Free online editor
     - [Remove.bg](https://www.remove.bg) - Remove background
     - [Squoosh](https://squoosh.app) - Compress image

### Step 3: Add to Your Portfolio
1. Rename your photo to `profile-photo.jpg` or `profile-photo.png`
2. Place it in the `/Users/santoshsirikonda/santosh-portfolio/` folder (same folder as `index.html`)
3. The portfolio will automatically display it!

## Method 2: Use LinkedIn Photo URL (Quick Method)

### Step 1: Get the LinkedIn Photo URL
1. Go to your LinkedIn profile
2. Right-click on your profile photo
3. Select "Copy Image Address" or "Copy Image URL"

### Step 2: Update HTML
1. Open `index.html` in a text editor
2. Find this line (around line 46):
   ```html
   <img src="profile-photo.jpg" alt="Santosh Sirikonda" class="hero-image" id="heroImage">
   ```
3. Replace with:
   ```html
   <img src="YOUR_LINKEDIN_PHOTO_URL" alt="Santosh Sirikonda" class="hero-image" id="heroImage">
   ```

## Method 3: Screenshot Method (If Download Not Available)

1. Go to your LinkedIn profile
2. Take a screenshot of your profile photo
3. Crop to include only your photo
4. Save as `profile-photo.jpg`
5. Place in the portfolio folder

## Troubleshooting

### Photo Not Showing?
- **Check file name:** Must be exactly `profile-photo.jpg` or `profile-photo.png`
- **Check location:** File must be in the same folder as `index.html`
- **Check browser:** Try refreshing the page (Cmd+R on Mac, Ctrl+R on Windows)
- **Check file format:** Use JPG or PNG format only

### Photo Shows But Looks Blurry?
- Use a higher resolution image (at least 400x400 pixels)
- Download the full-resolution version from LinkedIn

### Photo Too Large (Slow Loading)?
- Compress the image using [Squoosh](https://squoosh.app)
- Aim for under 500KB file size

## Tips for Best Results

✅ **DO:**
- Use a professional, high-quality photo
- Ensure good lighting in the photo
- Use a recent photo that represents you well
- Crop to show your face clearly
- Use a neutral or professional background

❌ **DON'T:**
- Use blurry or low-resolution photos
- Use casual or unprofessional photos
- Use group photos
- Use photos with distracting backgrounds

## Need Help?

If you're still having trouble:
1. Make sure the file is in the correct location
2. Check the browser console for errors (F12 key)
3. Try using a different image format (JPG vs PNG)
4. Verify the file name matches exactly

---

**Current Photo Status:** Placeholder showing  
**Action Required:** Add your `profile-photo.jpg` to the portfolio folder

Once you add your photo, refresh the page and it will appear automatically with a beautiful animated border!

