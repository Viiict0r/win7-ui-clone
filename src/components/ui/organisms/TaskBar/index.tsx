import StartButton from 'components/ui/molecules/StartButton'
import TaskBarAppIcon from 'components/ui/molecules/TaskBarAppIcon'
import React from 'react'

import { Container, AppBar } from './styles'

const TaskBar: React.FC = () => {
  return (
    <Container>
      <StartButton />
      <AppBar>
        <TaskBarAppIcon
          title="Internet Explorer"
          src="/images/icons/internet-explorer.png"
        />
        <TaskBarAppIcon title="Explorer" src="/images/icons/explorer.png" />
      </AppBar>
    </Container>
  )
}

export default TaskBar
