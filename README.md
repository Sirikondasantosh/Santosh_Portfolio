# Santosh Sirikonda - AI/ML Engineer Portfolio 🚀

A bright, compact, and visually impressive portfolio website showcasing the professional experience, skills, and projects of Santosh Sirikonda - AI/ML Engineer, Full Stack Developer, MLOps Specialist, and Data Engineer.

## ✨ Features

### 🎨 Visual Design
- **Vibrant Professional Color Palette**: Beautiful gradients and color schemes
- **Animated Background**: Floating gradient shapes with parallax effects
- **Glass Morphism**: Modern frosted glass effects on navigation
- **Smooth Animations**: Fade-ins, slide-ins, and hover effects throughout
- **3D Card Effects**: Interactive tilt effects on project cards
- **Responsive Design**: Perfectly adapts to all screen sizes

### 🖼️ Hero Section
- **Professional Photo Display**: Showcase your LinkedIn profile photo
- **Animated Profile Border**: Pulsing gradient border effect
- **Typing Animation**: Dynamic role titles that type and erase
- **Enhanced CTA Buttons**: Eye-catching call-to-action buttons with hover effects
- **Status Badge**: "Available for opportunities" indicator
- **Colorful Social Links**: Animated social media icons
- **Scroll Indicator**: Animated mouse scroll guide

### 📋 Content Sections
- **About Me**: Personal story with animated statistics
- **Technical Skills**: 6 categories with colorful hover effects
- **Professional Experience**: Timeline with detailed responsibilities
- **Featured Projects**: 6 projects with gradient icons and tech tags
- **Certifications**: 4+ certifications with hover animations
- **Testimonials**: Slider with client recommendations and ratings
- **Enhanced Contact**: Multiple contact methods with CTA box

### 🎯 Interactive Features
- **Auto-playing Testimonial Slider**: With navigation dots and swipe support
- **Animated Counters**: Stats that count up when scrolled into view
- **Scroll Progress Bar**: Visual indicator of page scroll progress
- **Scroll-to-Top Button**: Floating button with smooth scroll
- **Parallax Effects**: Background elements move on scroll
- **Intersection Observer**: Elements animate when they come into view
- **Button Ripple Effects**: Material Design-style button clicks

### ⚡ Performance & UX
- **Fast Loading**: Optimized CSS and JavaScript
- **Smooth Scrolling**: Buttery-smooth navigation
- **Lazy Loading**: Images load as needed
- **Keyboard Navigation**: Full accessibility support
- **Mobile Responsive**: Perfect on all devices
- **SEO Optimized**: Meta tags and semantic HTML

## 🚀 Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Advanced animations, gradients, and modern layouts
- **Vanilla JavaScript**: No frameworks, pure performance
- **Font Awesome 6**: Beautiful icon library
- **CSS Grid & Flexbox**: Modern responsive layouts
- **Intersection Observer API**: Scroll-triggered animations
- **CSS Custom Properties**: Easy theming and customization

## 📦 Project Structure

```
santosh-portfolio/
│
├── index.html              # Main HTML file with all sections
├── style.css               # Enhanced CSS with animations and gradients
├── script.js               # Advanced JavaScript for interactivity
├── profile-photo.jpg       # Your LinkedIn photo (add this!)
├── .gitignore              # Git ignore file
├── README.md               # This file
└── PHOTO-GUIDE.md          # Detailed guide for adding your photo
```

## 🖼️ Adding Your LinkedIn Profile Photo

**IMPORTANT:** To display your professional photo, follow these steps:

### Quick Method:
1. Download your photo from LinkedIn
2. Rename it to `profile-photo.jpg` or `profile-photo.png`
3. Place it in the `santosh-portfolio` folder
4. Refresh the page - it will appear automatically!

For detailed instructions, see **[PHOTO-GUIDE.md](PHOTO-GUIDE.md)**

## 🎨 Customizing Colors

The portfolio uses a vibrant professional color scheme that you can easily customize:

### Color Palette
Edit the CSS variables in `style.css` (lines 8-27):

```css
:root {
    /* Primary Colors - Change these for your brand */
    --primary-color: #667eea;        /* Purple-blue gradient start */
    --secondary-color: #f59e0b;      /* Amber/Orange */
    --accent-color: #ec4899;         /* Pink accent */
    
    /* Gradients - 5 beautiful gradients used throughout */
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    --gradient-5: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}
```

### Popular Color Schemes

**Professional Blue (Default):**
- Already set! Purple-blue with warm accents

**Corporate Navy:**
```css
--primary-color: #1e40af;
--gradient-1: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
```

**Tech Green:**
```css
--primary-color: #10b981;
--gradient-1: linear-gradient(135deg, #10b981 0%, #34d399 100%);
```

**Modern Orange:**
```css
--primary-color: #f59e0b;
--gradient-1: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
```

## 🔧 Setup & Deployment

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

### Deploy to GitHub Pages

1. **Create a GitHub Account** (if you don't have one):
   - Visit [github.com](https://github.com)
   - Sign up with username: `Sirikondasantosh`

2. **Create a New Repository**:
   - Click the "+" icon and select "New repository"
   - Name it: `Sirikondasantosh.github.io` (or any name like `portfolio`)
   - Make it public
   - Don't initialize with README (we already have one)

3. **Push Your Code**:
   ```bash
   cd santosh-portfolio
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/Sirikondasantosh/Sirikondasantosh.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select branch `main`
   - Click "Save"
   - Your site will be live at: `https://sirikondasantosh.github.io/`

## 🎨 Customization

### Update Personal Information

1. **Email Address**: Replace `santosh.sirikonda@example.com` with your actual email in:
   - `index.html` (3 locations: Hero, Contact, Footer)

2. **GitHub Username**: Update if different from `Sirikondasantosh` in:
   - `index.html` (Social links)
   - This README

3. **Add Your Photo** (Optional):
   - Add your photo to the project folder
   - Add an `<img>` tag in the hero section or about section

### Modify Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main blue color */
    --secondary-color: #1e40af;  /* Darker blue */
    --text-dark: #1f2937;        /* Dark text */
    --text-light: #6b7280;       /* Light text */
    --bg-light: #f9fafb;         /* Light background */
}
```

### Add More Projects

In `index.html`, duplicate a project card in the Projects section:

```html
<div class="project-card">
    <div class="project-icon"><i class="fas fa-your-icon"></i></div>
    <h3>Project Name</h3>
    <p>Project description...</p>
    <div class="project-tech">
        <span>Tech 1</span>
        <span>Tech 2</span>
    </div>
</div>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- **LinkedIn**: [linkedin.com/in/santosh-sirikonda-1ab988246](https://www.linkedin.com/in/santosh-sirikonda-1ab988246/)
- **GitHub**: [github.com/Sirikondasantosh](https://github.com/Sirikondasantosh)
- **Email**: santosh.sirikonda@example.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Icons by [Font Awesome](https://fontawesome.com)
- Professional content based on LinkedIn profile

---

**Created with ❤️ for Santosh Sirikonda**

