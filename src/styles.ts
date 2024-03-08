declare type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
declare type Style = 'normal' | 'italic'

export interface FontOptions {
  data: Buffer | ArrayBuffer
  name: string
  weight?: Weight
  style?: Style
  lang?: string
}

export async function getFonts() {
  const satoshiData = await fetch(
    new URL(
      'https://github.com/gskril/bitsignal/raw/main/src/assets/fonts/Satoshi-Bold.otf'
    )
  ).then((res) => res.arrayBuffer())

  const fonts: FontOptions[] = [
    { name: 'Satoshi', data: satoshiData, style: 'normal' },
  ]

  return fonts
}

export const backgroundStyles: Hono.CSSProperties = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1.2,
  padding: 80,
  fontSize: 96,
  width: '100%',
  height: '100%',
  backgroundColor: '#0D0915',
  backgroundImage: 'url(https://i.imgur.com/9llZeZd.png)',
}
