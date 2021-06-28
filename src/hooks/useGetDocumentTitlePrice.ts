import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { WAGYU } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const wagyuPriceUsd = priceData ? parseFloat(priceData.data[WAGYU.address]?.price || '0') : 0

  const wagyuPriceUsdString =
    Number.isNaN(wagyuPriceUsd) || wagyuPriceUsd === 0
      ? ''
      : ` - $${wagyuPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `WagyuSwap${wagyuPriceUsdString}`
  }, [wagyuPriceUsdString])
}
export default useGetDocumentTitlePrice
