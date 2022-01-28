import * as AppIcon from 'components/ui/atoms/AppIcon/styles'
import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;
  padding: 10px;
  text-align: center;

  /* Apply only for selected */
  /* filter: invert(54%) sepia(98%) saturate(1071%) hue-rotate(168deg)
    brightness(96%) contrast(101%); */

  ${AppIcon.Image} {
    margin-bottom: 1px;
  }

  span {
    line-height: 20px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 2px 2px #000000;
  }
`
