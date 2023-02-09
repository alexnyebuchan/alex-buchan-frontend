import Head from 'next/head';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  );
}
