import React, { useEffect, useState } from 'react';
import '../../ComponentsCSS/Header.css';
import { Link,useNavigate } from 'react-router-dom';

const Header = () => {
    // Change Header Background on Scrolling
    const navigate = useNavigate();
    const WFloginId = localStorage.getItem('WFloginId');
    const WFuser = localStorage.getItem('user');
    const [isScrolled, setIsScrolled] = useState(false);

    const onLogout = () =>{
        localStorage.clear();
        navigate('/');
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 85) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // Change Header Background on Scrolling End
    return (
        <header className={isScrolled ? "header on-scroll" : "header"} id="header">
            <nav className="navbar navbar-light  navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <div className="logo">
                            <img src="./images/logo.png" className="without_hover" alt="" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon">
                            <img src="./images/nav.svg" alt="" />
                        </span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="0" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div className="logo_offcanavs">
                                <div className="logo">
                                    <img src="./images/dark-logo.png" className="without_hover" alt="" width={150} />
                                </div>
                            </div>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1">
                                <li className="nav-item">
                                    <a className={`nav-link active`} href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <ul className='navbar-nav login_header'>
                                {!WFloginId && !WFuser ?
                                    <li><Link to='/login'>Log in / </Link><Link to='/register'> Register</Link></li>
                                    :
                                    <li><span onClick={onLogout}>Logout</span></li>
                                }
                                <li> <a href="#" className="menu_block">Get in Touch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;