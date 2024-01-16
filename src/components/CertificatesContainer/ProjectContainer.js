import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='certificate'>
    <h3>{project.name}</h3>

    <p className='certificate_date'>Acquired: {project.date}</p>
    <p className='certificate_validity'>Validity: {project.validity}</p>

  </div>
)

export default ProjectContainer
