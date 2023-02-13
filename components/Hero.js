import styles from '@/styles/Hero.module.css';
import ThemeSelector from './ThemeSelector';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import { GiPalmTree } from 'react-icons/gi';

function Hero() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h3>
          Full-Stack Developer{' '}
          {state.currentTheme === 'napoli' && <GiPalmTree />}
        </h3>
      </div>

      <ThemeSelector />
    </div>
  );
}

export default Hero;
