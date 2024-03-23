declare type Weight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
declare type Style = 'normal' | 'italic'

export interface FontOptions {
  data: Buffer | ArrayBuffer
  name: string
  weight?: Weight
  style?: Style
  lang?: string
}

export async function getFont(font: 'inter' | 'satoshi' | 'gilroy') {
  let fontData: ArrayBuffer
  // This should be a relative URL from the Worker but for some reason I can't get that working so this will do 🤷‍♂️
  const baseUrl = 'https://github.com/gskril/frames/raw/main/assets/fonts'

  if (font === 'satoshi') {
    fontData = await fetchFont(`${baseUrl}/Satoshi-Bold.otf`)
  } else if (font === 'gilroy') {
    fontData = await fetchFont(`${baseUrl}/Gilroy-ExtraBold.otf`)
  } else {
    fontData = await fetchFont(`${baseUrl}/Inter-Medium.otf`)
  }

  return { name: font, data: fontData, style: 'normal' } satisfies FontOptions
}

async function fetchFont(url: string) {
  const res = await fetch(url, { cf: { cacheTtl: 31_536_000 } })
  return res.arrayBuffer()
}
