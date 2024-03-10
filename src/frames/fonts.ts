declare type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
declare type Style = 'normal' | 'italic'

export interface FontOptions {
  data: Buffer | ArrayBuffer
  name: string
  weight?: Weight
  style?: Style
  lang?: string
}

export async function getFont(
  font: 'inter' | 'inter-bold' | 'satoshi' | 'gilroy'
) {
  let fontData: ArrayBuffer
  const baseUrl = 'https://github.com/gskril/frames/raw/main/assets/fonts'

  if (font === 'satoshi') {
    fontData = await fetchFont(`${baseUrl}/Satoshi-Bold.otf`)
  } else if (font === 'gilroy') {
    fontData = await fetchFont(`${baseUrl}/Gilroy-ExtraBold.otf`)
  } else if (font === 'inter-bold') {
    fontData = await fetchFont(`${baseUrl}/Inter-Bold.otf`)
  } else {
    fontData = await fetchFont(`${baseUrl}/Inter-Medium.otf`)
  }

  return { name: font, data: fontData, style: 'normal' } satisfies FontOptions
}

async function fetchFont(url: string) {
  const res = await fetch(url, { cf: { cacheTtl: 31_536_000 } })
  return res.arrayBuffer()
}
