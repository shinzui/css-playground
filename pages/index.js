import React from 'react'
import styled, { css } from 'styled-components'

import { default as Layout, Section } from '../layout/'
import Link from 'next/link'

export default () => (
  <Layout>
    <Section>
      <Link href="buttons">
        <a>Buttons</a>
      </Link>
    </Section>
    <Section>
      <Link href="headers">
        <a>Headers</a>
      </Link>
    </Section>
    <Section>
      <Link href="quotes">
        <a>Quotes</a>
      </Link>
    </Section>
  </Layout>
)
