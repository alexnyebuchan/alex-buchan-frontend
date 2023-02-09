import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Navbar.module.css';

import { FaGithubSquare } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';

// import github from '../public/images/icons/github.svg';

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div>Alex Buchan</div>
        <div className={styles.dropdown}>
          <BiMenuAltRight className={styles.hamburger} />
          <div className={styles.dropdownContent}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="https://github.com/alexnyebuchan" target="_blank">
              Github
            </Link>
          </div>
        </div>
        <div className={styles.links}>
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
