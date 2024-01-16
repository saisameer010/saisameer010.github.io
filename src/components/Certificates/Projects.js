import uniqid from 'uniqid'
import { certificates } from '../../portfolio'
import ProjectContainer from '../CertificatesContainer/ProjectContainer'
import './Projects.css'

const Certificates = () => {
  if (!certificates.length) return null

  return (
    <section id='certificates' className='section certificates'>
      <h2 className='section__title'>Certificates</h2>

      <div className='certificates__grid'>
        {certificates.map((certificate) => (
          <ProjectContainer key={uniqid()} project={certificate} />
        ))}
      </div>
    </section>
  )
}

export default Certificates
