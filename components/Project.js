import styles from '@/styles/Project.module.css';

import Image from 'next/image';

function Project({ project }) {
  const icons = project.tech;

  return (
    <div className={styles.projectContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.projectImage}
          alt="/"
          src={project.image}
          width={550}
          height={366}
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <div>
          <span>Tech used:</span>
          {icons.map((icon) => (
            <Image
              className={styles.tech}
              alt="/"
              src={icon}
              width={23}
              height={21}
            />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
