import { MenuEntry } from '@wagyu-swap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://wagyuswap.herokuapp.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://wagyuswap.herokuapp.com/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://wagyuswap.herokuapp.com/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://wagyuswap.herokuapp.com/lottery',
  },
]

export default config
