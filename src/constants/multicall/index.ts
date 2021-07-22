import { ChainId } from '@wagyu-swap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xC70b3De226fDa9D25F681879b0B026BeeBDc833f',
  [ChainId.VELASTESTNET]: '0xC70b3De226fDa9D25F681879b0B026BeeBDc833f'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
