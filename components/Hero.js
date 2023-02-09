import styles from '@/styles/Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <button className={styles.seventyBtn}>70's Mode</button>
    </div>
  );
}

export default Hero;
