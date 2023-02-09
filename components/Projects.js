import Project from './Project';
import projects from '../projects.js';

import styles from '@/styles/Project.module.css';

function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
