import { ChainId, IS_MAINNET, JSBI, Percent, Token, WVLX } from '@wagyu-swap-libs/sdk'

export const ROUTER_ADDRESS = '0x9B5de93ea81853404741aA5baBceAa7919B0dD48'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const WAGYU = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x297170abcFC7AceA729ce128E1326bE125a7F982', 18, 'WAGYU', 'WagyuSwap Token')
export const WrapVLX = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x8153DCbdAF8740B6e101C99659613D39Dd697E34', 18, 'WVLX', 'Wrapped VLX')
export const VETHER = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0xc8100b0041e376C6E922f39A1c7270cE12f94F6f', 18, 'VETHER', 'Velas ETHER')
export const VUSDT = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0x9634eB81dDa37C30a2aD79b3000c20FDD98799aF', 18, 'VUSDT', 'Velas USDT')
export const VBNB = new Token(IS_MAINNET ? ChainId.MAINNET : ChainId.VELASTESTNET, IS_MAINNET ? '' : '0xCbe7530E3f9730F7D4A965206A00DC8347662447', 18, 'VBNB', 'Velas BNB')

const WVLX_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WVLX[ChainId.MAINNET]],
  [ChainId.VELASTESTNET]: [WVLX[ChainId.VELASTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WVLX_ONLY,
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER, VBNB],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER, VBNB],
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
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER, VBNB],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER, VBNB],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WVLX_ONLY,
  [ChainId.MAINNET]: [...WVLX_ONLY[ChainId.MAINNET], VUSDT, VETHER, VBNB],
  [ChainId.VELASTESTNET]: [...WVLX_ONLY[ChainId.VELASTESTNET], VUSDT, VETHER, VBNB],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [WAGYU, WrapVLX],
    [VUSDT, WrapVLX],
    [VUSDT, WAGYU],
    [VETHER, WAGYU],
    [VBNB, WAGYU],
  ],
  [ChainId.VELASTESTNET]: [
    [WAGYU, WrapVLX],
    [VUSDT, WrapVLX],
    [VUSDT, WAGYU],
    [VETHER, WAGYU],
    [VBNB, WAGYU],
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

// used to ensure the user doesn't send so much VLX so they end up with <.01
export const MIN_VLX: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 VLX
