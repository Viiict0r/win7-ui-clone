import AppIcon from 'components/ui/atoms/AppIcon'
import React from 'react'

import { Container } from './styles'

const DesktopIcon: React.FC = () => {
  return (
    <Container>
      <AppIcon src="/images/icons/trash.png" size={40} />
      <span>Lixeira</span>
    </Container>
  )
}

export default DesktopIcon
