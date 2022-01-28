import React, { HTMLAttributes } from 'react'

import { Image } from './styles'

export type AppIconProps = HTMLAttributes<HTMLDivElement> & {
  src: string
  size?: number
}

const AppIcon: React.FC<AppIconProps> = ({ src, size = 38, ...rest }) => {
  return <Image src={src} size={size} {...rest} />
}

export default AppIcon
