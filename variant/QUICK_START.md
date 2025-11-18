# Quick Start Guide

## 1. Add Your Images

Place these files in the `assets/` folder:

- ✅ `cover_passport.jpg` - Your cover image (600x800px recommended)
- ✅ `map_image.jpg` - Map of your venue (700x400px recommended)  
- ✅ `qr_map.png` - QR code for directions (150x150px minimum)
- ⚠️ `logo.png` - Optional publisher logo (96x96px)

## 2. Update Address

Edit `index.html` and replace:
- Line 317-319: `[Your Address Here]` with your actual address
- Line 321: Update the Google Maps URL with your address (URL-encoded)

Example:
```html
<div class="address-text">
  123 Main Street<br>
  Hyderabad, Telangana 500001<br>
  India
</div>
<a href="https://maps.google.com/?q=123+Main+Street+Hyderabad+Telangana" ...>
```

## 3. Customize Text (Optional)

Edit the ceremony text in `index.html`:
- Lines 283-290: Telugu text
- Lines 291-297: English text

## 4. Deploy

Choose one:
- **GitHub Pages**: Push to GitHub, enable Pages in Settings
- **Netlify**: Drag folder to https://app.netlify.com/drop
- **Vercel**: Run `vercel --prod` in this directory

## 5. Validate

Before going live, validate at: https://validator.ampproject.org/

---

**That's it!** Your invitation site is ready. 🎉

For detailed instructions, see [README.md](README.md).

