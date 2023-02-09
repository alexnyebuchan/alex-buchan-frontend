import Head from 'next/head';
import styles from '@/styles/Layout.module.css';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>Alex Buchan | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: 'Alex Buchan | Web Developer',
  description: 'Web Dev from London UK specialising in React',
  keywords: 'web development, react, front-end, full-stack',
};
