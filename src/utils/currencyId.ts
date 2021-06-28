import { Currency, VLX, Token } from '@wagyu-swap-libs/sdk'

export function currencyId(currency: Currency): string {
  if (currency === VLX) return 'BNB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
