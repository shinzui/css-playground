import Button from './Button'
import theme from '../../theme'

const PrimaryButton = Button.extend`
  background-color: ${theme.colors.blues.b5};
  color: ${theme.colors.white};
  box-shadow: 0 0 0 1px ${theme.colors.blues.b4}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

  &:hover {
    background-color: ${theme.colors.blues.b4};
    box-shadow: 0 0 0 1px ${theme.colors.blues.b3}, 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    background-color: ${theme.colors.blues.b4};
    box-shadow: 0 0 0 1px ${theme.colors.blues.b3};
  }
`

export default PrimaryButton
