import { createPublicClient, http } from 'viem'
import { base, mainnet } from 'viem/chains'

export const baseClient = createPublicClient({
  chain: base,
  transport: http(),
})

export const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(),
})
