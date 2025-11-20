const functions = require('firebase-functions');
const sharp = require('sharp');

exports.og = functions.https.onRequest(async (req, res) => {
    const name = req.query.name || 'Guest';

    const width = 1200;
    const height = 630;
    const title = "NIDAMANURI'S GRIHA PRAVESH";
    const subtitle = `Invitation for ${name}`;

    const svg = `
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#08294a"/>
            <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="#ffd700" font-size="70px" font-family="serif">${title}</text>
            <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="#ffd700" font-size="50px" font-family="serif">${subtitle}</text>
        </svg>
    `;

    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

    res.set('Content-Type', 'image/png');
    res.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000');
    res.send(pngBuffer);
});