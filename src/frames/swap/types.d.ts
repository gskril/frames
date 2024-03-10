import type { Address, Hex } from 'viem'

// https://0x.org/docs/0x-swap-api/api-references/get-swap-v1-quote#response
export type ZeroXSwapQuote = {
  chainId: number
  price: string
  grossPrice: string
  estimatedPriceImpact: string
  value: string
  gasPrice: string
  gas: string
  estimatedGas: string
  protocolFee: string
  minimumProtocolFee: string
  buyTokenAddress: string
  buyAmount: string
  grossBuyAmount: string
  sellTokenAddress: string
  sellAmount: string
  grossSellAmount: string
  sources: Array<{
    name: string
    proportion: string
  }>
  allowanceTarget: string
  sellTokenToEthRate: string
  buyTokenToEthRate: string
  to: Address
  from: Address
  data: Hex
  decodedUniqueId: Hex
  guaranteedPrice: string
  orders: Array<any>
  fees: {
    zeroExFee: null
  }
  auxiliaryChainData: {
    l1GasEstimate: number
  }
}
