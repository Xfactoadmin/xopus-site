import { ImageResponse } from 'next/og';

// Métadonnées de l'image
export const alt = 'XOpus - Logiciel de Facturation N°1 en France 🇫🇷';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Génération de l'image Open Graph
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0c1228 50%, #0e1435 100%)',
          position: 'relative',
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79, 134, 247, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 28px',
              background: 'rgba(79, 134, 247, 0.2)',
              border: '2px solid rgba(79, 134, 247, 0.4)',
              borderRadius: '32px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#4F86F7',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4F86F7 0%, #EF4444 100%)',
              }}
            />
            N°1 en France 🇫🇷
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              margin: 0,
              marginBottom: '24px',
            }}
          >
            XOpus
          </h1>

          {/* Tricolor bar */}
          <div
            style={{
              width: '120px',
              height: '6px',
              background: 'linear-gradient(90deg, #002395 0%, #ffffff 50%, #EF4444 100%)',
              borderRadius: '6px',
              marginBottom: '32px',
              boxShadow: '0 4px 30px rgba(79, 134, 247, 0.5), 0 4px 30px rgba(239, 68, 68, 0.5)',
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              margin: 0,
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Logiciel de facturation pour artisans & indépendants
          </p>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '48px',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✓ Factur-X 2026
            </div>
            <div
              style={{
                width: '2px',
                height: '24px',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✓ Conformité TVA
            </div>
            <div
              style={{
                width: '2px',
                height: '24px',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              ✓ 9,99€/mois
            </div>
          </div>
        </div>

        {/* Footer badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <span>🔒 Hébergé en France</span>
          <span>•</span>
          <span>🛡️ Conforme RGPD</span>
          <span>•</span>
          <span>🇫🇷 Entreprise française</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
