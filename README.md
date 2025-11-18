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

