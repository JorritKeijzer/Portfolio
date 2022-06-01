import { useRef } from 'react';
import type { AppProps } from 'next/app';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRouter } from 'next/router';

import Cursor from '../components/widgets/Cursor';
import Layout from '../components/layout/Layout';

import '../styles/scroll.css';
import '../assets/sass/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef();

  return (
    <>
      <Cursor />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.09,
          scrollFromAnywhere: true,
          reloadOnContextChange: true,
          tablet: { smooth: false, breakpoint: 1280 },
          smartphone: { smooth: false },
        }}
        watch={[`router.asPath`]}
        location={asPath}
        onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        containerRef={containerRef}>
        <main data-scroll-container ref={containerRef}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
