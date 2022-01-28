import styled from 'styled-components'

export const Container = styled.div`
  height: 45px;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 100%;

  /* background: linear-gradient(
    to right,
    rgba(0, 130, 190, 0.23) 0%,
    rgba(0, 130, 190, 0.23) 10%,
    rgba(0, 130, 190, 0.28) 15%,
    rgba(0, 130, 190, 0.28) 75%,
    rgba(0, 130, 190, 0.35) 85%,
    rgba(0, 130, 190, 0.35) 100%
  ); */
  background-color: rgba(0, 0, 0, 0.13);
  backdrop-filter: blur(14.4px);
  -webkit-backdrop-filter: blur(14.4px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    box-shadow: inset 0px 25px 25px -25px rgba(255, 255, 255, 0.5),
      0px 10px 15px -3px rgba(255, 255, 255, 0.2);
  }
`

export const AppBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  z-index: 1;
`
