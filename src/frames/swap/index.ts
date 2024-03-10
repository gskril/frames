import { FrameContext, Frog, TransactionContext } from 'frog'

import { homeScreen } from './start'
import { getFont } from '../fonts'
import { transaction } from './transaction'
import { finishScreen } from './finish'
import { tradeScreen } from './trade'
import { tokenSelectionScreen } from './token-selection'

type FrogOptions = {
  Bindings: { ZEROX_API_KEY?: string }
}

export type CustomFrameContext = FrameContext<FrogOptions>
export type CustomTransactionContext = TransactionContext<FrogOptions>

export const app = new Frog<FrogOptions>({
  browserLocation: '/swaps',
  imageOptions: async () => {
    const gilroy = await getFont('gilroy')
    const inter = await getFont('inter')

    return { fonts: [gilroy, inter] }
  },
})

app.frame('/', homeScreen)
app.frame('/token-selection', tokenSelectionScreen)
app.frame('/finish', finishScreen)
app.frame('/:network/:token', tradeScreen)
app.transaction('/tx', transaction)

export default app
