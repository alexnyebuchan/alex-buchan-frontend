import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

import styles from '@/styles/about.module.css';

import Profile from '../public/images/about/headshot.jpg';
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
            <a href="mailto:alexnyebuchan@gmail.com">alexnyebuchan@gmail.com</a>
            <p>+447494906464</p>
            <p>London, UK</p>
          </section>
        </span>

        <p>
          Having worked in Customer Service and tech related roles for the last
          three years at Juno Records, recently I made the decision to begin a
          career in web development. After starting the way all devs do,
          learning HTML and CSS, I made the slightly leftfield choice of
          learning Python and the backend framework Django next. This was
          because of my interest in API's and I wanted to build my first dynamic
          website that I could post online. Safe to say, without the knowledge
          of Javascript or a front end framework, it looked like something made
          in the 1990s, but it did the trick.
        </p>
        <div className={styles.iconContainer}>
          <span>
            <Image alt="/" className={styles.icon} src={HtmlIcon} />
          </span>
          <span>
            <Image alt="/" className={styles.icon} src={CSSIcon} />
          </span>

          <span>
            <Image alt="/" className={styles.icon} src={DjangoIcon} />
          </span>
        </div>
        <p>
          Thus I did courses on Javascript, React and Next.js, and the websites
          you see on here (including this one) are built on these. In terms of
          styling, I've also used Tailwind and Bootstrap. Although all these
          Frameworks are great for building web apps fast with modern
          interfaces, I feel it's important to have a firm understanding of the
          fundamentals. For instance I use a fair amount of vanilla CSS and JS
          even though front-end frameworks are what I usually use to build my
          projects.
        </p>
        <div className={styles.iconContainer}>
          <div>
            <span>
              <Image alt="/" className={styles.icon} src={JsIcon} />
            </span>
            <span>
              <Image alt="/" className={styles.icon} src={ReactIcon} />
            </span>
            <span>
              <Image alt="/" className={styles.icon} src={NextIcon} />
            </span>
          </div>
          <div>
            <span>
              <Image alt="/" className={styles.icon} src={StrapiIcon} />
            </span>
          </div>
        </div>
        <p>
          Currently I am working on some clone websites, including a Guardian
          copy using it's API. I am mainly looking for a front-end role working
          with React (or preferably Next) or a full stack role where I get to
          work on all areas.
        </p>
      </div>
    </Layout>
  );
}

export default about;
