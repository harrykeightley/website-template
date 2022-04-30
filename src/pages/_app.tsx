import {AppProps} from 'next/app';
import 'styles/globals.css';
import {PageWithLayout} from 'types/app';
import MainLayout from '../layouts/MainLayout';

function MyApp({Component, pageProps}: AppProps) {
  const getLayout =
    (Component as PageWithLayout).getLayout ||
    (page => <MainLayout>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
