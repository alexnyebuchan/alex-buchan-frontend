import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/beatchain.module.css';

import { AiOutlineDown } from 'react-icons/ai';

import beatchainLogo from '../public/images/icons/beatchain.svg';

import CSSIcon from '../public/images/icons/css-3.svg';
import DjangoIcon from '../public/images/icons/django-icon.svg';
import HtmlIcon from '../public/images/icons/html-5.svg';
import JsIcon from '../public/images/icons/javascript.svg';
import NextIcon from '../public/images/icons/nextjs-icon.svg';
import ReactIcon from '../public/images/icons/react.svg';
import StrapiIcon from '../public/images/icons/strapi-icon.svg';
import GithubIcon from '../public/images/icons/github.svg';

import { useEffect } from 'react';

function beatchain() {
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

  useEffect(() => {
    document.body.style.fontFamily = 'Source Code Pro, monospace';
  });

  return (
    <div className={styles.application}>
      {/* Navbar */}
      <div className={styles.navContainer}>
        <div className={styles.navbar}>
          <div className={styles.leftNav}>
            {/* Insert Logo */}

            <Link className={styles.navLogo} href="/beatchain">
              <Image src={beatchainLogo} width={55} className={styles.logo} />
              Alex Buchan CV
            </Link>
            <a href="#tech">
              My Technologies <AiOutlineDown className={styles.arrowDown} />
            </a>
            <a href="#emp">
              Previous Employment
              <AiOutlineDown className={styles.arrowDown} />
            </a>
            <a href="#skills">
              Skills
              <AiOutlineDown className={styles.arrowDown} />
            </a>
            <a href="#acad">
              Academia
              <AiOutlineDown className={styles.arrowDown} />
            </a>
          </div>

          {/* Regular Links */}
          <div className={styles.links}>
            <a className={styles.link} href="mailto: alexnyebuchan@gmail.com">
              Hire me
            </a>
          </div>

          {/* Dropdown */}
          {/* <div className={styles.dropdown}>
            <BiMenuAltRight className={styles.hamburger} />
            <div className={styles.dropdownContent}>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="https://github.com/alexnyebuchan" target="_blank">
                Github
              </Link>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main */}
      <main>
        <section className={styles.mainTop}>
          <div>
            <h4>
              Here is an online CV with all relevant experience, skills and
              academic qualifications to be a React developer at Beatchain.
            </h4>
          </div>
          <Link href="/">
            <button>View My Portfolio</button>
          </Link>
        </section>
        <section id="tech" className={styles.mainTech}>
          <h4>TECHNOLOGIES</h4>
          <h5>Frontend</h5>
          <ul>
            <li>
              Foundational knowledge of the workings and syntax of{' '}
              <strong>HTML</strong> (which has strengthened over time having
              written a lot of JSX).
            </li>
            <li>
              Extensive experience using <strong>CSS</strong> flexbox, grid,
              transitions and more for creating dynamic websites that look good
              on multiple devices.{' '}
            </li>
            <li>
              Comfortable using <strong>Bootstrap</strong>, including the ‘Al
              Zanders’ project in my portfolio (which uses React Bootstrap).
              Understanding of the basics such as carousels, cards, navigation
              and more.
            </li>
            <li>
              Strong understanding of <strong>Javascript</strong> basics, such
              as functions, the DOM, high order array methods, regular
              expressions and the Fetch API. Particular strength in using JS to
              manipulate audio, such as play/pause, volume and metadata. Have
              completed a full JS course on Udemy.
            </li>
            <li>
              Comprehensive knowledge of <strong>React.js</strong>, including
              the basics such as JSX, components, hooks, state management and
              lifecycle methods. This is where I feel I am strongest out of all
              technologies mentioned. Have built three live websites using React
              and completed a course as well.
            </li>
            <li>
              Experience with <strong>Next.js</strong>, using the API, pages and
              plugins. Two live websites including my portfolio use Next.js.
              Understand the benefits of improved SEO.{' '}
            </li>
          </ul>
          <h5>Backend</h5>
          <ul>
            <li>
              Solid understanding of <strong>Python</strong> basics, such as
              functions, classes, datetime etc.{' '}
            </li>
            <li>
              Able to use Python to create and modify <strong>Django</strong>{' '}
              projects. This includes editing url paths, creating objects and
              functions in Django to create dynamic content. For instance,
              pagination, search bars and contact forms that lead to an email
              address. Have completed two courses on Django on Udemy.
            </li>
            <li>
              Experience using more advanced Django concepts, such as class
              based views, pipenv and forms.
            </li>
            <li>
              Strong understanding of <strong>Strapi</strong> and the benefits
              of using a Headless CMS. The ‘92 Groove’ project in my portfolio
              uses Strapi and Cloudinary to create the API.
            </li>
            <li>
              Understand fundamental concepts of API’s, how to create them and
              store data in PostgreSQL.
            </li>
          </ul>
          <div className={styles.techContainer}>
            {techIcons.map((icon) => (
              <div className={styles.techGroup}>
                <Image className={styles.tech} src={icon.src} />
              </div>
            ))}
          </div>
        </section>
        <section id="emp" className={styles.mainEmp}>
          <h4>PREVIOUS EMPLOYMENT</h4>
          <h5>
            Juno Records Customer Service/ Sales (May 2018-October 2021, full
            time)
          </h5>
          <ul>
            <li>
              Using multiple platforms such as Zendesk, eBay, Olark chat and
              phones to assist customers of the Juno website, authorize returns
              and make equipment sales.
            </li>
            <li>
              Strong understanding of the Juno software and how it operates with
              the database.
            </li>
            <li>
              Make the most of Macro Express for programming my templates, and
              automate certain tasks to make them faster.
            </li>
          </ul>
          <h5>Bar work (The Cross Keys/ The Grapes (January 2022 - present)</h5>
          <ul>
            <li>
              Currently working as bar staff while studying and applying for web
              developer jobs. Currently I am working at the Cross Keys in
              Hammersmith but previously worked in The Grapes in Limehouse while
              living East.
            </li>
            <li>
              Good with people and working in a team, staying focused and calm
              when busy or under pressure.
            </li>
          </ul>
          <h5>Al Zanders (2014-Present)</h5>
          <ul>
            <li>
              Run a record label, have worked with vinyl & digital distribution
              and aggregators frequently - including AWAL and Stem among others.
            </li>
            <li>
              Made my own Al Zander’s music website using React and Django.
            </li>
            <li>
              Gained an understanding of programming related skills, having used
              Ableton since 16 and music hardware such as synthesizers.
            </li>
          </ul>
        </section>
        <section id="skills" className={styles.mainSkills}>
          <h4>SKILLS</h4>
          <ul>
            <li>
              Can <strong>focus</strong> intensely for long periods of time,
              enjoy getting stuck in and problem solving.
            </li>
            <li>
              Love learning and highly <strong>self-motivated</strong> . Have
              taught myself two programming languages as well as music
              production and running a record label.{' '}
            </li>
            <li>
              Friendly and <strong>personable</strong>, having worked with
              customers and office colleagues for over 3 years, and making
              contacts in the music industry and working behind the bar.
            </li>
            <li>Proficient in Python/ Django and Javascript.</li>
            <li>Excellent English, both written and verbal.</li>
            <li>Broad understanding of dance music, both old and current.</li>
            <li>
              Able to think critically and logically through studying
              philosophy.
            </li>
          </ul>
        </section>
        <section id="acad" className={styles.mainAcad}>
          <h4>ACADEMIA</h4>
          <div>
            <span>
              <h5>University of Sheffield (2011-2014)</h5>
              <p>
                Degree: <strong>Philosophy BA (2:1)</strong>
              </p>
              <p>Secretary of Small Ideas: Alternative Music Society</p>
            </span>
            <span>
              <h5>School</h5>
              <p>
                A Levels: Politics (A); Religious Studies (A); Music Technology
                (A)
              </p>
              <p>AS Level: Economics (B)</p>
              <p>10 GCSE’s: wide ranging, including Maths & English.</p>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default beatchain;
