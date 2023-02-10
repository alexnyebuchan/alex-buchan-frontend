import Link from 'next/link';
import Layout from '@/components/Layout';

import { AiOutlineArrowLeft } from 'react-icons/ai';

function about() {
  return (
    <Layout>
      <Link href="/">
        <button>
          <AiOutlineArrowLeft /> Back to Home
        </button>
      </Link>
    </Layout>
  );
}

export default about;
