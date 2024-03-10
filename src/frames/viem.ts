import { createPublicClient, http } from 'viem'
import { base, optimism } from 'viem/chains'

export const baseClient = createPublicClient({
  chain: base,
  transport: http(),
})

export const optimismClient = createPublicClient({
  chain: optimism,
  transport: http(),
})
