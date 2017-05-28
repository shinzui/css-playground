import React from 'react'
import styled, { css } from 'styled-components'

import theme from '../../theme'
import media from '../../media'

const Quote = ({ className, quote, cite }) => (
  <blockquote className={className}>
    <p>
      {quote}
    </p>
    <cite>{cite}</cite>
  </blockquote>
)

Quote.displayName = 'Quote'

export default styled(Quote)`
  font-family: ${theme.fontFamily.athelas};
  border-left-style: solid;
  border-left-width: ${theme.borderWidth.bw2};
  border-color: ${theme.colors.blues.b5};
  padding-left: ${theme.spacing.l};
  margin-left: 0;
  margin-top: 0;
  color: ${theme.colors.blacks.b90};


  & > p {
    font-size: ${theme.typeScale.f5};
    margin-top: 0;
    line-height: ${theme.lineHeight.copy};
    max-width: ${theme.measure.default};

    ${media.l`font-size: ${theme.typeScale.f3};`}
    ${media.m`font-size: ${theme.typeScale.f4};`}
  }
  & > cite {
    font-size: ${theme.typeScale.f6};
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: ${theme.tracked.default};
  }
  cite:before {
    content: '\\2014 \\00A0';
  }
`
