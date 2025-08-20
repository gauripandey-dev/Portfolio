# Gauri Pandey - Frontend Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Frontend Developer. Built with vanilla HTML, CSS, and JavaScript, featuring advanced animations, dual theme support, and professional design.

## 🌟 Features

### 🎨 Design & UI
- **Dual Theme Support**: Professional dark mode with electric blue glow effects and light mode with orange accents
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions, parallax effects, and interactive hover states
- **Particle System**: Dynamic animated background particles
- **Professional Typography**: Inter font family for optimal readability

### ⚡ Interactive Elements
- **Dynamic Typing Animation**: Rotating professional titles in hero section
- **Smooth Scrolling Navigation**: Active section highlighting with smooth transitions
- **Enhanced Contact Form**: Advanced validation with real-time feedback
- **Certificate Modal**: Click to view certificates in detailed modal
- **Back to Top Button**: Smooth scroll-to-top functionality
- **Mobile Menu**: Hamburger navigation for mobile devices

### 🔧 Technical Features
- **Intersection Observer API**: Performance-optimized scroll animations
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom CSS Properties**: Dynamic theming system
- **Form Integration**: Google Sheets integration for contact form
- **Performance Optimized**: Throttled scroll events and lazy loading
- **Accessibility Features**: ARIA labels, keyboard navigation, and focus indicators

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # Comprehensive CSS with dual theme support
├── script.js               # JavaScript functionality and animations
├── images/                 # Image assets
│   ├── Gauri Portfolio.jpg # Profile image
│   ├── Dashboard.png.jpg   # Project screenshots
│   ├── certificates/       # Certificate images
│   └── projects/          # Project images
└── README.md              # Project documentation
```

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL Here]

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome 6.0
- **Form Backend**: Google Apps Script for form submissions
- **Deployment**: [Your deployment platform]

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Laptop**: 1024px - 1199px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 Sections

1. **Hero Section**: Introduction with dynamic typing animation
2. **About**: Professional summary and skills overview
3. **Education**: Academic timeline with achievements
4. **Experience**: Professional experience timeline
5. **Projects**: Featured project showcase with live demos
6. **Certificates**: Professional certifications with modal view
7. **Contact**: Contact form with validation and social links

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gauripandey-dev/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for development
   ```

3. **For development with live server**
   ```bash
   # If using VS Code with Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   
   # Or use Python's built-in server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## ⚙️ Customization

### Changing Theme Colors

Edit the CSS custom properties in `style.css`:

```css
:root {
  /* Dark Mode Colors */
  --electric-blue: #00d4ff;
  --electric-blue-light: #33ddff;
  --electric-blue-glow: rgba(0, 212, 255, 0.4);
}

[data-theme="light"] {
  /* Light Mode Colors */
  --electric-blue: #ff6b35;
  --electric-blue-light: #ff8c42;
}
```

### Updating Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Projects**: Update the projects grid with your project details
3. **Experience**: Modify the timeline items in the experience section
4. **Contact Form**: Update the Google Sheets script URL in `script.js`

### Adding New Sections

1. Add HTML structure following the existing section pattern
2. Include corresponding CSS styles
3. Add navigation link and JavaScript scroll functionality

## 📝 Contact Form Setup

The contact form integrates with Google Sheets for form submissions:

1. **Create Google Sheets**: Set up a new Google Sheet
2. **Apps Script**: Create a Google Apps Script with form handling code
3. **Update Script URL**: Replace the `scriptURL` in `script.js`
4. **Deploy**: Deploy the Apps Script and get the web app URL

## 🎨 Design Philosophy

- **Minimalist Approach**: Clean, professional design focusing on content
- **Dark Mode Priority**: Enhanced glow effects for immersive dark experience
- **Light Mode Warmth**: Orange accents for friendly, approachable feel
- **Performance First**: Optimized animations and efficient code
- **Accessibility**: WCAG guidelines compliance for inclusive design

## 📊 Performance Features

- **Lazy Loading**: Images and animations load on scroll
- **Throttled Events**: Optimized scroll and resize handlers
- **CSS Transforms**: Hardware-accelerated animations
- **Minimal Dependencies**: Vanilla JavaScript for fast loading
- **Optimized Images**: Compressed images for faster loading

## 🔍 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main/master)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import repository to Vercel
2. Configure project settings
3. Deploy with automatic updates

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] CMS integration for easy content updates
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics integration
- [ ] Multi-language support
- [ ] Enhanced accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Gauri Pandey**
- Frontend Developer & Software Engineer
- Email: gauripandey9720@gmail.com
- LinkedIn: [linkedin.com/in/gauri-pandey-frontend](https://www.linkedin.com/in/gauri-pandey-frontend/)
- GitHub: [github.com/gauripandey-dev](https://github.com/gauripandey-dev)
- Location: Noida, U.P, India

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images
- JavaScript community for inspiration
- Open source community for best practices

## 📞 Support

If you have any questions or need help with customization:

- 📧 Email: gauripandey9720@gmail.com
- 💼 LinkedIn: [Connect with me](https://www.linkedin.com/in/gauri-pandey-frontend/)
- 🐛 Issues: [GitHub Issues](https://github.com/gauripandey-dev/portfolio/issues)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Gauri Pandey