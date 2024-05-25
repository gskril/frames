import { Frog } from 'frog'

import { homeScreen } from './home'
import { getFont } from '../fonts'
import { transaction } from './transaction'
import { finishScreen } from './finish'

export const app = new Frog({
  browserLocation: '/bridges',
  imageOptions: async () => ({ fonts: [await getFont('satoshi')] }),
})

app.frame('/', homeScreen)
app.frame('/base', (c) => homeScreen(c, 'base'))
app.frame('/optimism', (c) => homeScreen(c, 'optimism'))
app.frame('/arbitrum', (c) => homeScreen(c, 'arbitrum'))
app.frame('/finish', finishScreen)
app.transaction('/tx', transaction)

export default app
