# Modern Developer Portfolio

A fully responsive, animated, and professional developer portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design with dark blue and sea blue theme
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive for all screen sizes
- 🎯 Section scroll flow with scroll-based animations
- 🎭 Interactive components with hover effects
- 📝 Contact form with validation
- 🎪 Project showcase with flip cards
- 💬 Testimonials carousel
- 🔗 Social media integration

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Scroll
- React Intersection Observer

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── assets/            # Images and other static assets
├── App.tsx           # Main application component
└── index.css         # Global styles
```

## Customization

1. Update personal information in each component
2. Replace project images in the `public/projects` directory
3. Update social media links in the Footer component
4. Modify the color scheme in `tailwind.config.js`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## License

MIT License - feel free to use this template for your personal portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 