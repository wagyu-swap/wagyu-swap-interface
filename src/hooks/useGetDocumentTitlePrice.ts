import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const wagyuPriceUsd = priceData ? parseFloat(priceData.data[CAKE.address].price) : 0

  const wagyuPriceUsdString =
    Number.isNaN(wagyuPriceUsd) || wagyuPriceUsd === 0
      ? ''
      : ` - $${wagyuPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PancakeSwap${wagyuPriceUsdString}`
  }, [wagyuPriceUsdString])
}
export default useGetDocumentTitlePrice
