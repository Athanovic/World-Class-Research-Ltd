# World-Class Research Limited - Modern Website

A modern, responsive website built with React, Vite, Tailwind CSS, and Framer Motion for World-Class Research Limited.

## 🚀 Features

- **Modern Hero Section** with animated background and CTAs
- **Sticky Navigation** that changes on scroll
- **Interactive Coverage Map** with Recharts visualization
- **Animated Testimonials Carousel** with auto-rotation
- **Services Showcase** with hover effects
- **Team Section** with contact links
- **Blog/Insights Section** with category filtering
- **Careers/Opportunities Section** for recruitment
- **Contact Form** with validation
- **Fully Responsive** design for all devices
- **Smooth Animations** using Framer Motion
- **Modern UI/UX** inspired by GeoPoll and Ipsos

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.2** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Recharts** - Chart library for data visualization
- **Framer Motion 11** - Animation library

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm installed on your system

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd wcrl-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
wcrl-website/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.jsx   # Sticky navigation bar
│   │   ├── Hero.jsx         # Hero section with animations
│   │   ├── About.jsx        # About section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Coverage.jsx     # Interactive coverage map
│   │   ├── Testimonials.jsx # Carousel testimonials
│   │   ├── Team.jsx         # Team members
│   │   ├── Insights.jsx     # Blog/insights section
│   │   ├── Careers.jsx      # Career opportunities
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── content.js       # All website content
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Content
All content is centralized in `src/data/content.js`. Simply update:
- Company information
- Services
- Team members
- Testimonials
- Blog posts
- Contact details

### Adding Images
1. Place images in `src/assets/` folder
2. Import them in components:
   ```javascript
   import logo from '../assets/logo.png'
   ```

## 🌐 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web server

## 🔧 Additional Features to Consider

### Video Integration
Replace the video placeholder in Hero.jsx with an actual video:
```javascript
<video autoPlay loop muted className="...">
  <source src="/path-to-video.mp4" type="video/mp4" />
</video>
```

### Analytics
Add Google Analytics by including the script in `index.html`

### SEO Optimization
- Add meta tags in `index.html`
- Implement structured data
- Create sitemap.xml

### Blog CMS Integration
- Connect to a headless CMS (Contentful, Strapi, etc.)
- Fetch blog posts dynamically

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Credits

- **Original Design (2021):** Athanas Mochama
- **Original Development (2021):** Albert Mochama
- **Modern Redesign (2026):** Built with React, Vite & Tailwind CSS

## 📄 License

Copyright © 2026 World-Class Research Limited. All rights reserved.

---

## 🆘 Troubleshooting

**Issue:** Port 5173 is already in use
**Solution:** Kill the process using that port or use a different port:
```bash
npm run dev -- --port 3000
```

**Issue:** Dependencies not installing
**Solution:** Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

**Issue:** Build fails
**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions about the website, contact:
- Email: info@worldclassresearch.co.ke
- Phone: +254722810034
