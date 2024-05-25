import { TransactionContext } from 'frog'
import { Address, parseEther, isAddress } from 'viem'

import { SupportedNetwork } from '../types'
import { getChainIdFromName } from '../utils'
import { spokePoolContractAbi } from './across'

// Bridging powered by Across
// https://docs.across.to/integration-guides/across-bridge-integration
export const transaction = async (c: TransactionContext) => {
  const toNetwork = c.req.query('to') as SupportedNetwork
  const fromNetwork = c.req.query('from') as SupportedNetwork
  const bridgeAmount = c.inputText || '0.01'

  console.log(toNetwork)

  if (!c.address || !isAddress(c.address)) {
    return c.error({ message: 'No address found' })
  }

  const wethByChain = {
    base: '0x4200000000000000000000000000000000000006',
    arbitrum: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    optimism: '0x4200000000000000000000000000000000000006',
  } as const

  const inputToken = wethByChain[fromNetwork]
  const outputToken = wethByChain[toNetwork]
  const parsedAmount = parseEther(bridgeAmount)
  const destinationChainId = getChainIdFromName(toNetwork)

  const url = 'https://app.across.to/api/suggested-fees'
  const params = new URLSearchParams({
    inputToken,
    outputToken,
    originChainId: getChainIdFromName(fromNetwork),
    destinationChainId,
    amount: parsedAmount.toString(),
  })

  console.log(params)

  const endpoint = `${url}?${params.toString()}`
  const acrossRes = await fetch(endpoint)
  const across = (await acrossRes.json()) as {
    totalRelayFee: { total: string }
    timestamp: string
    spokePoolAddress: Address
  }

  return c.contract({
    abi: spokePoolContractAbi,
    to: across.spokePoolAddress,
    chainId: `eip155:${getChainIdFromName(fromNetwork)}`,
    value: parseEther(bridgeAmount),
    functionName: 'depositV3',
    args: [
      c.address, // depositor
      c.address, // recipient
      inputToken, // inputToken
      outputToken, // outputToken
      parsedAmount, // inputAmount
      parsedAmount - BigInt(across.totalRelayFee.total), // outputAmount
      BigInt(destinationChainId), // destinationChainId
      '0x0000000000000000000000000000000000000000', // exclusiveRelayer
      Number(across.timestamp), // quoteTimestamp
      Math.round(Date.now() / 1000) + 600, // fillDeadline (10 minutes)
      0, // exclusivityDeadline
      '0x', // message
    ],
  })
}
