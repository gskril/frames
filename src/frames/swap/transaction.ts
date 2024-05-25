import { Address, parseEther } from 'viem'

import { CustomTransactionContext } from '.'
import { ZeroXSwapQuote } from './types'
import { SupportedNetwork } from '../types'
import { getChainIdFromName } from '../utils'

export const transaction = async (c: CustomTransactionContext) => {
  const token = c.req.query('token') as Address
  const network = c.req.query('network') as SupportedNetwork
  const value = c.inputText || '0.01'

  // prettier-ignore
  const baseUrl = `https://${network}.api.0x.org/swap/v1/quote?`
  const eth = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

  // https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote#request
  const params = new URLSearchParams({
    buyToken: token,
    sellToken: eth,
    sellAmount: parseEther(value).toString(),
    feeRecipient: '0x00000b0A7308257BFD464868f14D34C5108fd898',
    buyTokenPercentageFee: '0.03',
  }).toString()

  const res = await fetch(baseUrl + params, {
    headers: { '0x-api-key': c.env.ZEROX_API_KEY || '' },
  })

  const order = (await res.json()) as ZeroXSwapQuote

  return c.send({
    chainId: `eip155:${getChainIdFromName(network)}`,
    to: order.to,
    data: order.data,
    value: BigInt(order.value),
  })
}
