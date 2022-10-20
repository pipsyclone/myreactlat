import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/myreactlat"}>React Latihan</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" to={"/myreactlat"}>Home</Link>
                        <Link className="nav-link" to={"/error-page"}>Error Page 404</Link>
                        <Link className="nav-link" to={"/latihan-1"}>Latihan 1</Link>
                        <Link className="nav-link" to={"/latihan-2"}>latihan 2</Link>
                        <Link className="nav-link" to={"/latihan-3"}>latihan 3</Link>
                        <Link className="nav-link" to={"/latihan-4"}>latihan 4</Link>
                        <Link className="nav-link" to={"/latihan-5"}>latihan 5</Link>
                        <Link className="nav-link" to={"/latihan-6"}>latihan 6</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;