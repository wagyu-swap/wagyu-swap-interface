import { MenuEntry } from '@wagyu-swap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://d2hlj97m1t9tlc.cloudfront.net/',
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
    href: 'https://d2hlj97m1t9tlc.cloudfront.net/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://d2hlj97m1t9tlc.cloudfront.net/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://d2hlj97m1t9tlc.cloudfront.net/lottery',
  },
]

export default config
