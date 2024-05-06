// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="title-clock-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle className="icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tag-list">
        {tagsList.map(eachTag => (
          <li className="course-tag-item">
            <p className="course-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
