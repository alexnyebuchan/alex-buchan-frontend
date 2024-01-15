import styles from '@/styles/Project.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AiOutlineEye } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Project({ project }) {
  const body = project.description;
  const icons = project.tech;


  return (
    <div className={styles.projectContainer}>
      <div className={styles.content}>
        <Link target="_blank" href={project.url}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.projectImage}
              alt="/"
              src={project.image}
              width={550}
              height={366}
            />
            <Image
              className={styles.popupImage}
              alt="/"
              src={project.popupImage}
              width={550}
              height={366}
            />
          </div>
        </Link>

        <div>
          <Link target="_blank" href={project.url}>
            <h2>{project.title}</h2>
          </Link>

          <div>
            {icons.map((icon) => (
              <div key={icon.title} className={styles.tech}>
                <Image
                  className={styles.techIcon}
                  alt="/"
                  src={icon.url}
                  width={42}
                  height={42}
                />
                <div className={styles.techInfo}>{icon.title}</div>
              </div>
            ))}
          </div>

          <div dangerouslySetInnerHTML={{__html: body }}></div>
          
        </div>
      </div>
      <div className={styles.projectLinks}>
        <Link alt="/" href={project.url} target="_blank">
          <button className={styles.projectLink}>
            <AiOutlineEye /> <span>View Online</span>
          </button>
        </Link>
        <Link alt="/" href={project.github} target="_blank">
          <button className={styles.projectLink}>
            <AiFillGithub />
            <span>See Code</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
