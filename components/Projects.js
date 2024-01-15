import { useState, useEffect } from 'react';

import Project from './Project';
import projects from '../projects.js';

import styles from '@/styles/Projects.module.css';



function Projects() {
  const [displayedProjects, setDisplayedProjects] = useState(projects)
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('')

  useEffect(() => {
    getTags()
  }, [])

  function getTags() {
    const set = new Set();
    projects.forEach((project) => (
      set.add(project.tag)
    ))
    setTags(Array.from(set))

  }

  function filterProjectsByTag(tag){
    if (tag === selectedTag){
      setSelectedTag('');
      setDisplayedProjects(projects)
    } else {
    setSelectedTag(tag)
    const filteredProjects = projects.filter((project) => project.tag === tag)
    setDisplayedProjects(filteredProjects)
    }
  }

  return (
    <>
      <h2 className={styles.myProjects}> Recent Projects:</h2>
      <div className={styles.tagContainer}>
        <h4>Tags:</h4>
        {tags.map((tag, index) => (
          <button className={styles.btn} id={tag === selectedTag && styles.selected} key={index} onClick={(() => filterProjectsByTag(tag))}>{tag}</button>
        ))}
      </div>
      <div className={styles.projectsContainer}>
        {displayedProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

export default Projects;
