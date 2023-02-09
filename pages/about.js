import Link from 'next/link';
import Layout from '@/components/Layout';

function about() {
  return (
    <Layout>
      <div>About</div>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </Layout>
  );
}

export default about;
