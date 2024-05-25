export const supportedNetworks = ['base', 'optimism', 'arbitrum'] as const
export type SupportedNetwork = (typeof supportedNetworks)[number]
