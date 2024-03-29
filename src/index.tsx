import { Frog } from 'frog'

import tipFrame from './frames/tip'
import swapFrame from './frames/swap'
import { Home } from './web/home'
import { Swaps } from './web/swaps'
import { Tips } from './web/tips'

export const app = new Frog()

app.get('/', (ctx) => ctx.html(<Home />))
app.get('/tips', (ctx) => ctx.html(<Tips />))
app.get('/swaps', (ctx) => ctx.html(<Swaps />))
app.route('/tip', tipFrame)
app.route('/swap', swapFrame)

export default app
