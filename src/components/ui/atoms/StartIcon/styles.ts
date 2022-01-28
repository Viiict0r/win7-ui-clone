import styled from 'styled-components'

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  width: 45px;
  height: 45px;
  background-image: url(${p => p.src});
  background-position: center;
  background-size: cover;
  transition: background-image 0.3s;
`
