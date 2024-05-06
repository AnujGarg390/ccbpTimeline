// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    duration,
    projectUrl,
    projectTitle,
    description,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
