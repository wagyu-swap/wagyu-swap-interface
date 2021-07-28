import { MenuEntry } from '@wagyu-swap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://staging.wagyuswap.app/',
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
    href: 'https://staging.wagyuswap.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://staging.wagyuswap.app/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://staging.wagyuswap.app/lottery',
  },
]

export default config
