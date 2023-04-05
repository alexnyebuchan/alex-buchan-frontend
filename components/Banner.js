import Bannerpic from '../public/images/hero/banner2.jpg';
import Image from 'next/image';
import styles from '@/styles/Banner.module.css';

function Banner() {
  return (
    <>
      <Image src={Bannerpic} alt="Banner" className={styles.img} />
    </>
  );
}

export default Banner;
