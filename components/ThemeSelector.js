import { useContext, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import styles from '@/styles/ThemeSelector.module.css';

function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("default")
  const { dispatch } = useContext(ThemeContext);

  const sendTheme = (thm) => {
    setSelectedTheme(thm)
    dispatch({
      type: 'SET_THEME',
      payload: {
        theme: thm,
      },
    });
  };

  return (
    <div className={styles.theme}>
      {selectedTheme === 'default' && (<button className={styles.themeBtn} onClick={() => sendTheme('seventies')} href="#">70's Theme</button>)}
      {selectedTheme === 'seventies' && (<button className={styles.themeBtn} onClick={() => sendTheme('default')} href="#">Default Theme</button>)}
      
    </div>
  );
}

export default ThemeSelector;
