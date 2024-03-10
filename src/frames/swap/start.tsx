import { Button } from 'frog'

import { backgroundStyles, titleStyles } from './styles'
import { CustomFrameContext } from '.'
import { assets } from './token-selection'

export const homeScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div
        style={{ ...backgroundStyles, padding: 64, backgroundColor: '#6944BA' }}
      >
        <div
          style={{
            ...backgroundStyles,
            position: 'relative',
            border: '2px solid rgba(15, 36, 56, 0.1)',
            borderRadius: 32,
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', gap: -16 }}>
            {assets.map((asset, i) => (
              <img
                src={asset.image}
                width={54}
                height={54}
                style={{ borderRadius: 99 }}
              />
            ))}
          </div>

          <span style={titleStyles}>Frame Swap</span>

          <span style={{ color: '#5E6773', fontSize: 48 }}>
            Easily trade ERC20 tokens
          </span>
        </div>
      </div>
    ),
    intents: [<Button action={`/token-selection`}>Get Started</Button>],
  })
}
