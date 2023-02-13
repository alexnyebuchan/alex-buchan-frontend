import Project from './Project';
import projects from '../projects.js';

import styles from '@/styles/Projects.module.css';

function Projects() {
  return (
    <>
      <p className={styles.myProjects}>Recent projects:</p>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
