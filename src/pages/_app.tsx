import '../styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import NextNProgress from 'nextjs-progressbar'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress color='#121212' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
