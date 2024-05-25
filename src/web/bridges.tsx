export const Bridges = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Farcaster Frames</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-normalize@2.0.0/modern-normalize.css"
        />
      </head>

      <body style={{ lineHeight: '1.25', padding: '1rem' }}>
        <h1>Bridge ETH in a Farcaster Frame</h1>
        <p>Easily bridge ETH between Base, OP Mainnet, and Arbitrum</p>

        <p>
          The main frame is{' '}
          <code
            style={{
              backgroundColor: '#f0f0f0',
              padding: '0.125em 0.375rem',
              borderRadius: '0.25em',
            }}
          >
            https://frames.fcstr.xyz/bridge
          </code>
        </p>

        <p>
          You can generate a Frame for a specific network by customizing the
          URL:
        </p>

        <ul>
          <li>https://frames.fcstr.xyz/bridge/base</li>
          <li>https://frames.fcstr.xyz/bridge/optimism</li>
          <li>https://frames.fcstr.xyz/bridge/arbitrum</li>
        </ul>

        <p>
          Powered by <a href="https://across.to/">Across</a>
          <br />
          Built by <a href="https://warpcast.com/greg">@greg</a>
        </p>
      </body>
    </html>
  )
}
