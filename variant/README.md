# Parkside Invitation - AMP Story Invitation

A beautiful, fast-loading AMP Story-based invitation website. This single-page site features three story pages with full-screen images and interactive map functionality.

## Features

- ✅ **AMP Story Format** - Fast, mobile-optimized storytelling
- ✅ **Three Story Pages**:
  1. Cover page with passport-style design (royal blue with brass-tone accents)
  2. Ceremony details page with Telugu and English text
  3. Map page with location, directions link, and QR code
- ✅ **Accessibility** - Semantic HTML, alt text, proper contrast
- ✅ **Performance** - Optimized fonts, lazy loading, minimal dependencies
- ✅ **Responsive** - Works on all device sizes
- ✅ **UTF-8 Support** - Proper Telugu character rendering

## Project Structure

```
parkside-invitation/
├── index.html          # Main AMP Story page
├── assets/             # Images and fonts
│   ├── cover_passport.jpg
│   ├── map_image.jpg
│   ├── qr_map.png
│   ├── logo.png (optional)
│   └── [font files] (optional)
├── README.md           # This file
└── .gitignore
```

## Setup Instructions

### 1. Add Your Assets

Place the following files in the `assets/` directory:

- `cover_passport.jpg` - Your cover image (recommended: 600x800px, 3:4 ratio)
- `map_image.jpg` - Map of your venue location (recommended: 700x400px)
- `qr_map.png` - QR code for Google Maps directions (recommended: 150x150px minimum)
- `logo.png` - Optional publisher logo (recommended: 96x96px)

See `assets/README_ASSETS.md` for detailed asset requirements.

### 2. Customize Content

Edit `index.html` to update:

- **Address** (line ~200): Replace `[Your Address Here]` with your actual address
- **Google Maps Link** (line ~205): Update the `q=` parameter with your address
- **Ceremony Text**: Modify the Telugu and English text as needed
- **Title**: Update the `<title>` tag and AMP Story metadata

### 3. Optional: Add Custom Fonts

If you want to use the custom fonts (Noto Serif Telugu and Playfair Display):

1. Download fonts from Google Fonts:
   - [Noto Serif Telugu](https://fonts.google.com/noto/specimen/Noto+Serif+Telugu)
   - [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)

2. Convert to WOFF2 format (use [CloudConvert](https://cloudconvert.com/ttf-to-woff2) or similar)

3. Place the `.woff2` files in the `assets/` directory with these exact names:
   - `NotoSerifTelugu-Regular.woff2`
   - `NotoSerifTelugu-Bold.woff2`
   - `PlayfairDisplay-Regular.woff2`
   - `PlayfairDisplay-Bold.woff2`

**Note**: The site will work without custom fonts - it will fallback to system fonts gracefully.

## Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push this code to the repository
3. Go to Settings → Pages
4. Select your branch (usually `main` or `master`)
5. Your site will be available at `https://[username].github.io/parkside-invitation/`

### Option 2: Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Navigate to project directory
3. Run: `netlify deploy --prod`
4. Follow the prompts

Or drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to project directory
3. Run: `vercel --prod`
4. Follow the prompts

### Option 4: Any Static Hosting

This is a static site - you can deploy it to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any web server (Apache, Nginx, etc.)

Simply upload all files maintaining the directory structure.

## AMP Validation

Before deploying, validate your AMP Story:

1. Visit: https://validator.ampproject.org/
2. Paste your HTML or provide the URL
3. Fix any validation errors

The current HTML follows AMP Story best practices and should validate successfully.

## Customization Tips

### Colors
- Royal Blue: `#1a237e` (main background)
- Brass/Gold: `#d4af37` (accent color)
- Border Gold: `#b8860b`

### Timing
- Cover page auto-advances after 5 seconds
- Ceremony page auto-advances after 8 seconds
- Map page requires manual navigation

To change timing, modify the `auto-advance-after` attribute on each `amp-story-page`.

### Adding More Pages

To add additional pages, insert new `<amp-story-page>` elements between existing pages. Follow the same structure as the existing pages.

## Browser Support

AMP Stories work best on:
- Chrome/Edge (recommended)
- Safari (iOS 11+)
- Firefox (with some limitations)

## Performance

This site is optimized for fast loading:
- Inline CSS (no external stylesheets)
- Optimized font loading with `font-display: swap`
- Lazy image loading
- Minimal JavaScript (only AMP runtime)

## License

This project is provided as-is for personal use. Customize as needed for your event.

## Support

For AMP Story documentation, visit: https://amp.dev/documentation/components/amp-story/

