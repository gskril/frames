import { Frog } from 'frog'

import { Home } from './web'
import { getFonts } from './frames/fonts'

export const app = new Frog({
  browserLocation: '/',
  imageOptions: async () => {
    return { fonts: await getFonts() }
  },
})

app.hono.get('/', (ctx) => ctx.html(<Home />))
