import type { NextPage } from 'next';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <>
      <Head>
        <title>Jorrit Keijzer | Home</title>
        <meta name="description" content="Jorrit Keijzer | Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.section}>
        <h1>
          I’m Jorrit,
          <br /> a front-end dev
          <br /> based in Amsterdam
        </h1>
        <hr />
      </section>
      <section className={styles.section}>
        <p className={styles.about}>
          <span>About</span> I’m currently working on my own project called{' '}
          <a href="https://papyr.co">Papyr</a>. But i have time available for freelance. When I’m
          not coding you can find me wandering in the streets of Amsterdam (on a bike of course),
          enjoying good cinema, playing guitar and piano, or having some drinks with my friends.
        </p>
        <hr />
      </section>
      <section className={styles.section}>
        <h2>Experience</h2>
      </section>
    </>
  );
};

export default Home;
