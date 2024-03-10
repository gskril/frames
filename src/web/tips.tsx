export const Tips = () => {
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

      <body style={{ lineHeight: 1.25, padding: '1rem' }}>
        <h1>ETH Tipping in a Farcaster Frame</h1>
        <p>
          Just cast with the link{' '}
          <code
            style={{
              backgroundColor: '#f0f0f0',
              padding: '0.125em 0.375rem',
              borderRadius: '0.25em',
            }}
          >
            https://frames.fcstr.xyz/tip?username=&#123;your_username_here&#125;
          </code>
        </p>

        <p>Some examples:</p>
        <ul>
          <li>https://frames.fcstr.xyz/tip?username=greg</li>
          <li>https://frames.fcstr.xyz/tip?username=ted</li>
          <li>https://frames.fcstr.xyz/tip?username=zachterrell</li>
          <li>https://frames.fcstr.xyz/tip?username=dwr.eth</li>
        </ul>

        <p>
          Built by <a href="https://warpcast.com/greg">@greg</a>
        </p>
      </body>
    </html>
  )
}
