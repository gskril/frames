import { Button, FrameContext, TextInput } from 'frog'
import { backgroundStyles } from './styles'
import {
  getEthAddressFromFid,
  getFidFromUsername,
  getUserDataByFid,
} from '../hub'

export const homeScreen = async (c: FrameContext) => {
  const username = c.inputText || c.req.query('username')

  if (!username) {
    return c.res({
      action: '/',
      image: (
        <div style={{ ...backgroundStyles }}>
          <div style={{ display: 'flex' }}>
            <span style={{ paddingTop: 48 }}>Tip Your Farcaster Friends</span>
            <img
              src="https://github.com/vrypan/farcaster-brand/blob/main/icons/icon-transparent/transparent-purple.png?raw=true"
              width={224}
              height={224}
              style={{
                position: 'absolute',
                right: 0,
                borderRadius: 32,
                boxShadow: '2px 2px 100px 32px rgba(133, 93, 205, 0.3)',
                objectFit: 'cover',
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
      intents: [
        <TextInput placeholder="Farcaster username" />,
        <Button>Next</Button>,
      ],
    })
  }

  let fid: number, address: string, description: string, pfp: string

  try {
    fid = await getFidFromUsername(username)
    const promises = await Promise.all([
      getEthAddressFromFid(fid),
      getUserDataByFid(fid, 3),
      getUserDataByFid(fid, 1),
    ])
    address = promises[0]
    description = promises[1]
    pfp = promises[2]

    if (!address) throw new Error('No address found')
  } catch (err) {
    return c.res({
      action: '/',
      image: (
        <div style={{ ...backgroundStyles }}>
          <div style={{ display: 'flex' }}>
            <span style={{ paddingTop: 48 }}>Something went wrong :/</span>
          </div>
        </div>
      ),
      intents: [<Button>Restart</Button>],
    })
  }

  return c.res({
    action: '/finish',
    image: (
      <div style={{ ...backgroundStyles }}>
        <div style={{ display: 'flex' }}>
          <span style={{ paddingTop: 48 }}>Tip @{username}</span>
          <img
            src={pfp}
            width={224}
            height={224}
            style={{
              position: 'absolute',
              right: 0,
              borderRadius: 999,
              boxShadow: '2px 2px 100px 32px rgba(133, 93, 205, 0.3)',
              objectFit: 'cover',
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
      <Button.Transaction target={`/tx?address=${address}&network=8453`}>
        Tip on Base
      </Button.Transaction>,
      <Button.Transaction target={`/tx?address=${address}&network=10`}>
        Tip on Optimism
      </Button.Transaction>,
    ],
  })
}
