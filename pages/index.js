import { useReducer, useContext } from 'react';

import { ThemeContext } from '@/context/ThemeContext';
import ThemeReducer from '@/context/ThemeReducer';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  const initialState = {
    theme: 'default',
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Hero />
        <Projects />
      </Layout>
    </ThemeContext.Provider>
  );
}
