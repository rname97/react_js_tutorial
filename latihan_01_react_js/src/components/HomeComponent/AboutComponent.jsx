import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faGlobe, faBug } from '@fortawesome/free-solid-svg-icons'


const AboutComponent = () => {
  return (
    <div>
      <div>
            <div className='my-4'>
                
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-6'>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card h-90 border-0">
                                        <FontAwesomeIcon icon={faGlobe} className='fa-4x' />
                                 
                                        <div className="card-body">
                                            <h6 className="card-title text-center">Programmer</h6>
                                            <p className="card-text text-center">Belajar Tentang Bahasa Pemroggraman</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-90 border-0">
                                        <FontAwesomeIcon icon={faWifi} className='fa-4x'/>
                                      
                                        <div className="card-body">
                                            <h6 className="card-title text-center">Jaringan</h6>
                                            <p className="card-text text-center">Belajar Tentang Jaringan Komputer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-90 border-0">
                                        <FontAwesomeIcon icon={faBug} className='fa-4x'/>
                                     
                                        <div className="card-body">
                                            <h6 className="card-title text-center">Hacking</h6>
                                            <p className="card-text text-center">Belajar Tentang Hacking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            


        </div>
    </div>
  )
}

export default AboutComponent
