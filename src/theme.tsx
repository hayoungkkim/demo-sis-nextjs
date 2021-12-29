import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  heading: `'Spoqa Han Sans Neo', 'AppleSDGothicNeo-Regular', sans-serif`,
  body: `'Spoqa Han Sans Neo', 'AppleSDGothicNeo-Regular', sans-serif`
}

const fontSizes = {
  '2xs': '11px',
  xs: '12px',
  sm: '13px',
  md: '14px',
  lg: '15px',
  xl: '16px',
  '2xl': '18px',
  '3xl': '20px',
  '4xl': '24px',
  '5xl': '28px',
  '6xl': '32px',
  '7xl': '36px'
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em'
// })

const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
})

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#FFFFFF',

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)'
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)'
  },

  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#f0f0f0',
    300: '#e5e5e5',
    400: '#d1d1d1',
    500: '#969696',
    600: '#777777',
    700: '#555555',
    800: '#363636',
    900: '#222222'
  },

  red: {
    50: '#FFF5F5',
    100: '#FFA8A7',
    200: '#FF8280',
    300: '#FF6F6D',
    400: '#FF6563',
    500: '#ff5b59',
    600: '#ff3e3e',
    700: '#E62E2E',
    800: '#D92626',
    900: '#cc1d1d'
  },

  teal: {
    50: '#b5b7bf',
    100: '#9194A0',
    200: '#7F8290',
    300: '#767988',
    400: '#717584',
    500: '#6C7080',
    600: '#494C57',
    700: '#383A42',
    800: '#2F3138',
    900: '#26282D'
  },

  blue: {
    50: '#b2c8db',
    100: '#86A9C7',
    200: '#5A89B2',
    300: '#2E699E',
    400: '#185994',
    500: '#014989',
    600: '#06408C',
    700: '#0A378E',
    800: '#122593',
    900: '#0c1970'
  },

  purple: {
    50: '#D2CDE8',
    100: '#C5BCEB',
    200: '#B8AAEE',
    300: '#9D87F4',
    400: '#8364FA',
    500: '#6841FF',
    600: '#4521CE',
    700: '#3411B5',
    800: '#22009C',
    900: '#13006a'
  }
}

const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  fonts,
  breakpoints
})

export default theme
