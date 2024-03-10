import { Button, TextInput } from 'frog'
import { Address } from 'viem'

import { backgroundStyles } from './styles'
import { CustomFrameContext } from '.'

export const tradeScreen = (c: CustomFrameContext) => {
  // TODO: figure out a better way to type these
  const network = c.req.param('network' as never) as 'base' | 'optimism'
  const token = c.req.param('token' as never) as Address

  return c.res({
    action: '/finish',
    image: <div style={backgroundStyles}>Buy Token</div>,
    intents: [
      <TextInput placeholder="ETH amount (default 0.01)" />,
      <Button.Transaction target={`/tx?network=${network}&token=${token}`}>
        Buy
      </Button.Transaction>,
      <Button.Link href={`https://matcha.xyz/tokens/${network}/${token}`}>
        Sell
      </Button.Link>,
    ],
  })
}
