import { Button } from 'frog'

import { backgroundStyles } from './styles'
import { CustomFrameContext } from '.'

export const homeScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={backgroundStyles}>
        <span style={{ fontSize: 106 }}>Frame Swap</span>
        <span style={{ color: '#5E6773' }}>Easily trade memecoins</span>
      </div>
    ),
    intents: [<Button action={`/token-selection`}>Get Started</Button>],
  })
}
