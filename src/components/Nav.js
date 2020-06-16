import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import logo from './logo.png';



class Nav extends React.Component {
    render() {
        return(
            <header className = 'main-nav'>
                 <nav className="navBar">
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/cars/">Cars</NavLink></li>
                            <li><NavLink to="/register/">Register</NavLink></li>
                            <li><NavLink to="/login/">Log in</NavLink></li>
                            <li><NavLink to="/contact/">Contact</NavLink></li>
                        </ul>
                 </nav>
            </header>
        );
    }
};

export default Nav;