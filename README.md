# Mercel Vubangsi - ML/AI Engineer Portfolio

A modern, ultra-responsive portfolio website showcasing cutting-edge ML/AI projects and software engineering expertise.

**🚀 Live Demo:** [https://mercelvubangsi.vercel.app](https://mercelvubangsi.vercel.app)  
**📁 Repository:** [https://github.com/vubangsi/portfolio](https://github.com/vubangsi/portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **15+ Projects**: Comprehensive showcase of ML/AI projects with detailed descriptions
- **Interactive Elements**: Filtering, search, and detailed project pages
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with modern web technologies
- **Contact Integration**: Working contact form with API endpoint

## 🛠 Tech Stack

- **Framework**: Astro 4.0 with React integration
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout
- **Deployment**: Optimized for Vercel deployment

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.astro      # Landing section
│   ├── About.astro     # About section
│   ├── Projects.astro  # Projects showcase
│   ├── Skills.astro    # Skills visualization
│   ├── Contact.astro   # Contact form
│   └── ...
├── layouts/            # Page layouts
│   ├── Layout.astro    # Main layout with navigation
│   └── ProjectLayout.astro # Project detail pages
├── pages/              # Routes (file-based routing)
│   ├── index.astro     # Homepage
│   ├── projects/       # Dynamic project routes
│   └── api/            # API endpoints
├── data/               # Static data
│   └── projects.ts     # Project information
└── styles/             # Global styles
    └── global.css      # Custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vubangsi/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

### Vercel (Recommended - Free Tier)

1. **Connect to Vercel** (Free):
   - Go to [vercel.com](https://vercel.com) and sign up for a free account
   - Click "Import Project" and connect your GitHub account
   - Select the `vubangsi/portfolio` repository
   - Vercel will auto-detect Astro and configure everything automatically

2. **Set up Web3Forms** (Free):
   - Create account at [web3forms.com](https://web3forms.com)
   - Get your Access Key and replace the placeholder in the contact form
   - Set your email address to receive form submissions

3. **Deploy**:
   - Click "Deploy" - your site will be live in seconds!
   - **✅ No serverless functions required**
   - **✅ Free tier supports unlimited static sites**
   - **✅ Global CDN included**

### Other Free Platforms

The portfolio can also be deployed to:
- **Netlify**: Configure build command as `npm run build` and publish directory as `dist`
- **GitHub Pages**: Use static export and deploy the `dist` folder
- **Any static hosting**: Upload the `dist` folder contents

**💡 Pro Tip**: The free tier is perfect for this portfolio - no upgrade needed!

## 🎨 Customization

### Adding New Projects

1. Add project data to `src/data/projects.ts`
2. Create individual project page automatically via dynamic routing
3. Update project screenshots in `/public/projects/`

### Modifying Colors

Update the Tailwind configuration in `src/layouts/BaseLayout.astro`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',  // Main primary color
          600: '#0284c7',
          900: '#0c4a6e',
        },
        // ... other colors
      }
    }
  }
}
```

### Contact Form

The contact form uses **Web3Forms** for free form handling without requiring serverless functions:

1. **Get a free Web3Forms account** at [web3forms.com](https://web3forms.com)
2. **Create a new form** and copy your Access Key
3. **Replace the placeholder** in `src/components/Contact.astro`:
   ```javascript
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY_HERE">
   ```
4. **Set your email** in the Web3Forms dashboard to receive submissions

**Web3Forms Features:**
- ✅ Free tier supports unlimited forms
- ✅ No serverless functions required
- ✅ Spam protection included
- ✅ File attachments support
- ✅ Email notifications

## 📱 Responsive Design

The portfolio is built mobile-first with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

- Smooth scrolling navigation
- Fade-in animations on scroll
- Hover effects and transitions
- Loading animations
- Interactive elements

## 🔧 Features

- **No Serverless Functions**: Uses Web3Forms for contact form (free tier compatible)
- **Static Generation**: All pages pre-built for maximum performance
- **SEO Optimized**: Meta tags, sitemap, and structured data included

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

For collaboration opportunities, please use the contact form or reach out via LinkedIn.

---

Built with ❤️ using Astro, React, and Tailwind CSS

**Repository:** https://github.com/vubangsi/portfolio  
**Live Demo:** https://mercelvubangsi.vercel.app
