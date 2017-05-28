import React from 'react'
import styled, { css } from 'styled-components'

import theme from '../../theme'

const disabledCss = css`
  cursor: not-allowed;
  opacity: 0.5;
`

const Button = styled.button`
  appearance: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  background-color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.br1};
  box-shadow: 0 0 0 1px ${theme.colors.grays.g3}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);
  color: ${theme.colors.grays.g6};
  font-size: ${theme.typeScale.f5};
  font-weight: ${theme.fontWeight.fw6};
  line-height: ${theme.lineHeight.copy};
  white-space: nowrap;
  padding: 0 ${theme.padding.m};
  min-height: ${theme.height.h2};

  transition-property: all;
  transition-duration: .15s;
  transition-timing-function: ease;

  ${p => p.small && css`
    font-size: ${theme.typeScale.f7};
    padding: 0 ${theme.padding.s};
    line-height: ${theme.lineHeight.title};
    min-height: ${theme.height.h1};
  `}

  ${p => p.large && css`
    font-size: ${theme.typeScale.f3};
  `}

  &:disabled, &[disabled] {
    ${disabledCss}
  }

  &:hover {
    box-shadow: 0 0 0 1px ${theme.colors.grays.g4}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    box-shadow: 0 0 0 1px ${theme.colors.grays.g4};
  }

`

export default Button
