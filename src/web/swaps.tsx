export const Swaps = () => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Frame Swap</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-normalize@2.0.0/modern-normalize.css"
        />
      </head>

      <body style={{ lineHeight: 1.25, padding: '1rem' }}>
        <h1>Frame Swap</h1>
        <p>Easily swap ETH for ERC20 tokens on Base and OP Mainnet</p>

        <p>
          The main frame is{' '}
          <code
            style={{
              backgroundColor: '#f0f0f0',
              padding: '0.125em 0.375rem',
              borderRadius: '0.25em',
            }}
          >
            https://frames.fcstr.xyz/swap
          </code>
        </p>

        <p>
          Or you can generate a frame for any ERC20 token with the format{' '}
          <code
            style={{
              backgroundColor: '#f0f0f0',
              padding: '0.125em 0.375rem',
              borderRadius: '0.25em',
            }}
          >
            https://frames.fcstr.xyz/swap/&#123;network&#125;/&#123;token_address&#125;
          </code>
        </p>

        <p>Some examples (not endorsements):</p>
        <ul>
          <li>
            https://frames.fcstr.xyz/swap/optimism/0x4200000000000000000000000000000000000042
          </li>
          <li>
            https://frames.fcstr.xyz/swap/base/0x4ed4e862860bed51a9570b96d89af5e1b0efefed
          </li>
          <li>
            https://frames.fcstr.xyz/swap/base/0x0578d8a44db98b23bf096a382e016e29a5ce0ffe
          </li>{' '}
        </ul>

        <p>
          Built by <a href="https://warpcast.com/greg">@greg</a>
        </p>
      </body>
    </html>
  )
}
