import { CustomFrameContext } from '.'

export const finishScreen = (c: CustomFrameContext) => {
  return c.res({
    image: <div style={{ display: 'flex' }}>Thanks for trading</div>,
  })
}
