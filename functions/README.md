# Functions

This folder contains the Firebase Cloud Function that generates dynamic OG images.

Setup

1. From this folder run:

```bash
npm install
```

2. To run functions locally (requires Firebase CLI):

```bash
firebase emulators:start --only functions
```

Notes

- The function uses `sharp` to render a PNG from an SVG template. On some platforms `sharp` needs additional build tools. If `npm install` fails, please refer to https://sharp.pixelplumbing.com/install for platform-specific instructions.
- The function is exposed at `/og` via a hosting rewrite in `firebase.json`.
