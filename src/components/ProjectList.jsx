import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectList = ({projects, grabProject}) => {
  const renderProjects = projects.map(project =>{
    return <ProjectCard key={project.id}project={project}/>
  })
  return(
    <div className='project-card-ctn'>
      {renderProjects}
    </div>
    
  )
}
export default ProjectList 