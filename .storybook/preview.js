import { ChakraProvider } from '@chakra-ui/react'

import Fonts from '../src/fonts'
import theme from '../src/theme'

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Story />
    </ChakraProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
