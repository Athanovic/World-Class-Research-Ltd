# 🚀 Quick Start Guide

## Getting Your Website Running in 5 Minutes

### Step 1: Install Node.js (if not already installed)
Download and install Node.js from: https://nodejs.org/
(Choose the LTS version - Long Term Support)

### Step 2: Open Terminal/Command Prompt
- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Mac:** Press `Cmd + Space`, type `terminal`, press Enter
- **Linux:** Press `Ctrl + Alt + T`

### Step 3: Navigate to Project Folder
```bash
cd path/to/wcrl-website
```
Replace `path/to/wcrl-website` with the actual path where you extracted the files.

### Step 4: Install Dependencies
```bash
npm install
```
Wait for all packages to download and install (this might take 2-5 minutes).

### Step 5: Start Development Server
```bash
npm run dev
```

### Step 6: View Your Website
Open your browser and go to: **http://localhost:5173**

## 🎉 You're Done!

Your website is now running locally. Any changes you make to the code will automatically refresh in the browser.

## 📝 What's Next?

### Customize Content
Edit `src/data/content.js` to update:
- Company information
- Services
- Team members
- Testimonials
- Contact details

### Add Your Logo
1. Place your logo image in `src/assets/`
2. Update the navigation component to use your logo

### Add Real Images
1. Add team photos to `src/assets/`
2. Update image references in components

### Deploy to Production
When ready to launch:
```bash
npm run build
```
Upload the `dist` folder to your web hosting service.

## 🆘 Common Issues

**"npm: command not found"**
→ You need to install Node.js first

**"Port 5173 already in use"**
→ Run: `npm run dev -- --port 3000` to use a different port

**Website not loading**
→ Make sure the terminal shows "Local: http://localhost:5173"

## 📞 Need Help?

Contact your developer or refer to the full README.md file for detailed instructions.

---

## Modern Features Included:

✅ Responsive design (works on phones, tablets, desktops)
✅ Smooth animations and transitions
✅ Interactive charts for coverage data
✅ Auto-rotating testimonials
✅ Modern navigation with scroll effects
✅ Contact form
✅ Blog/insights section
✅ Careers opportunities section
✅ SEO-friendly structure

## Technologies Used:

- React 18 (JavaScript library)
- Vite (Super-fast build tool)
- Tailwind CSS (Modern styling)
- Framer Motion (Smooth animations)
- Recharts (Interactive charts)
- Lucide Icons (Beautiful icons)
