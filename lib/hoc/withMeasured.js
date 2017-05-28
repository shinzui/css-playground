import PropTypes from 'prop-types'
import { css } from 'styled-components'
import theme from '../theme'

const withMeasured = Component => {
  const NewComponent = Component.extend`
    ${p => p.measure && css`
      max-width: ${theme.measure[p.measure]};
    `}
  `
  NewComponent.displayName = `withMeasured${Component.displayName}`
  NewComponent.propTypes = {
    measure: PropTypes.oneOf(Object.keys(theme.measure)),
  }

  return NewComponent
}

export default withMeasured
