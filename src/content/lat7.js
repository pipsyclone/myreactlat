import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Script from '../interactive/script'
import dataMenu from '../dummy/dataMenu'

function navMenu (classLi, classLink) {
    return (
        <>
            {
                dataMenu.menu.map((data, key) => {
                    return (
                        <li key={key} className={classLi}>
                            <Link to={data.url} className={classLink}>{data.name}</Link>
                        </li>
                    )
                })
            }
        </>
    )
}

const navbarResponsif = () => {

    const { windowSize, topbarToggler, handlerTopbarTogglerIcon } = Script()

    return (
        <>
            <Helmet>
                <title>Latihan 7 - Topbar Responsif</title>
            </Helmet>

            <div className="card mt-5">
                <div className="card-body">
                    <h2>Latihan 7 - Topbar Responsif</h2>
                    <span>Membuat topbar menjadi lebih responsif!</span>
                    <br/>
                    <hr/>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <Link to={'/myreactlat/latihan-7'} className='navbar-brand'>
                                Navbar Responsif
                            </Link>

                            {/* Menu Mobile & Tablet */}
                            <div className={windowSize <= 850 ? 'dropdown' : 'd-none'}>
                                <button className='btn btn-link text-decoration-none text-light' onClick={() => handlerTopbarTogglerIcon()} data-bs-toggle="dropdown" data-bs-target="#navbarMenu" data-bs-auto-close="false">
                                    {
                                        topbarToggler ? 
                                            <i className="fa-solid fa-bars"></i>
                                        :
                                            <i className="fa-solid fa-xmark"></i>
                                    }
                                </button>
                                
                                <ul className='dropdown-menu dropdown-menu-end animate__animated animate__fadeIn animate__faster'>
                                    { navMenu('', 'dropdown-item text-center') }

                                    <li className='text-center mt-3'>
                                        <Link className='btn btn-outline-warning rounded-0'>Login/Register</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Menu Desktop */}
                            <div className={windowSize <= 850 ? 'd-none' : ''}>
                                <ul className='navbar-nav ms-auto'>
                                    { navMenu('nav-item', 'nav-link') }
                                    
                                    <li className='text-center'>
                                        <Link className='btn btn-outline-warning rounded-0 ms-3'>Login/Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default navbarResponsif;