import { Button } from 'frog'

import { backgroundStyles } from './styles'
import { CustomFrameContext } from '.'

export const homeScreen = (c: CustomFrameContext) => {
  return c.res({
    image: <div style={backgroundStyles}>hi</div>,
    intents: [
      <Button action="/base/0x4ed4e862860bed51a9570b96d89af5e1b0efefed">
        $DEGEN
      </Button>,
      <Button action="/base/0x0578d8a44db98b23bf096a382e016e29a5ce0ffe">
        $HIGHER
      </Button>,
    ],
  })
}
