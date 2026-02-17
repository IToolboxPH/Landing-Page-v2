# IToolbox Landing Page - GitHub Pages

**Live Site**: [IToolbox Landing Page](https://itoolboxph.github.io/IToolbox-Landing-Page/)

## 🚀 Overview

Modern, responsive landing page for IToolbox startup company featuring:
- Product showcase (BilMoko, InForMa, DigiCool, MedConnect)
- Contact form with analytics tracking
- Mobile-responsive design with hamburger menu
- Built-in visitor tracking
- Dark theme with red gradient accents
- Mission & Vision statements

## 📁 Project Structure

```
IToolboxPH.github.io/
├── index.html              # Main landing page
├── css/
│   └── style.css          # Modern CSS with variables
├── js/
│   └── main.js            # Navigation, forms, analytics
├── assets/
│   ├── images/
│   │   └── itoolbox_logo_ipo-approved.jpg  # ⚠️ Add your logo here
│   └── icons/             # ⚠️ Add favicon files here
├── README.md              # This file
└── SETUP_GUIDE.md         # Detailed setup instructions
```

## 🎨 Design Features

- **Modern Dark Theme**: Professional dark background with red (#dc2626) accent color
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter cards
- **Performance**: No jQuery, minimal dependencies, fast loading
- **Analytics**: Built-in localStorage analytics (page views, events, form submissions)

## 🛠️ Quick Start

### Option 1: GitHub Pages (Recommended for Production)
Already configured! Just push to GitHub:
```bash
git add .
git commit -m "Update landing page"
git push origin main
```

Visit: https://itoolboxph.github.io

### Option 2: Local Development
```bash
# Using Python
python3 -m http.server 8000
# Access at: http://localhost:8000

# Or using VS Code Live Server
# Right-click index.html and select "Open with Live Server"
```

## ⚠️ Important: Add Your Logo

Before going live, add your logo files to:
1. `/assets/images/itoolbox_logo_ipo-approved.jpg` - Main logo
2. `/assets/icons/` - Favicon files (generate at https://realfavicongenerator.net/)

## 📦 Products Featured

1. **BilMoko** - Restaurant Price Aggregator (Planning)
2. **InForMa** - Intelligent Forest Monitoring (Active Development) 🌟
3. **DigiCool** - Digital School Platform (Planning)
4. **MedConnect** - Healthcare Management Platform (Concept)

## 📊 Built-in Analytics

Access analytics in browser console:
```javascript
getAnalyticsSummary()  // View all tracked data
exportAnalytics()      // Download JSON report
clearAnalytics()       // Clear all data
```

Tracks:
- Page views
- Button clicks
- Form submissions
- Scroll depth  
- Time on page
- Product card interactions

## 🔧 Customization

### Update Colors
Edit `/css/style.css` CSS variables:
```css
:root {
    --primary-color: #dc2626;    /* Main red color */
    --secondary-color: #b91c1c;  /* Darker red */
    --accent-color: #ef4444;     /* Lighter red */
}
```

### Update Social Links
Edit `/index.html` - Search for "social-links" section:
```html
<a href="YOUR_LINKEDIN_URL" target="_blank">...</a>
```

### Update Contact Info
Edit `/index.html` - Search for "Contact Information":
```html
<p>namortel.itoolbox.ph@gmail.com</p>
<p>+639992298724</p>
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 TODO

- [ ] Add logo and favicon files
- [ ] Implement backend API for contact form
- [ ] Add Google Analytics integration (optional)
- [ ] Create additional pages (Privacy Policy, Terms of Service)
- [ ] Add product screenshots/mockups

## 🚢 Deployment Checklist

Before going live:
- [x] Update HTML content
- [x] Update CSS styling
- [x] Update JavaScript functionality
- [ ] Add logo files to `/assets/`
- [ ] Test on mobile devices
- [ ] Verify all social media links
- [ ] Test contact form
- [ ] Check SEO meta tags
- [ ] Add Google Analytics (optional)

## 📞 Contact

**IToolbox**
- Email: itoolbox2019@gmail.com
- Phone: +63 999 229 8724
- Location: Philippines

---

© 2019-2026 IToolbox. All rights reserved.

**Founded**: 2019  
**CEO**: Nicole John A. Mortel
