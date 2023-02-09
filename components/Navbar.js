import Link from 'next/link';
import Image from 'next/image';

import github from '../public/images/icons/github.svg';

function Navbar() {
  return (
    <div>
      <div>AB</div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="https://github.com/alexnyebuchan">
          <Image alt="/" src={github} width={25} height={25} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
