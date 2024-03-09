import { FrameContext } from 'frog'
import { backgroundStyles } from './styles'

export const finishScreen = async (c: FrameContext) => {
  return c.res({
    image: (
      <div style={{ ...backgroundStyles }}>
        <div style={{ display: 'flex' }}>
          <span style={{ paddingTop: 48, width: '75%', lineHeight: 1 }}>
            Thanks for tipping!
          </span>
          <img
            src="https://github.com/vrypan/farcaster-brand/blob/main/icons/icon-transparent/transparent-purple.png?raw=true"
            width={224}
            style={{
              position: 'absolute',
              right: 0,
              borderRadius: 32,
              boxShadow: '2px 2px 100px 32px rgba(133, 93, 205, 0.3)',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            padding: '60px 80px',
            width: '100vw',
          }}
        >
          <span
            style={{
              fontSize: 30,
              color: '#ADA6B4',
            }}
          >
            Created by @greg
          </span>
        </div>
      </div>
    ),
  })
}
