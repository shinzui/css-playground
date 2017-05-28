import React from 'react'
import styled, { css } from 'styled-components'

import { default as Layout, Section } from '../layout'

import { default as Button, PrimaryButton } from '../lib/components/Button'

export default () => (
  <Layout>
    <Section>
      <Button>Button</Button>
    </Section>
    <Section>
      <Button disabled>Disabled</Button>
    </Section>
    <Section>
      <Button>
        Some Very Long Text
      </Button>
    </Section>
    <Section>
      <Button small>
        Small
      </Button>
    </Section>
    <Section>
      <Button large>
        Large
      </Button>
    </Section>
    <Section>
      <PrimaryButton>Primary</PrimaryButton>
    </Section>
    <Section>
      <PrimaryButton large>Large Primary</PrimaryButton>
    </Section>
    <Section>
      <PrimaryButton disabled>Disabled</PrimaryButton>
    </Section>
    <Section>
      <PrimaryButton name="test">
        Some Very Long Text
      </PrimaryButton>
    </Section>
  </Layout>
)
