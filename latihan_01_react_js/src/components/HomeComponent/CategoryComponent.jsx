import img01 from '../../assets/Home/01.jpg';
import img03 from '../../assets/Home/03.jpg';
import img04 from '../../assets/Home/04.jpg';


const CategoryComponent = () => {
  return (
    <div>
        
        <div style={{backgroundColor: "#112545"}} className="py-3 text-white">
            <div className="container">
                <div className="my-5">
                    <div className="text-center">
                        <h5>Featured Listing</h5>
                        <p>Checkout and enjoy the biggest unlimited possiblities</p>
                    </div>
                <div>
                <div className="my-5">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                            <img src={img01} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pemrogramman Java</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                            <img src={img03} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pemrogramman PHP</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                            <img src={img04} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Pemrogramman JavaScript</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
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

export default CategoryComponent
