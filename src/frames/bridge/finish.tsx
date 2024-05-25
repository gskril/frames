import { FrameContext } from 'frog'

import { backgroundStyles } from '../swap/styles'

export const finishScreen = async (c: FrameContext) => {
  return c.res({
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
          Your ETH should arrive in a few seconds
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
          Created by @greg
        </div>
      </div>
    ),
  })
}
