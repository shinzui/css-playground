import React from 'react'
import styled from 'styled-components'

import theme from '../lib/theme'

const Container = styled.div`
  padding-top: 4rem;
  padding-left: 1rem;
  font-family: ${theme.fontFamily.avenir};
`

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)
