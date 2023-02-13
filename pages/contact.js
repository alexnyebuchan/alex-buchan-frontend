import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

import ContactForm from '@/components/ContactForm';

import styles from '@/styles/contact.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function contact() {
  return (
    <Layout>
      <div className={styles.contactHero}>
        <h1>Contact</h1>
        <Link href="/">
          <button>
            <AiOutlineArrowLeft /> Back to Home
          </button>
        </Link>
      </div>
      <ContactForm />
    </Layout>
  );
}

export default contact;
