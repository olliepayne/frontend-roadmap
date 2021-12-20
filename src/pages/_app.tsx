import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from "utils/theme"

import Layout from 'components/Common/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
