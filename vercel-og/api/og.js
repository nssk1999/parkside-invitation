import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function (req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name') || 'Guest';

    return new ImageResponse(
      (
        <div style={{
          background: '#08294a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: '#ffd700', fontFamily: 'serif', textAlign: 'center' }}>
            NIDAMANURI'S GRIHA PRAVESH
          </div>
          <div style={{ height: 24 }} />
          <div style={{ fontSize: 36, color: '#ffd700', fontFamily: 'serif', textAlign: 'center' }}>
            Invitation for {name}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response('Failed to generate the image', { status: 500 });
  }
}
