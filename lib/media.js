import { css } from 'styled-components'
import theme from './theme'

const media = Object.keys(theme.breakpoints).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media screen and (min-width: ${theme.breakpoints[size]}) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
