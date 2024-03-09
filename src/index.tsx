import { Frog } from 'frog'

import { Home } from './web'
import tipFrame from './frames/tip/index'

export const app = new Frog()

app.get('/', (ctx) => ctx.html(<Home />))
app.route('/tip', tipFrame)

export default app
