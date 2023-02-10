import { useReducer, useContext, useEffect } from 'react';

import themes from '../themes.js';

import { ThemeContext } from '@/context/ThemeContext';
import ThemeReducer from '@/context/ThemeReducer';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  const initialState = {
    currentTheme: 'default',
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const thm = state.currentTheme;

  useEffect(() => {
    if (thm === 'seventies') {
      document.documentElement.style.setProperty(
        '--primary-color',
        themes.seventies.primary
      );
      document.documentElement.style.setProperty(
        '--background',
        themes.seventies.background
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        themes.seventies.secondary
      );
      document.documentElement.style.setProperty(
        '--highlight-color',
        themes.seventies.highlight
      );
    } else if (thm === 'default') {
      document.documentElement.style.setProperty(
        '--primary-color',
        themes.default.primary
      );
      document.documentElement.style.setProperty(
        '--background',
        themes.default.background
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        themes.default.secondary
      );
      document.documentElement.style.setProperty(
        '--highlight-color',
        themes.default.highlight
      );
    } else if (thm === 'rave') {
      document.documentElement.style.setProperty(
        '--primary-color',
        themes.rave.primary
      );
      document.documentElement.style.setProperty(
        '--background',
        themes.rave.background
      );
      document.documentElement.style.setProperty(
        '--secondary-color',
        themes.rave.secondary
      );
      document.documentElement.style.setProperty(
        '--highlight-color',
        themes.rave.highlight
      );
    }
  }, [state]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </ThemeContext.Provider>
  );
}
