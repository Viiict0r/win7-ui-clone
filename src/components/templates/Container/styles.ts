import styled from 'styled-components'

export const InterfaceContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .interface {
    height: calc(100% - 45px);
    width: 100%;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`
