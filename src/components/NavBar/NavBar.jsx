import React from 'react';
import {navLinks} from "./navLinks";
import Link from "../Router/Link";
import './navbar.css'

const NavBar = () => {
    return (
        <div className={'nav-bar'}>
            <ul className={'nav-list'}>
                {navLinks.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link href={item.url}
                               className={item.cName}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default NavBar;