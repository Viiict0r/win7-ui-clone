import React, { HTMLAttributes } from 'react'

import { Image } from './styles'

export enum IconStatus {
  NORMAL = 'normal',
  HOVER = 'hover',
  PRESSED = 'pressed'
}

type Props = HTMLAttributes<HTMLDivElement> & {
  status: IconStatus
}

const StartIcon: React.FC<Props> = ({
  status = IconStatus.NORMAL,
  ...props
}) => {
  const image = {
    [IconStatus.NORMAL]: '/images/start-icon-normal.png',
    [IconStatus.HOVER]: '/images/start-icon-hover.png',
    [IconStatus.PRESSED]: '/images/start-icon-pressed.png'
  }

  return <Image {...props} src={image[status] as string} />
}

export default StartIcon
