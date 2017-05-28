import React from 'react'
import styled, { css } from 'styled-components'
import withMeasured from '../../hoc/withMeasured'
import theme from '../../theme'

const Header = withMeasured(
  styled.h1`
  font-size: ${props => theme.typeScale[props.size]};
  color: ${theme.colors.grays.g7};
  font-family: ${theme.fontFamily.avenir};
`
)
Header.defaultProps = {
  size: 'f1',
}

const H2 = Header.withComponent('h2')
H2.defaultProps = {
  size: 'f2',
}

const H3 = Header.withComponent('h3')
H3.defaultProps = {
  size: 'f3',
}

const H4 = Header.withComponent('h4')
H4.defaultProps = {
  size: 'f4',
}

const H5 = Header.withComponent('h5')
H5.defaultProps = {
  size: 'f5',
}

const H6 = Header.withComponent('h6')
H6.defaultProps = {
  size: 'f6',
}

export { Header as H1, H2, H3, H4, H5, H6 }
export default Header
