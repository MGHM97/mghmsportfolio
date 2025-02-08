import { AppProps, type AppType } from 'next/app'

import '../../styles/globals.css'

import '@/styles/tailwind-styles.css'

const MGHMsPortfolioApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MGHMsPortfolioApp
