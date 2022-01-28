import React, { useState } from 'react'
import SelectionArea from '@viselect/react'
import { Container } from './styles'

const CursorSelection: React.FC = ({ children }) => {
  const [selected, setSelected] = useState([])

  const handleSelectionStart = () => {
    // ...
  }

  const handleSelectionMove = () => {
    // ...
  }

  return (
    <Container>
      <SelectionArea
        className="selection-container"
        selectables="is-selectable"
        onStart={handleSelectionStart}
        onMove={handleSelectionMove}
      >
        {children}
      </SelectionArea>
    </Container>
  )
}

export default CursorSelection
