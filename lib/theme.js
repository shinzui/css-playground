const theme = {}

theme.breakpoints = {
  s: '38em',
  m: '62em',
  l: '68em',
  xl: '110em',
}

theme.colors = {
  primary: '#1e50a2',
  white: '#fff',
  blues: {
    b0: '#e8edf5',
    b1: '#cfdaeb',
    b2: '#b2c4df',
    b3: '#90a9d1',
    b4: '#6487bf',
    b5: '#1a4891',
    b6: '#133366',
    b7: '#0d2346',
  },
  grays: {
    g0: '#f9f9f9',
    g1: '#ecedef',
    g2: '#dfe0e3',
    g3: '#d0d3d7',
    g4: '#9aa0a8',
    g5: '#828994',
    g6: '#646c7a',
    g7: '#393f49',
  },
  blacks: {
    b90: 'rgba(0,0,0,.9)',
  },
}

theme.fontFamily = {
  avenir: "'avenir next', avenir, sans-serif",
  athelas: 'athelas, georgia, serif',
  cjk: "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans GB', 'Hiragino Kaku Gothic Pro'",
}

theme.borderRadius = {
  br1: '0.125rem',
  br2: '0.25rem',
  br3: '.5rem',
  br4: '1rem',
}

theme.borderWidth = {
  bw1: '0.125rem',
  bw2: '0.25rem',
  bw3: '.5rem',
  bw4: '1rem',
  bw5: '2rem',
}

theme.typeScale = {
  headline: '6em',
  subheadline: '5em',
  f1: '3rem',
  f2: '2.25rem',
  f3: '1.5rem',
  f4: '1.25rem',
  f5: '1rem',
  f6: '.875rem',
  f7: '.075rem',
}

//http://tachyons.io/docs/typography/measure/
theme.measure = {
  default: '30em',
  wide: '34em',
  narrow: '30em',
}

//http://tachyons.io/docs/typography/tracking/
theme.tracked = {
  default: '.1em',
  tight: '-.05em',
  mega: '.25em',
}

theme.fontWeight = {
  fw1: '100',
  fw2: '200',
  fw3: '300',
  fw4: '400',
  fw5: '500',
  fw6: '600',
  fw7: '700',
  fw8: '800',
  fw9: '900',
}

theme.spacing = {
  xs: '0.25rem',
  s: '0.5rem',
  m: '1rem',
  l: '2rem',
  xl: '4rem',
  xxl: '8rem',
  xxxl: '16rem',
}

theme.lineHeight = {
  solid: '1',
  title: '1.25',
  copy: '1.5',
}

theme.boxShadow = {
  s1: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
  s2: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
  s3: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
  s4: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
  s5: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )',
}

theme.padding = {
  xs: '0.25rem',
  s: '0.5rem',
  m: '1rem',
  l: '2rem',
  xl: '4rem',
  xxl: '8rem',
  xxxl: '16rem',
}

theme.height = {
  h1: '1rem',
  h2: '2rem',
  h3: '4rem',
  h4: '8rem',
  h5: '16rem',
}

export default theme
