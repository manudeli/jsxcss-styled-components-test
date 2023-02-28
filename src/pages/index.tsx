import { Box } from '@jsxcss/styled-components'
import { useState } from 'react'
import styled, { css } from 'styled-components'

const boxStyle = css`
  background-color: red;
  width: 300px;
  height: 300px;
`

const Hi = styled.div``

const StyledComponents = () => {
  return (
    <Hi>
      <Box css={boxStyle} />
      <Box css={boxStyle} />
      <Box css={boxStyle} />
    </Hi>
  )
}

export default StyledComponents
