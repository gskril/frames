import { Frog } from 'frog'

import { Home } from './web'
import tipFrame from './frames/tip'
import swapFrame from './frames/swap'

export const app = new Frog()

app.get('/', (ctx) => ctx.html(<Home />))
app.route('/tip', tipFrame)
app.route('/swap', swapFrame)

export default app
