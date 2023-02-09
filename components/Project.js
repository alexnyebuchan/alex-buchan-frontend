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
        <h2>{project.title}</h2>
        <div>
          {icons.map((icon) => (
            <div className={styles.tech}>
              <Image
                className={styles.techIcon}
                alt="/"
                src={icon.url}
                width={35}
                height={35}
              />
              <div className={styles.techInfo}>{icon.title}</div>
            </div>
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
