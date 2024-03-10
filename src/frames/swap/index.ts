import { FrameContext, Frog, TransactionContext } from 'frog'

import { homeScreen } from './start'
import { getFont } from '../fonts'
import { transaction } from './transaction'
import { finishScreen } from './finish'
import { buyScreen } from './buy'

type FrogOptions = {
  Bindings: { ZEROX_API_KEY?: string }
}

export type CustomFrameContext = FrameContext<FrogOptions>
export type CustomTransactionContext = TransactionContext<FrogOptions>

export const app = new Frog<FrogOptions>({
  browserLocation: '/',
  imageOptions: async () => ({ fonts: await getFont('inter') }),
})

app.frame('/', homeScreen)
app.frame('/buy/:token', buyScreen)
app.frame('/finish', finishScreen)
app.transaction('/tx', transaction)

export default app
