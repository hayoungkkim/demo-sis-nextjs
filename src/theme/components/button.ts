import { mode } from '@chakra-ui/theme-tools'

const Button = {
  baseStyle: {
    fontWeight: null
  },
  sizes: {},
  variants: {
    ghost: (props) => {
      const { colorScheme: c } = props

      if (c === 'black') {
        return {
          color: 'black',
          _hover: {
            bg: 'gray.100'
          },
          _active: { bg: 'gray.200' }
        }
      }
    },
    outline: (props) => {
      const { colorScheme: c } = props

      if (c === 'black') {
        return {
          border: '1px solid',
          borderColor: 'black',
          color: 'black',
          _hover: {
            bg: 'gray.100'
          },
          _active: { bg: 'gray.200' }
        }
      }
    },
    solid: (props) => {
      const { colorScheme: c } = props

      if (c === 'black') {
        return {
          bg: 'black',
          _hover: {
            bg: 'gray.800',
            _disabled: {
              bg: 'black'
            }
          },
          _active: { bg: 'gray.900' }
        }
      }
    },
    link: (props) => {
      const { colorScheme: c } = props

      if (c === 'black') {
        return {
          color: 'black',
          _active: { color: 'gray.900' }
        }
      }
    }
  },
  defaultProps: {}
}

export default Button
