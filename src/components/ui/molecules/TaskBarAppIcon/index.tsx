import AppIcon, { AppIconProps } from 'components/ui/atoms/AppIcon'
import React from 'react'

import { Container } from './styles'

type Props = Omit<AppIconProps, 'size'> & {
  title: string
}

const TaskBarAppIcon: React.FC<Props> = ({ src, title }) => {
  return (
    <Container title={title}>
      <AppIcon className="icon" src={src} size={38} />
    </Container>
  )
}

export default TaskBarAppIcon
