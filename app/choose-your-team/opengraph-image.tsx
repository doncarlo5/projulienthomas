import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { ImageResponse } from 'next/og'
import { WEBSITE_URL } from '@/lib/constants'

export const alt =
  'Choose Your Team — des équipes équitables en quelques secondes, gratuitement sur iPhone et Android'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const icon = await readFile(
    path.join(process.cwd(), 'app', 'choose-your-team', 'icon.png'),
  )
  const iconSource = `data:image/png;base64,${icon.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        alignItems: 'stretch',
        background: '#f5f2eb',
        color: '#171714',
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        height: '100%',
        overflow: 'hidden',
        padding: '52px 64px',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255, 196, 73, 0.75), rgba(255, 196, 73, 0) 62%)',
          display: 'flex',
          height: 560,
          left: -150,
          position: 'absolute',
          top: -220,
          width: 560,
        }}
      />
      <div
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(62, 211, 196, 0.65), rgba(62, 211, 196, 0) 66%)',
          bottom: -280,
          display: 'flex',
          height: 620,
          left: 360,
          position: 'absolute',
          width: 620,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 720,
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex' }}>
          <img
            alt=""
            height={72}
            src={iconSource}
            style={{ borderRadius: 18 }}
            width={72}
          />
          <span style={{ fontSize: 25, fontWeight: 700, marginLeft: 20 }}>
            Choose Your Team
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 78,
              fontWeight: 700,
              letterSpacing: '-4px',
              lineHeight: 0.98,
            }}
          >
            <span>Des équipes équitables.</span>
            <span>Zéro débat.</span>
          </div>
          <span
            style={{
              color: '#58554f',
              fontSize: 27,
              lineHeight: 1.35,
              marginTop: 28,
            }}
          >
            Posez vos doigts et laissez le hasard décider.
          </span>
        </div>

        <div style={{ alignItems: 'center', display: 'flex' }}>
          <span
            style={{
              background: '#171714',
              borderRadius: 999,
              color: '#f5f2eb',
              fontSize: 21,
              fontWeight: 600,
              padding: '13px 22px',
            }}
          >
            Gratuit sur iOS et Android
          </span>
          <span style={{ color: '#6f6c65', fontSize: 19, marginLeft: 20 }}>
            Sans pub · Hors ligne
          </span>
        </div>
      </div>

      <div
        style={{
          background: '#171714',
          border: '8px solid #171714',
          borderRadius: 48,
          boxShadow: '0 22px 50px rgba(23, 23, 20, 0.24)',
          display: 'flex',
          height: 660,
          overflow: 'hidden',
          position: 'absolute',
          right: 70,
          top: 44,
          width: 304,
        }}
      >
        <img
          alt=""
          height={660}
          src={`${WEBSITE_URL}/choose-your-team.png`}
          style={{ height: '100%', objectFit: 'cover', width: '100%' }}
          width={304}
        />
      </div>
    </div>,
    size,
  )
}
