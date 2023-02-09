import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Navbar.module.css';

import { FaGithubSquare } from 'react-icons/fa';

// import github from '../public/images/icons/github.svg';

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div>Alex Buchan</div>
        <div>
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
