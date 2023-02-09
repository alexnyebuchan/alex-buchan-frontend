import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

import styles from '@/styles/Hero.module.css';

function Hero() {
  const { state, dispatch } = useContext(ThemeContext);

  const sendTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: {
        theme: '70s',
      },
    });
    console.log(state);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroName}>
        <h1>Alex Buchan</h1>
        <h2>Full-Stack Developer</h2>
      </div>
      <button onClick={sendTheme} className={styles.seventyBtn}>
        ^ Select Theme
      </button>
    </div>
  );
}

export default Hero;
