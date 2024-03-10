import { Button, TextInput } from 'frog'

import { backgroundStyles } from './styles'
import { CustomFrameContext } from '.'

export const buyScreen = (c: CustomFrameContext) => {
  const token = c.req.param('token' as never) // TODO: figure out a better way to type this

  return c.res({
    action: '/finish',
    image: <div style={backgroundStyles}>Buy Token</div>,
    intents: [
      <TextInput placeholder="ETH amount (default 0.01)" />,
      <Button.Transaction target={`/tx?token=${token}`}>
        Buy
      </Button.Transaction>,
    ],
  })
}
