import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {sessionStorage.getItem('user') ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/log-in"><img style={{ height: '30px' }} className="img-fluid rounded-circle" src={sessionStorage.getItem('userProfilePic')} /> {sessionStorage.getItem('user')}</Link>

                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/log-in">Log_In</Link>
                                </li>
                            }



                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;