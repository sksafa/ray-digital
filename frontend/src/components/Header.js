import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand text-white" to="/">Application</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                               
                            </li>
                            <span className=' text-white mt-2' style={{cursor:'pointer'}} onClick={handleLogout}>Logout</span>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header