import { TransactionContext } from 'frog'
import { Address, parseEther } from 'viem'

export const transaction = async (c: TransactionContext) => {
  const address = c.req.query('address') as Address
  const network = c.req.query('network') as '10' | '8453'

  const { inputText } = c
  const tipAmount = inputText || '0.001'

  return c.send({
    chainId: `eip155:${network}`,
    to: address,
    value: parseEther(tipAmount),
  })
}
