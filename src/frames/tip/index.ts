import { Frog } from 'frog'

import { getFonts } from '../fonts'
import { homeScreen } from './home'
import { transaction } from './transaction'
import { finishScreen } from './finish'

export const app = new Frog({
  browserLocation: '/',
  imageOptions: async () => {
    return { fonts: await getFonts() }
  },
})

app.frame('/', homeScreen)
app.frame('/finish', finishScreen)
app.transaction('/tx', transaction)

export default app
