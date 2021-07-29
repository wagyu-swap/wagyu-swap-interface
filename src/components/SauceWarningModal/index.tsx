import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@wagyu-swap-libs/uikit'
import { AlertTriangle } from 'react-feather'
import Modal from '../Modal'
import { AutoRow, RowBetween } from '../Row'
import { AutoColumn } from '../Column'

const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
`

const StyledWarningIcon = styled(AlertTriangle)`
  stroke: ${({ theme }) => theme.colors.failure};
`

export default function SauceWarningModal({
  isOpen,
  transactionType,
  onConfirm,
}: {
  isOpen: boolean
  transactionType: string | null
  onConfirm: () => void
}) {
  const [understandChecked, setUnderstandChecked] = useState(false)
  const toggleUnderstand = useCallback(() => setUnderstandChecked((uc) => !uc), [])

  const handleDismiss = useCallback(() => null, [])
  return (
    <Modal isOpen={isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledWarningIcon />
            <Text color="failure">Sauce Warning</Text>
          </AutoRow>
          {transactionType !== '' && (
            <>
              <Text color="failure">
                Please be careful when <strong>{transactionType}</strong> SAUCE.
              </Text>
              <Text color="failure">
                {transactionType === 'Buying'
                  ? 'You will not receive WAGYU rewards for holding purchased SAUCE.'
                  : 'You will need to buy back the same amount of SAUCE to be able to convert back to WAGYU.'}
              </Text>
            </>
          )}
          <RowBetween>
            <div>
              <label htmlFor="understand-checkbox" style={{ cursor: 'pointer', userSelect: 'none' }}>
                <input
                  id="understand-checkbox"
                  type="checkbox"
                  className="understand-checkbox"
                  checked={understandChecked}
                  onChange={toggleUnderstand}
                />{' '}
                <Text as="span">I understand</Text>
              </label>
            </div>
            <Button
              disabled={!understandChecked}
              variant="danger"
              style={{ width: '140px' }}
              onClick={() => {
                setUnderstandChecked(false)
                onConfirm()
              }}
            >
              Continue
            </Button>
          </RowBetween>
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}
