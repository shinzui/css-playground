import React from 'react'
import styles, { css } from 'styled-components'

import theme from '../../theme'

const ListItem = styles.li`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.s};
  transition: all 100ms linear;

  &:hover {
    background-color: ${theme.colors.blues.b0};
  }
`

export default ListItem
