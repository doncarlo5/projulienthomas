import { ImageResponse } from 'next/og'

export const alt = 'Julien Thomas — full-stack developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#f5f2eb',
        color: '#171714',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        height: '100%',
        justifyContent: 'space-between',
        padding: '64px 72px',
        width: '100%',
      }}
    >
      <div
        style={{
          borderTop: '2px solid #171714',
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}
      >
        <span style={{ fontSize: 24 }}>Julien Thomas</span>
        <span style={{ color: '#6f6c65', fontSize: 20 }}>Portfolio · 2026</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: 82,
            fontWeight: 600,
            letterSpacing: '-4px',
            lineHeight: 0.98,
            maxWidth: 960,
          }}
        >
          Full-stack developer in Barcelona.
        </span>
        <span style={{ color: '#6f6c65', fontSize: 25, marginTop: 32 }}>
          Architecture, product, and the client conversation.
        </span>
      </div>
    </div>,
    size,
  )
}
