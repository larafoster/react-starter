import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import NavMobile from './NavMobile';
import {
    Container,
    Navbar,
    Collapse,
} from 'reactstrap';

const NavTop = () => {
    return (
        <>
            <Container>
                <div id="navigation" className="menu-two d-none d-lg-block">
                    <Navbar className="navbar-expand-lg ">
                        <div className="navbar-header">
                            <div className="navbar-brand logo">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    width="285"
                                    src={require("../../assets/images/logo.png").default}
                                />
                            </div>
                        </div> 
                        <Collapse className="navbar-collapse">
                       
                            <nav id="mainmenu">
                                <ul className="nav navbar-nav">
                                    <li><NavHashLink to="/"
                                    
                                    >Top</NavHashLink></li>

                                    <li>
                                        <NavLink to="/">About </NavLink></li><li>
                                        <NavHashLink activeClassName="current" to="/skills">Skills</NavHashLink></li><li>
                                        <NavHashLink activeClassName="current" to="/experience">Experience</NavHashLink></li><li>
                                        <NavHashLink activeClassName="current" to="/education">Education</NavHashLink></li><li>
                                        <NavHashLink activeClassName="current" to="/portfolio">Portfolio</NavHashLink></li>
                                        <li>

                                        <NavHashLink activeClassName="current" to="/contact">Contact</NavHashLink></li>
                                </ul>

                            </nav>
                        </Collapse>

                    </Navbar>
                </div>
            </Container> 
                    <div className="d-lg-none">
 <NavMobile  />
                        </div>               

             </>
    );
}

export default NavTop;

