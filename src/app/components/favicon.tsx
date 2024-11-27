import { ImageResponse } from '@vercel/og'
import React from 'react'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32
}

// Image generation
export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 44,
          backgroundColor: '#2E1065',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          position: 'relative',
        }}
      >
        {/* Outer circle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#A78BFA',
            borderBottomColor: 'transparent',
            transform: 'rotate(-45deg)',
          }}
        />

        {/* Inner circle */}
        <div
          style={{
            position: 'absolute',
            inset: '4px',
            borderRadius: '50%',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'transparent',
            borderBottomColor: '#A78BFA',
          }}
        />

        {/* Text */}
        <div
          style={{
            color: '#A78BFA',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'system-ui',
            zIndex: 1,
          }}
        >
          SV
        </div>
      </div>
    ) as React.ReactElement,
    {
      ...size,
    }
  )
}