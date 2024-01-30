import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Hero.module.css';
import ThemeSelector from './ThemeSelector';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import { GiPalmTree } from 'react-icons/gi';

import CSSIcon from '../public/images/icons/sass-1.svg';
import DjangoIcon from '../public/images/icons/django-icon.svg';
import NextIcon from '../public/images/icons/nextjs-icon.svg';
import ReactIcon from '../public/images/icons/react.svg';
import GithubIcon from '../public/images/icons/github.svg';
import TypescriptIcon from '../public/images/icons/typescript.svg';
import ViteIcon from '../public/images/icons/vite.svg';

function Hero() {
  const { state } = useContext(ThemeContext);

  const techIcons = [
    {
      src: ReactIcon,
      title: 'React.js',
    },
    {
      src: TypescriptIcon,
      title: 'Typescript',
    },
    {
      src: NextIcon,
      title: 'Next.js',
    },
    {
      src: ViteIcon,
      title: 'Vite',
    },
    {
      src: GithubIcon,
      title: 'Github',
    },
    {
      src: CSSIcon,
      title: 'Sass',
    },
    {
      src: DjangoIcon,
      title: 'Django',
    }
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h2>
          React Developer {state.currentTheme === 'napoli' && <GiPalmTree />}
        </h2>
        <div className={styles.techContainer}>
          {techIcons.map((icon) => (
            <div key={icon.title} className={styles.techGroup}>
              <Image alt="/" className={styles.tech} src={icon.src} />
              <span className={styles.techInfo}>{icon.title}</span>
            </div>
          ))}
        </div>
        <p>
        Highly motivated and friendly individual with a passion for software
        development and building applications. Specialising in React tech stack,
        with experience in backend technologies such as Django and Strapi CMS.
        Keen to learn and grow further in this exciting field. For any enquires
        please <Link href="/contact">contact me here.</Link>
        </p>
        <br/>
        <p>Currently working on a Spotify clone, consuming the Spotify API using TypeScript and Vite.</p>
      </div>

      <ThemeSelector />
    </div>
  );
}

export default Hero;
