import React from 'react'
import { Text } from '@wagyu-swap-libs/uikit'
import { ChainId, Currency, currencyEquals, VLX, Token } from '@wagyu-swap-libs/sdk'
import styled from 'styled-components'

import useI18n from 'hooks/useI18n'
import { SUGGESTED_BASES } from '../../constants'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { AutoRow } from '../Row'
import CurrencyLogo from '../CurrencyLogo'

const BaseWrapper = styled.div<{ disable?: boolean }>`
  border: 1px solid ${({ theme, disable }) => (disable ? 'transparent' : theme.colors.tertiary)};
  border-radius: 10px;
  display: flex;
  padding: 6px;

  align-items: center;
  :hover {
    cursor: ${({ disable }) => !disable && 'pointer'};
    background-color: ${({ theme, disable }) => !disable && theme.colors.invertedContrast};
  }

  background-color: ${({ theme, disable }) => disable && theme.colors.tertiary};
  opacity: ${({ disable }) => disable && '0.4'};
`

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: ChainId
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  const TranslateString = useI18n()
  return (
    <AutoColumn gap="md">
      <AutoRow>
        <Text fontSize="14px">Common bases</Text>
        <QuestionHelper text={TranslateString(1204, 'These tokens are commonly paired with other tokens.')} />
      </AutoRow>
      <AutoRow gap="4px">
        <BaseWrapper
          onClick={() => {
            if (!selectedCurrency || !currencyEquals(selectedCurrency, VLX)) {
              onSelect(VLX)
            }
          }}
          disable={selectedCurrency === VLX}
        >
          <CurrencyLogo currency={VLX} style={{ marginRight: 8 }} />
          <Text>VLX</Text>
        </BaseWrapper>
        {(chainId ? SUGGESTED_BASES[chainId] : []).map((token: Token) => {
          const selected = selectedCurrency instanceof Token && selectedCurrency.address === token.address
          return (
            <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
              <CurrencyLogo currency={token} style={{ marginRight: 8 }} />
              <Text>{token.symbol}</Text>
            </BaseWrapper>
          )
        })}
      </AutoRow>
    </AutoColumn>
  )
}
