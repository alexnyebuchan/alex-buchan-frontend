import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import styles from '@/styles/ThemeSelector.module.css';

function ThemeSelector() {
  const { dispatch } = useContext(ThemeContext);

  const sendTheme = (thm) => {
    dispatch({
      type: 'SET_THEME',
      payload: {
        theme: thm,
      },
    });
  };

  return (
    <div className={styles.theme}>
      <button className={styles.themeBtn}>^ Select Theme</button>
      <div className={styles.themeDropdown}>
        <a onClick={() => sendTheme('seventies')} href="#">
          70's Barry White
        </a>
        <a onClick={() => sendTheme('napoli')} href="#">
          Napoli
        </a>
        {/* <a onClick={() => sendTheme('rave')} href="#">
          90's Summer of Love
        </a> */}

        <a onClick={() => sendTheme('default')} href="#">
          Dark Theme (default)
        </a>
      </div>
    </div>
  );
}

export default ThemeSelector;
