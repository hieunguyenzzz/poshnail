import '@assets/styles/chrome-bug.css'
import '@assets/styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])
  return <Component {...pageProps} />
}
export default MyApp
