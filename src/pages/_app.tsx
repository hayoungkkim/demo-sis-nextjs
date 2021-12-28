import { ChakraProvider } from '@chakra-ui/react'

import Fonts from '../fonts'
import theme from '../theme'
import { AppProps } from 'next/app'

import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
