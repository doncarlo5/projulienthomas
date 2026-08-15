import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#14110e',
        color: '#f7f3eb',
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        fontSize: 46,
        fontWeight: 700,
        height: '100%',
        justifyContent: 'center',
        letterSpacing: '-3px',
        lineHeight: 1,
        width: '100%',
      }}
    >
      JT
    </div>,
    size,
  )
}
