import { Button, TextInput } from 'frog'
import { Address, parseAbi } from 'viem'

import { backgroundStyles, warningStyles, titleStyles } from './styles'
import { CustomFrameContext } from '.'
import { baseClient, optimismClient } from '../viem'

export const tradeScreen = async (c: CustomFrameContext) => {
  // TODO: figure out a better way to type these
  const network = c.req.param('network' as never) as 'base' | 'optimism'
  const token = c.req.param('token' as never) as Address
  let symbol: string = 'Unknown Token'

  if (network === 'base') {
    symbol = await baseClient.readContract({
      address: token,
      abi: parseAbi(['function symbol() view returns (string)']),
      functionName: 'symbol',
    })
  } else if (network === 'optimism') {
    symbol = await optimismClient.readContract({
      address: token,
      abi: parseAbi(['function symbol() view returns (string)']),
      functionName: 'symbol',
    })
  }

  return c.res({
    action: '/finish',
    image: (
      <div style={backgroundStyles}>
        <span style={titleStyles}>Buy ${symbol}</span>

        <span style={warningStyles}>
          This is experimental. Swap at your own risk. There is a small fee
        </span>
      </div>
    ),
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
