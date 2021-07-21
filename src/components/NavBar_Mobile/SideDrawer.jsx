import React from 'react';
import { navLinks } from '../NavBar/navLinks';
import { Link } from "react-router-dom"
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
        <nav className={drawerClasses}>
            <ul className={'nav-list'}>
                {navLinks.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link to={item.url}
                            className={item.cName}
                            >
                                {item.title}
                            </Link>
                        </li>    
                    )
                })}
                {/* <li><Link to={'/register'} className={'nav-link'}>Register</Link></li>
                <li><Link to={'/signin'} className={'nav-link'}>Sign-in</Link></li>      */}
            </ul>
        </nav>
    )
}

export default SideDrawer;