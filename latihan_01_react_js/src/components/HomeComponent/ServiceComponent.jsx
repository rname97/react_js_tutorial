import image from '../../assets/Home/tiger.jpg';
const ServiceComponent = () => {
  return (
    <div>
        <div className="container mt-4">
                <h4 className='text-center'>About</h4>
                <div className='d-flex justify-content-center'>
                    <hr className='w-25'/>
                </div>
                <br />
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Lab BlackCode</h5>
                                <p className="card-text">Pembelajaran Seputar Pemrogramman, Jaringan dan Hacking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      
    </div>
  )
}

export default ServiceComponent
