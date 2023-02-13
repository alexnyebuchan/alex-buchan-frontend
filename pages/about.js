import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

import styles from '@/styles/about.module.css';

import Profile from '../public/images/about/ronswanson.jpg';
import CSSIcon from '../public/images/icons/css-3.svg';
import DjangoIcon from '../public/images/icons/django-icon.svg';
import HtmlIcon from '../public/images/icons/html-5.svg';
import JsIcon from '../public/images/icons/javascript.svg';
import NextIcon from '../public/images/icons/nextjs-icon.svg';
import ReactIcon from '../public/images/icons/react.svg';
import StrapiIcon from '../public/images/icons/strapi-icon.svg';

import { AiOutlineArrowLeft } from 'react-icons/ai';

function about() {
  return (
    <Layout>
      <div className={styles.aboutHero}>
        <h1>About Me</h1>
        <Link href="/">
          <button>
            <AiOutlineArrowLeft /> Back to Home
          </button>
        </Link>
      </div>
      <div className={styles.aboutInfoContainer}>
        <span className={styles.profileSection}>
          <Image className={styles.profile} src={Profile} />
          <section className={styles.profileInfo}>
            <p>Alex Buchan</p>
            <p>alexnyebuchan@gmail.com</p>
            <p>+447494906464</p>
            <p>London, UK</p>
          </section>
        </span>

        <p>
          As a developer blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah
        </p>
        <div className={styles.iconContainer}>
          <span>
            <Image alt="/" className={styles.icon} src={HtmlIcon} />
          </span>
          <span>
            <Image alt="/" className={styles.icon} src={CSSIcon} />
          </span>
          <span>
            <Image alt="/" className={styles.icon} src={JsIcon} />
          </span>
        </div>
        <p>
          As a developer blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah
        </p>
        <div className={styles.iconContainer}>
          <div>
            <span>
              <Image alt="/" className={styles.icon} src={ReactIcon} />
            </span>
            <span>
              <Image alt="/" className={styles.icon} src={NextIcon} />
            </span>
          </div>
          <div>
            <span>
              <Image alt="/" className={styles.icon} src={DjangoIcon} />
            </span>
            <span>
              <Image alt="/" className={styles.icon} src={StrapiIcon} />
            </span>
          </div>
        </div>
        <p>
          As a developer blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah
          blah blah blah blah blah
        </p>
      </div>
    </Layout>
  );
}

export default about;
