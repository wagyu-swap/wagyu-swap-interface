// eslint-disable-next-line import/no-unresolved
import { WagyuTheme } from '@wagyu-swap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends WagyuTheme {}
}
