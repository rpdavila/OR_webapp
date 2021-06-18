import React from 'react';
import { Link } from 'react-router-dom'
import { navLinks } from "./navLinks";
import { useSelector, useDispatch } from 'react-redux';
import { setIsSignedIn, setUser } from '../../Redux/actions'
import './dashBoardNavLinks';
import './navbar.css';
import { dashBoardNavLinks } from './dashBoardNavLinks';
import Logo from "../images/logo initials.png"

const NavBar = () => {
    const dispatch = useDispatch()
    const { isSignedIn } = useSelector((state) => state.isSignedIn);

    const handleClick = () => {
        dispatch(setIsSignedIn())
        dispatch(setUser())
    }

    if (!isSignedIn) {
        return(
            <div className={'nav-bar'}>
                <div className={'logo'}>
                    <img src={Logo} alt={''}/>  
                </div>
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
                    <li><Link to={'/register'} className={'nav-link'}>Register</Link></li>
                    <li><Link to={'/signin'} className={'nav-link'}>Sign-in</Link></li>     
                </ul>
            </div>
        )  
    } else if (isSignedIn) {
        return (
            <div className={'nav-bar'}>
                <ul className={'nav-list'}>
                    {dashBoardNavLinks.map((item, index) => {
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
                </ul>
                <Link to={'/home'} className={'custom-link'} onClick={handleClick} >Sign-out</Link>
            </div>         
        )
    } 
    
}

export default NavBar;