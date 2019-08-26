import React from 'react'
import link from '../assets/images/icons/link.png'
import github from '../assets/images/icons/github.png'


const ProjectCard = ({project}) => {
  return(
    <div key={project.id} className='project-ctn'>
      <div className='project-intro'>
        <h2 className='project-title'>{project.title}</h2>
				<h5 className='app-type'>{project.type}</h5>
        <img className='project-img' src={project.project_img} alt={project.title}/>
      </div>
      <div className='skill-ctn'>
        <p className='project-description'>{project.description}</p>
        <div className='icon-ctn'>
					<div className='skill-list'>
						{
							project.tech.map(skill => {
							return <li key={skill.id} className='skill-item'>
											<img className='skill-logo' src={skill.img} alt={skill.name}/>
											{/* {skill.name} */}
											</li>
							})
						}
					</div>
          <div className='project-links'>
          	<li >
							<a href={project.project_url}><img className='link-logo' src={link} alt='project-link'/></a>
						</li>
						<li >
							<a href={project.github_url}><img className='link-logo' src={github} alt='project-github'/></a>
						</li>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectCard