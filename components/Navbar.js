import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/Navbar.module.css';

import github from '../public/images/icons/github.svg';

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <div>AB</div>
        <div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="https://github.com/alexnyebuchan">
            <Image alt="/" src={github} width={25} height={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
