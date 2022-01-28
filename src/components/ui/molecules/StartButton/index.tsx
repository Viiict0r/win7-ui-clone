import StartIcon, { IconStatus } from 'components/ui/atoms/StartIcon'
import React, { useState } from 'react'

import { Container } from './styles'

const StartButton: React.FC = () => {
  const [buttonState, setButtonState] = useState<IconStatus>(IconStatus.NORMAL)

  const handleMouseOver = () => {
    // ...
    if (buttonState !== IconStatus.PRESSED) {
      setButtonState(IconStatus.HOVER)
    }
  }

  const handleMouseOut = () => {
    // ...
    if (buttonState !== IconStatus.PRESSED) {
      setButtonState(IconStatus.NORMAL)
    }
  }

  const handleClick = () => {
    // ...
    setButtonState(IconStatus.PRESSED)
  }

  return (
    <Container title="Iniciar">
      <StartIcon
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        status={buttonState}
      />
    </Container>
  )
}

export default StartButton
