import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

function contact() {
  return (
    <Layout>
      <div>Contact</div>
      <div>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </Layout>
  );
}

export default contact;
