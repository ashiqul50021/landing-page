import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../images/logo.png';
import QR from '../../../images/qr.png';
import tweet from '../../../images/twit.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar main-navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                        <p style={{ color: '#1AA2BA', fontSize: '13px', marginTop: '5px', fontWeight: '600' }}>語学留学・海外留学エージェントのスマ留 </p>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div className='d-flex'>
                                <div style={{ marginTop: '10px  ' }}>
                                    <div style={{ border: '1px solid gray', padding: '1px 5px' }}>
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input style={{ outline: 'none', border: 'none' }} type="text" placeholder='type something' /><br />
                                    </div>

                                    <img style={{ float: 'right', marginTop: '5px' }} src={QR} alt="" />
                                </div>
                                <div className="card nav-card mx-3 mb-3" style={{ maxWidth: "18rem" }}>
                                    <div className="card-header">Header
                                        <FontAwesomeIcon style={{ marginLeft: '30px' }} icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="card-body">
                                        <img src={tweet} style={{ width: '100%', height: '100px' }} alt="" />
                                    </div>
                                </div>



                            </div>
                        </ul>
                        <br />
                        <ul>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;