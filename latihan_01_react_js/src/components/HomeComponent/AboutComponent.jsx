import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faGlobe, faBug } from '@fortawesome/free-solid-svg-icons'


const AboutComponent = () => {
  return (
    <div>
      <div>
            <div className='mt-4'>
                <h4 className='text-center'>Service</h4>
                <div className='d-flex justify-content-center'>
                    <hr className='w-25'/>
                </div>
                <br />
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-sm-6'>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card h-90">
                                        <FontAwesomeIcon icon={faGlobe} className='fa-6x' />
                                        <hr />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Programmer</h5>
                                            <p className="card-text text-center">Belajar Tentang Bahasa Pemroggraman</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-90">
                                        <FontAwesomeIcon icon={faWifi} className='fa-6x'/>
                                        <hr />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Jaringan</h5>
                                            <p className="card-text text-center">Belajar Tentang Jaringan Komputer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-90">
                                        <FontAwesomeIcon icon={faBug} className='fa-6x'/>
                                        <hr />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Hacking</h5>
                                            <p className="card-text text-center">Belajar Bahasa Tentang Hacking</p>
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
