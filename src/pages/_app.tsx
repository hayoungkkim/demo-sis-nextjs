import { ChakraProvider } from '@chakra-ui/react'
import Script from 'next/script'

import Fonts from '../fonts'
import theme from '../theme'
import { AppProps } from 'next/app'

import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="stylesheet" href="/realgrid.2.4.1/realgrid-style.css" />
      <Script src="/realgrid.2.4.1/realgrid.2.4.1.min.js"></Script>
      <Script src="/realgrid.2.4.1/realgrid-lic.js"></Script>
      <Script src="/realgrid.2.4.1/jszip.min.js"></Script>

      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
