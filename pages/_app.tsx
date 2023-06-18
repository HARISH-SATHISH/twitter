import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import{GoogleOAuthProvider}from "@react-oauth/google"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <GoogleOAuthProvider clientId='836919963832-5vadb4ir0md35oi176m5af7i9uoo665g.apps.googleusercontent.com'>
   <Component {...pageProps} />
  </GoogleOAuthProvider>
  )
}
