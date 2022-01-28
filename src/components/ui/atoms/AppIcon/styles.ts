import styled from 'styled-components'

type ImageProps = {
  src: string
  size: number
}

export const Image = styled.div<ImageProps>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background-image: url(${p => p.src});
  background-position: center;
  background-size: cover;
  transition: background-image 0.3s;
`
