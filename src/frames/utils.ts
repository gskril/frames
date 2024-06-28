import { SupportedNetwork } from './types'

export function getChainIdFromName(name: SupportedNetwork | 'ethereum') {
  switch (name) {
    case 'ethereum':
      return '1'
    case 'base':
      return '8453'
    case 'arbitrum':
      return '42161'
    case 'optimism':
      return '10'
  }
}

export function truncateAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
