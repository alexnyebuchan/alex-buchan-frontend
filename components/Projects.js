import Image from 'next/image';

import Project from './Project';
import projects from '../projects.js';

import styles from '@/styles/Projects.module.css';

import NextIcon from '../public/images/icons/nextjs-icon.svg';
import CSSIcon from '../public/images/icons/css-3.svg';

function Projects() {
  return (
    <>
      <h2 className={styles.myProjects}> Website examples:</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.thisWebsite}>
        <h2>This Website</h2>
        <p>
          You can also view the code for this portfolio website{' '}
          <a
            target="_blank"
            href="https://github.com/alexnyebuchan/alex-buchan-portfolio"
          >
            here.
          </a>
        </p>
        <div className={styles.tech}>
          <Image
            className={styles.techIcon}
            width={42}
            height={42}
            src={NextIcon}
          />
          <span className={styles.techInfo}>Next.js</span>
        </div>
        <div className={styles.tech}>
          <Image
            className={styles.techIcon}
            width={42}
            height={42}
            src={CSSIcon}
          />
          <span className={styles.techInfo}>CSS 3</span>
        </div>
        <p>
          It uses Next.js and the CSS module system for styling. UseContext,
          UseReducer and UseEffect were used for the theme selection.
        </p>
      </div>
    </>
  );
}

export default Projects;
