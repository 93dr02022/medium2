import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
        appId="uMgghPriJGTm0EHvwNGYMenxMLacgb9VmjI9OgTH"
        serverUrl="https://g5rizge7o8tb.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp