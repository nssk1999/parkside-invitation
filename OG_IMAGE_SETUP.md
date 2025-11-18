# OG Image Setup for Dynamic Preview

## Current Implementation

The site now supports dynamic Open Graph images based on the `name` query parameter:
- **URL Format**: `https://nssk1999.github.io/parkside-invitation/?name=Koushik`
- **OG Image**: Points to `og-image.html?name=Koushik`

## Important Note

OG crawlers (WhatsApp, Instagram, Twitter, LinkedIn, etc.) need **actual image files** (PNG/JPG), not HTML pages. The current `og-image.html` is an HTML page that displays the image, but crawlers may not render it correctly.

## Solutions

### Option 1: Use a Screenshot Service (Recommended)

Use a service that converts HTML to images:

1. **htmlcsstoimage.com** (requires API key)
   - Sign up at https://htmlcsstoimage.com
   - Update OG image URLs to use their API

2. **ScreenshotAPI.net** (free tier available)
   - Similar service for HTML to image conversion

3. **Vercel OG Image** (if deploying to Vercel)
   - Built-in OG image generation

### Option 2: Pre-generate Images

For common names, pre-generate images and store them in the `assets/` folder:
- `assets/og-koushik.png`
- `assets/og-komali.png`
- etc.

Then update the OG image URL to point to the static image file.

### Option 3: Serverless Function

Deploy a serverless function (Vercel, Netlify, etc.) that:
1. Receives the name parameter
2. Generates an image using canvas or similar
3. Returns the image file

## Testing

Test your OG images using:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Current Status

The HTML structure is ready. The `og-image.html` page will display correctly in browsers, but for proper OG preview support, you'll need to implement one of the solutions above to convert it to an actual image file.

