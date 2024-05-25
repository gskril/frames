import { Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

import tipFrame from './frames/tip'
import swapFrame from './frames/swap'
import bridgeFrame from './frames/bridge'
import { Home } from './web/home'
import { Swaps } from './web/swaps'
import { Tips } from './web/tips'
import { Bridges } from './web/bridges'

export const app = new Frog()

app.get('/', (ctx) => ctx.html(<Home />))
app.get('/tips', (ctx) => ctx.html(<Tips />))
app.get('/swaps', (ctx) => ctx.html(<Swaps />))
app.get('/bridges', (ctx) => ctx.html(<Bridges />))
app.route('/tip', tipFrame)
app.route('/swap', swapFrame)
app.route('/bridge', bridgeFrame)

// devtools(app, { serveStatic })
export default app
