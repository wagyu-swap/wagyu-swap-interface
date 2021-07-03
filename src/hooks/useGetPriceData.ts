import { useEffect, useState } from 'react'

import { VBNB, VETHER, VUSDT, WAGYU } from '../constants'

type ApiResponse = {
  updated_at: string
  data: {
    [key: string]: {
      name: string
      symbol: string
      price: string
      price_VLX: string
    }
  }
}

// const api = 'https://api.wagyuswap.info/api/tokens'
const api = 'https://explorer.Velas.com/ticker'
// const api = 'http://localhost:3000/api/tokens'

// data:
//   0x0C038Bc02C8C9945f194b17C703f800526900A74:
// name: "SuperNova Protocol"
// price: "0.01803998730130641259134893653591999"
// price_VLX: "0.00004547690090850844524878310961274202"
// symbol: "SUPERN"
// updated_at:

const convertTokenPrices = (prices: any): ApiResponse => {
  const response = {
    update_at: '',
    data: Object
  };
  response.update_at = new Date().getTime().toString();
  response.data[`${WAGYU.address}`] = {
    name: WAGYU.name || '',
    symbol: WAGYU.symbol || '',
    price: '1.000',
    price_VLX: (prices.usdt_price / prices.price_usd).toString()
  }
  response.data[`${VUSDT.address}`] = {
    name: VUSDT.name || '',
    symbol: VUSDT.symbol || '',
    price: prices.usdt_price.toString(),
    price_VLX: (prices.usdt_price / prices.price_usd).toString()
  }
  response.data[`${VETHER.address}`] = {
    name: VETHER.name || '',
    symbol: VETHER.symbol || '',
    price: prices.eth_price.toString(),
    price_VLX: (prices.eth_price / prices.price_usd).toString()
  }
  response.data[`${VBNB.address}`] = {
    name: VBNB.name || '',
    symbol: VBNB.symbol || '',
    price: (prices.eth_price / 6).toString(),
    price_VLX: (prices.eth_price / 6 / prices.price_usd).toString()
  }
  // @ts-ignore
  return response
}

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()
        setData(convertTokenPrices(res))
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetPriceData
