

const NavbarComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">BlackCode</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
                </li>
            </ul>
            <a className="btn btn-primary" aria-current="page" href="/login">Login</a>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
            </div>
        </div>
        </nav>
      
    </div>
  )
}

export default NavbarComponent
