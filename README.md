# 🌱 Gentex Seeds Website

A modern, responsive website for Gentex Seeds - a premium agricultural seeds company based in Ahmedabad, Gujarat.

## 📁 Project Structure

```
gentexseeds/
├── index.html      # Main HTML file
├── styles.css      # All styles and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # Project documentation
```

## ✨ Features

- **Modern Design**: Clean, professional look with earthy color palette
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth scrolling
- **Contact Form**: Form validation and submission handling
- **SEO Optimized**: Semantic HTML with proper meta tags

## 🎨 Design Elements

- **Color Palette**: 
  - Primary: Deep Forest Green (#2d5016)
  - Accent: Warm Gold (#d4a84b)
  - Background: Cream (#faf8f3)

- **Typography**:
  - Headings: Cormorant Garamond (elegant serif)
  - Body: DM Sans (clean sans-serif)

## 🚀 Getting Started

### Option 1: Open directly
Simply open `index.html` in any modern web browser.

### Option 2: Use a local server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then visit `http://localhost:8000` in your browser.

## 📱 Sections

1. **Hero** - Eye-catching banner with company tagline
2. **About Us** - Company mission and values
3. **Categories** - 8 product categories with hover effects
4. **Products** - Featured products in Vegetable, Field Crop, and Fodder seeds
5. **Why Choose Us** - Key differentiators and benefits
6. **Contact** - Contact form with validation

## 🔧 Customization

### Adding Real Product Images
Replace the emoji placeholders in `index.html` with actual images:

```html
<!-- Before -->
<div class="product-placeholder">🥒</div>

<!-- After -->
<img src="images/products/kayoki.jpg" alt="Kayoki Cucumber Seeds">
```

### Updating Contact Information
Edit the contact details in the Contact section and Footer of `index.html`.

### Connecting the Contact Form
Update the `initContactForm` function in `script.js` to connect to your backend API.

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

© 2025 Gentex Seeds. All Rights Reserved.

---

Made with 💚 for farmers across India




