import type {AppProps} from 'next/app'

export const ThisApp = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default ThisApp
