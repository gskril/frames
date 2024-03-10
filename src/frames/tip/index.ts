import { Frog } from 'frog'

import { homeScreen } from './home'
import { transaction } from './transaction'
import { finishScreen } from './finish'
import { getFont } from '../fonts'

export const app = new Frog({
  browserLocation: '/tips',
  imageOptions: async () => ({ fonts: [await getFont('satoshi')] }),
})

app.frame('/', homeScreen)
app.frame('/finish', finishScreen)
app.transaction('/tx', transaction)

export default app
