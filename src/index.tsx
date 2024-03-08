import { Button, Frog, TextInput } from 'frog'
import { backgroundStyles, logo } from './styles'
import { Address, parseEther } from 'viem'
import {
  getUserDataByFid,
  getEthAddressFromFid,
  getFidFromUsername,
} from './hub'

export const app = new Frog()

app.frame('/tip', async (ctx) => {
  const { username } = ctx.req.query()

  const fid = await getFidFromUsername(username)
  const [address, description, pfp] = await Promise.all([
    getEthAddressFromFid(fid),
    getUserDataByFid(fid, 3),
    getUserDataByFid(fid, 1),
  ])

  return ctx.res({
    action: '/tip/finish',
    image: (
      <div style={{ ...backgroundStyles }}>
        <div style={{ display: 'flex' }}>
          <span style={{ paddingTop: 48 }}>Tip @{username}</span>
          <img
            src={pfp}
            width={224}
            style={{
              position: 'absolute',
              right: 0,
              borderRadius: 999,
              boxShadow: '2px 2px 100px 32px rgba(133, 93, 205, 0.3)',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            padding: '60px 80px',
            width: '100vw',
          }}
        >
          <span
            style={{
              fontSize: 30,
              color: '#ADA6B4',
            }}
          >
            {description}
          </span>
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="ETH Amount" />,
      <Button.Transaction target={`/tip/tx?address=${address}&network=8453`}>
        Tip on Base
      </Button.Transaction>,
      <Button.Transaction target={`/tip/tx?address=${address}&network=10`}>
        Tip on Optimism
      </Button.Transaction>,
    ],
  })
})

app.transaction('/tip/tx', async (ctx) => {
  const address = ctx.req.query('address') as Address
  const network = ctx.req.query('network') as '10' | '8453'

  const { inputText } = ctx
  const tipAmount = inputText || '0.001'

  return ctx.send({
    chainId: `eip155:${network}`,
    to: address,
    value: parseEther(tipAmount),
  })
})

app.frame('/tip/finish', (ctx) => {
  return ctx.res({
    image: (
      <div style={{ ...backgroundStyles }}>
        <div style={{ display: 'flex' }}>
          <span style={{ paddingTop: 48, width: '75%', lineHeight: 1 }}>
            Thanks for tipping!
          </span>
          <img
            src="https://github.com/vrypan/farcaster-brand/blob/main/icons/icon-transparent/transparent-purple.png?raw=true"
            width={224}
            style={{
              position: 'absolute',
              right: 0,
              borderRadius: 32,
              boxShadow: '2px 2px 100px 32px rgba(133, 93, 205, 0.3)',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            padding: '60px 80px',
            width: '100vw',
          }}
        >
          <span
            style={{
              fontSize: 30,
              color: '#ADA6B4',
            }}
          >
            Created by @greg
          </span>
        </div>
      </div>
    ),
  })
})

export default app
