import { CustomFrameContext } from '.'
import { backgroundStyles, titleStyles } from './styles'

export const finishScreen = (c: CustomFrameContext) => {
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
          <span style={titleStyles}>Thanks for using Frame Swap</span>
        </div>
      </div>
    ),
  })
}
