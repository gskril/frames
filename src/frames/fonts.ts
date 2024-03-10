declare type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
declare type Style = 'normal' | 'italic'

export interface FontOptions {
  data: Buffer | ArrayBuffer
  name: string
  weight?: Weight
  style?: Style
  lang?: string
}

export async function getFont(font: 'inter' | 'satoshi') {
  let fontData: ArrayBuffer

  if (font === 'satoshi') {
    // prettier-ignore
    fontData = await fetchFont('https://github.com/gskril/frames/raw/main/assets/fonts/Satoshi-Bold.otf')
  } else {
    // prettier-ignore
    fontData = await fetchFont('https://github.com/gskril/frames/raw/main/assets/fonts/Inter-Bold.otf')
  }

  const fonts: FontOptions[] = [
    { name: 'Font', data: fontData, style: 'normal' },
  ]

  return fonts
}

async function fetchFont(url: string) {
  const res = await fetch(url, { cf: { cacheTtl: 31_536_000 } })
  return res.arrayBuffer()
}
