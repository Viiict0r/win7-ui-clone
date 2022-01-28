import CursorSelection from 'components/ui/organisms/CursorSelection'
import React from 'react'
import InterfaceContainer from 'components/templates/Container'
import DesktopIcon from 'components/ui/molecules/DesktopIcon'

// import { Container } from './styles';

const Desktop: React.FC = () => {
  return (
    <InterfaceContainer>
      <CursorSelection>
        <DesktopIcon />
      </CursorSelection>
    </InterfaceContainer>
  )
}

export default Desktop
