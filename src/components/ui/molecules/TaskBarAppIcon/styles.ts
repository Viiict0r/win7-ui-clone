import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 5px;
  position: relative;

  .icon {
    margin: 0 10px;
    position: relative;
    z-index: 2;

    &:after {
      content: '';
      transition: all 0.2s;
      height: 75%;
      width: 1px;
      left: -8px;
      top: 5px;
      position: absolute;
      z-index: 0;
    }

    &:hover:after,
    &:hover:before {
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 0.3);
    }

    &:before {
      content: '';
      transition: all 0.2s;
      height: 75%;
      width: 1px;
      right: -8px;
      top: 5px;
      position: absolute;
      z-index: 0;
    }
  }
`
