# Body Zone Website

A luxury wellness and fitness website for Body Zone supplements and studios.

## Features

- Responsive design
- Modern, luxury aesthetic with gold accents
- Product showcase
- Smooth animations and interactions
- Clean, professional layout

## Files

- `index.html` - Main website file
- `bodyzone.jsx` - React version for preview
- `bodyzone.html` - Alternative HTML file

## Setup

Simply open `index.html` in a web browser to view the website.

## Customization

### Adding Your Header Image

To use your own header image instead of the simulated background, update line 121 in `index.html`:

```css
background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e0e0e0 100%);
```

Replace with:

```css
background-image: url('path/to/your/image.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch and save
5. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly!

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Cormorant Garamond, Montserrat)

## License

All rights reserved © 2026 Body Zone
