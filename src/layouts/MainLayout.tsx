import Head from 'next/head';
import {ReactNode} from 'react';
import Footer from 'components/branding/Footer';
import Header from 'components/branding/Header';

interface layoutProps {
  children: ReactNode;
}

export default function MainLayout({children}: layoutProps) {
  return (
    <div>
      <Head>
        <title>Website Template</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="container flex-1 py-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
