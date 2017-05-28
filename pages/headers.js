import React from 'react'
import styled, { css } from 'styled-components'
import { default as Header, H1, H2, H3, H4, H5, H6 } from '../lib/components/Header'

const Container = styled.div`
  padding-top: 4rem;
  padding-left: 1rem;
`

const Section = styled.div`
  padding-top: 2rem;
`

export default () => (
  <Container>
    <Section>
      <Header size="headline">Headline</Header> <Header size="subheadline">Subheadline</Header>
      <Header>Header h1</Header>
      <H2>Header h2</H2>
      <H3>Header h3</H3>
      <H4>Header h4</H4>
      <H5>Header h5</H5>
      <H6>Header h6</H6>
      <Header size="f3">Small H1</Header>
      <Header measure="wide">
        One who aspires to greatness should read and study, pursuing the True Way with such a firm resolve that he is perfectly straightforward and open, rises above the superficialities of conventional behavior, and refuses to be satisfied with the petty or commonplace.
      </Header>
      <Header measure="narrow">
        One who aspires to greatness should read and study, pursuing the True Way with such a firm resolve that he is perfectly straightforward and open, rises above the superficialities of conventional behavior, and refuses to be satisfied with the petty or commonplace.
      </Header>
    </Section>
  </Container>
)
