# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a clean design, smooth animations, and easy deployment to GitHub Pages.

## Features

- **Responsive Design** - Works beautifully on mobile, tablet, and desktop
- **Smooth Scroll Navigation** - Seamless navigation between sections
- **Project Showcase** - Display your work with project cards
- **Contact Form** - Integrated with EmailJS for email functionality
- **Skills Section** - Showcase your technical abilities
- **Professional Theme** - Clean, modern design with navy and blue accents

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio in action!

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization

### 1. Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Your name and tagline
- `src/components/About.jsx` - Your bio and background
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your technical skills
- `src/components/Footer.jsx` - Copyright info

### 2. EmailJS Setup (Contact Form)

To enable the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/components/Contact.jsx` with your credentials:
   - Service ID
   - Template ID
   - Public Key

See comments in the Contact component for exact locations.

### 3. Colors & Styling

Edit `src/styles/variables.css` to change the color scheme:

```css
:root {
  --color-navy: #2c3e50;    /* Primary dark color */
  --color-blue: #3498db;     /* Accent color */
  --color-blue-dark: #2980b9; /* Hover states */
  /* ... more colors */
}
```

## Deployment to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**

1. Update `package.json` with your GitHub username:
   ```json
   "homepage": "https://[your-github-username].github.io/port"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Enable GitHub Pages in your repository settings (use `gh-pages` branch)

Your site will be live at `https://[your-github-username].github.io/port/`

## Project Structure

```
port/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Global styles
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **EmailJS** - Contact form functionality
- **CSS3** - Styling (no frameworks)
- **gh-pages** - Deployment to GitHub Pages

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this portfolio template for your own projects!

## Need Help?

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
