import TaskBar from 'components/ui/organisms/TaskBar'
import React from 'react'

import { InterfaceContainer } from './styles'

const Container: React.FC = ({ children }) => {
  return (
    <InterfaceContainer>
      <div className="interface">{children}</div>
      <footer>
        <TaskBar />
      </footer>
    </InterfaceContainer>
  )
}

export default Container
