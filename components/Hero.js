import styles from '@/styles/Hero.module.css';
import ThemeSelector from './ThemeSelector';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h3>Full-Stack Developer</h3>
      </div>
      <ThemeSelector />
    </div>
  );
}

export default Hero;
