# Variant Version - Parkside Invitation

This is a variant version of the Parkside Invitation with a different page structure.

## Page Structure

1. **Page 1**: Cover page with passport-style design using `cover_passport.png`
2. **Page 2**: Full-page housewarming invitation image using `cover_passport.jpg`
3. **Page 3**: Map page with venue details and Google Maps link

## Differences from Main Version

- **Page 2**: Uses the housewarming invitation image (`cover_passport.jpg`) as a full-page display instead of text content
- **Venue Details**: Updated with actual venue information and Google Maps link
- **Asset Paths**: Uses relative paths (`../assets/`) to access the shared assets folder

# Variant Version - Parkside Invitation

This is a variant version of the Parkside Invitation with a different page structure.

## Page Structure

1. **Page 1**: Cover page with passport-style design using `cover_passport.png`
2. **Page 2**: Full-page housewarming invitation image using `cover_passport.jpg`
3. **Page 3**: Map page with venue details and Google Maps link

## Differences from Main Version

- **Page 2**: Uses the housewarming invitation image (`cover_passport.jpg`) as a full-page display instead of text content
- **Venue Details**: Updated with actual venue information and Google Maps link
- **Asset Paths**: Uses relative paths (`../assets/`) to access the shared assets folder

## Assets Used

All assets are loaded from the parent `assets/` folder:
- `../assets/cover_passport.png` - Cover page image
- `../assets/cover_passport.jpg` - Housewarming invitation image (Page 2)
- `../assets/map_image.png` - Location map
- `../assets/qr_map.png` - QR code for directions (if available)
- `../assets/logo.png` - Publisher logo (optional)

## Deployment

This variant can be deployed alongside the main version. Simply:
1. Deploy the entire `parkside-invitation` folder
2. Access the variant at: `your-domain.com/variant/`

Or deploy this folder separately as a standalone site.

## Venue Information

- **Venue**: The Park Side Apartments by Capitol Constructions
- **Location**: Hyderabad, Telangana, India
- **Google Maps**: https://maps.app.goo.gl/sUbRxSgjfmk8qc6B6


## GitHub Pages + Vercel OG (New workflow)

This repository now supports hosting the static invitation site on GitHub Pages and running a separate Vercel Edge app that generates dynamic OG images.

- Static site (AMP story and landing page): `public/` — deploy this to GitHub Pages (branch `gh-pages` or repository Pages settings).
- Dynamic OG generator (Vercel): `vercel-og/` — deploy this folder as a Vercel project. It contains an Edge function at `api/og.js` that responds to `/api/og?name=` and returns a 1200×630 PNG.

Quick deploy steps:

1. Deploy static site to GitHub Pages:

```bash
# Build or copy `public` to the branch configured for GitHub Pages (usually `gh-pages`).
git checkout -b gh-pages
git rm -r --cached .
cp -R public/* .
git add .
git commit -m "Publish static site to GitHub Pages"
git push -u origin gh-pages
```

2. Deploy Vercel OG app:

```bash
cd vercel-og
npm install
vercel deploy --prod
```

After deploying the Vercel app, update `public/index.html` (the `vercelOgHost` variable) to point to your Vercel deployment URL (for example `https://parkside-og.vercel.app`).

Testing OG endpoint locally using Vercel CLI:

```bash
cd vercel-og
npm install
vercel dev
# then open http://localhost:3000/api/og?name=Koushik
```

