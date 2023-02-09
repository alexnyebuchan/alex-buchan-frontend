import styles from '@/styles/Project.module.css';

import Image from 'next/image';

function Project({ project }) {
  const icons = project.tech;

  return (
    <div>
      <div>
        <Image alt="/" src={project.image} width={100} height={100} />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div>
        <span>Tech used:</span>
        {icons.map((icon) => (
          <Image alt="/" src={icon} width={20} height={20} />
        ))}
      </div>
    </div>
  );
}

export default Project;
