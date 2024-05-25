import { Button, FrameContext, FrameIntent, TextInput } from 'frog'

import { backgroundStyles } from '../swap/styles'
import { SupportedNetwork, supportedNetworks } from '../types'

export const homeScreen = async (
  c: FrameContext,
  network?: SupportedNetwork
) => {
  if (!network) {
    return c.res({
      action: '/',
      image: (
        <div style={{ ...backgroundStyles, fontSize: 92 }}>
          <span
            style={{
              width: '100vw',
              paddingLeft: 80,
              paddingRight: 80,
              lineHeight: '1',
            }}
          >
            Easily Bridge ETH Between L2 Networks
          </span>

          <div
            style={{
              display: 'flex',
              width: '100vw',
              paddingLeft: 80,
              fontSize: 42,
              color: '#ADA6B4',
            }}
          >
            Select a network to bridge{' '}
            <span style={{ color: '#22262A', paddingLeft: 12 }}>to</span>
          </div>
        </div>
      ),
      intents: [
        <Button action={`/base`}>Base</Button>,
        <Button action={`/optimism`}>Optimism</Button>,
        <Button action={`/arbitrum`}>Arbitrum</Button>,
      ],
    })
  }

  return c.res({
    action: '/finish',
    image: (
      <div style={{ ...backgroundStyles, fontSize: 92 }}>
        <span style={{ width: '100vw', paddingLeft: 80, lineHeight: '1' }}>
          Bridge ETH to
          <span style={{ textTransform: 'capitalize', paddingLeft: 24 }}>
            {network}
          </span>
        </span>

        <div
          style={{
            display: 'flex',
            width: '100vw',
            paddingLeft: 80,
            fontSize: 42,
            color: '#ADA6B4',
          }}
        >
          Select a network to bridge{' '}
          <span style={{ color: '#22262A', paddingLeft: 12 }}>from</span>
        </div>

        <span
          style={{
            position: 'absolute',
            width: '100vw',
            color: '#ADA6B4',
            paddingLeft: 80,
            fontSize: 32,
            bottom: 20,
          }}
        >
          There may be a small fee from Across protocol
        </span>
      </div>
    ),
    intents: [
      <TextInput placeholder="ETH Amount (Default 0.01)" />,
      ...supportedNetworks
        .filter((n) => n !== network)
        .map((n) => (
          <Button.Transaction target={`/tx?to=${network}&from=${n}`}>
            {n.slice(0, 1).toUpperCase() + n.slice(1)}
          </Button.Transaction>
        )),
    ],
  })
}
