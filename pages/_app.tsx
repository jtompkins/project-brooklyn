import type { AppProps } from 'next/app';
import SiteLayout from '../components/SiteLayout';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <SiteLayout><Component {...pageProps} /></SiteLayout>;
}

export default MyApp;
