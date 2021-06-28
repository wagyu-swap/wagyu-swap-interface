import { ChainId, IS_MAINNET, JSBI, Percent, Token, WVLX } from '@wagyu-swap-libs/sdk'

export const ROUTER_ADDRESS = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const WAGYU = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0xb0922F3D63A55517468b6Eb4383f2CaD3Abf856D', 18, 'WAGYU', 'WagyuSwap Token')
export const WrapVLX = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0xf70A6F553f201Ca0fdb373d6D9A485e488cde961', 18, 'WVLX', 'Wrapped VLX')
export const VUSDT = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x8C6Ec568a4054CF910A6212e8Ac6489aF77435E7', 18, 'vUSDT', 'Velas USDT')
export const VETHER = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x8488d7Cf60E3054cCb6164694D6C4fE111FCb656', 18, 'vETHER', 'Velas ETHER')

const WVLX_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WVLX[ChainId.MAINNET]],
  [ChainId.VELASTESTNET]: [WVLX[ChainId.VELASTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WVLX_ONLY,
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
  [ChainId.VELASTESTNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WVLX_ONLY,
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WVLX_ONLY,
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [WAGYU, WrapVLX],
    [VUSDT, WAGYU],
    [VETHER, WAGYU],
  ],
  [ChainId.VELASTESTNET]: [
    [WAGYU, WrapVLX],
    [VUSDT, WAGYU],
    [VETHER, WAGYU],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
