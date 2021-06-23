import React from 'react';
import { Link } from 'react-router-dom'
import { navLinks } from "./navLinks";
import { useSelector, useDispatch } from 'react-redux';
import { setIsSignedIn, setUser, setCart } from '../../Redux/actions'
import './dashBoardNavLinks';
import './navbar.css';
import { dashBoardNavLinks } from './dashBoardNavLinks';
import Logo from "../images/logo initials.png";
import cart from "../images/shopping-cart.png";

const NavBar = () => {
    const dispatch = useDispatch()
    const { isSignedIn } = useSelector((state) => state.isSignedIn);

    const handleClick = () => {
        dispatch(setIsSignedIn());
        dispatch(setUser());
        dispatch(setCart());
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
                    {/* <li><Link to={'/register'} className={'nav-link'}>Register</Link></li>
                    <li><Link to={'/signin'} className={'nav-link'}>Sign-in</Link></li>      */}
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
                    <Link to={'store'} className={'custom-link'}>Store</Link>    
                </ul>
                
                <div>
                    <ul className={'nav-list'}>
                        <li><Link to={'/cart'} className={'custom-link'}><img src={cart} alt={'Shopping cart'}/></Link></li>
                        <li><Link to={'/home'} className={'custom-link'} onClick={handleClick}>Sign-out</Link></li>
                    </ul>    
                </div>
            </div>         
        )
    } 
    
}

export default NavBar;