import { Address, parseEther } from 'viem'

import { CustomTransactionContext } from '.'
import { SupportedNetwork, ZeroXSwapQuote } from './types'

export const transaction = async (c: CustomTransactionContext) => {
  const token = c.req.query('token') as Address
  const network = c.req.query('network') as 'base' | 'optimism'
  const value = c.inputText || '0.01'

  // prettier-ignore
  const baseUrl = `https://${network}.api.0x.org/swap/v1/quote?`
  const eth = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

  // https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote#request
  const params = new URLSearchParams({
    buyToken: token,
    sellToken: eth,
    sellAmount: parseEther(value).toString(),
    feeRecipient: '0x179A862703a4adfb29896552DF9e307980D19285',
    buyTokenPercentageFee: '0.01',
  }).toString()

  const res = await fetch(baseUrl + params, {
    headers: { '0x-api-key': c.env.ZEROX_API_KEY || '' },
  })

  const order = (await res.json()) as ZeroXSwapQuote

  return c.send({
    chainId: `eip155:${network === 'base' ? '8453' : '10'}`,
    to: order.to,
    data: order.data,
    value: BigInt(order.value),
  })
}

const tokenMap = new Map<Address, SupportedNetwork>([
  ['0x0578d8a44db98b23bf096a382e016e29a5ce0ffe', '8453'],
  ['0x4ed4e862860bed51a9570b96d89af5e1b0efefed', '8453'],
])
