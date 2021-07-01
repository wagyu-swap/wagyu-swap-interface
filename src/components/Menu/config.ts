import { MenuEntry } from '@wagyu-swap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://wagyuswap.finance/',
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
    href: 'https://wagyuswap.finance/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://wagyuswap.finance/pools',
  // },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://wagyuswap.finance/lottery',
  },
]

export default config
