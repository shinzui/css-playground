import React from 'react'
import styled, { css } from 'styled-components'

import { default as Layout, Section } from '../layout/'

import Quote from '../lib/components/Quote'

export default () => (
  <Layout>
    <Section>
      <Quote
        quote="You never change things by ﬁghting the existing reality. To change something, build a new model that makes the existing model obsolete."
        cite="Buckminster Fuller"
      />
    </Section>
  </Layout>
)
