import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Hero.module.css';
import ThemeSelector from './ThemeSelector';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import { GiPalmTree } from 'react-icons/gi';

import CSSIcon from '../public/images/icons/css-3.svg';
import DjangoIcon from '../public/images/icons/django-icon.svg';
import HtmlIcon from '../public/images/icons/html-5.svg';
import JsIcon from '../public/images/icons/javascript.svg';
import NextIcon from '../public/images/icons/nextjs-icon.svg';
import ReactIcon from '../public/images/icons/react.svg';
import StrapiIcon from '../public/images/icons/strapi-icon.svg';
import GithubIcon from '../public/images/icons/github.svg';

function Hero() {
  const { state } = useContext(ThemeContext);

  const techIcons = [
    {
      src: HtmlIcon,
      title: 'HTML 5',
    },
    {
      src: CSSIcon,
      title: 'CSS 3',
    },
    {
      src: JsIcon,
      title: 'Javascript',
    },
    {
      src: ReactIcon,
      title: 'React.js',
    },
    {
      src: NextIcon,
      title: 'Next.js',
    },
    {
      src: DjangoIcon,
      title: 'Django',
    },
    {
      src: StrapiIcon,
      title: 'Strapi',
    },
    {
      src: GithubIcon,
      title: 'Github',
    },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h2>
          Full-Stack Developer{' '}
          {state.currentTheme === 'napoli' && <GiPalmTree />}
        </h2>
        <div className={styles.techContainer}>
          {techIcons.map((icon) => (
            <div className={styles.techGroup}>
              <Image className={styles.tech} src={icon.src} />
              <span className={styles.techInfo}>{icon.title}</span>
            </div>
          ))}
        </div>
        After over 3 years working in technical support for Juno Records in
        London, I've since become passionate about web development and completed
        multiple courses on Udemy, including Javascript, React and Django.
        Please see below for examples of live websites I've completed. I am
        looking to learn and grow in this exciting field, for any enquires
        please <Link href="/contact">contact me here.</Link>
      </div>

      <ThemeSelector />
    </div>
  );
}

export default Hero;
