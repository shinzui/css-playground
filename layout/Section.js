import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  padding-top: 2rem;
`

export default ({ children }) => (
  <Section>
    {children}
  </Section>
)
