import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';

import { FaGithubSquare } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { HiDownload } from 'react-icons/hi';

import ABLogo from '../public/images/logos/alexbuchanlogo1.svg';

function Navbar({ scrollPosition }) {
  return (
    <div
      className={styles.navContainer}
      id={scrollPosition > 27 ? styles.navScroll : ''}
    >
      <div className={styles.navbar}>
        <Link href="/">
          <Image className={styles.logo} src={ABLogo} alt="/" width={46} />
        </Link>

        {/* Dropdown */}
        {scrollPosition < 27 && (
          <div className={styles.dropdown}>
            <BiMenuAltRight className={styles.hamburger} />
            <div className={styles.dropdownContent}>
              <a
                href="files/AlexBuchanCV%20.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                CV
                <HiDownload className={styles.dl} />
              </a>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="https://github.com/alexnyebuchan" target="_blank">
                Github
              </Link>
            </div>
          </div>
        )}

        <div className={styles.links}>
          <a
            href="files/AlexBuchanCV%20.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            download
          >
            CV
            <HiDownload className={styles.dl} />
          </a>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          <Link
            className={styles.link}
            href="https://github.com/alexnyebuchan"
            target="_blank"
          >
            <FaGithubSquare className={styles.githubImg} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
