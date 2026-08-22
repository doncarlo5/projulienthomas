import { ImageResponse } from 'next/og'

export const alt = 'JT Company, independent product studio by Julien Thomas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#171714',
        color: '#f5f2eb',
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
          borderTop: '2px solid #f5f2eb',
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}
      >
        <span style={{ fontSize: 24 }}>JT Company</span>
        <span style={{ color: '#a7a39b', fontSize: 20 }}>Barcelona · 2026</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: '-5px',
            lineHeight: 0.98,
            maxWidth: 980,
          }}
        >
          Small studio. Complete products.
        </span>
        <span style={{ color: '#a7a39b', fontSize: 25, marginTop: 32 }}>
          Web and mobile products by Julien Thomas.
        </span>
      </div>
    </div>,
    size,
  )
}
