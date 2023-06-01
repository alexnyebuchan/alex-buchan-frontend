import Image from 'next/image';

import Project from './Project';
import projects from '../projects.js';

import styles from '@/styles/Projects.module.css';

import NextIcon from '../public/images/icons/nextjs-icon.svg';
import CSSIcon from '../public/images/icons/css-3.svg';

function Projects() {
  return (
    <>
      <h2 className={styles.myProjects}> Recent Projects:</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
