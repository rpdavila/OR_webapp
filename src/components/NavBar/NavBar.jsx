import React from 'react';
import NavBarMobile from '../NavBar_Mobile/NavBar_mobile';
import { Link } from 'react-router-dom'
import { navLinks } from "./navLinks";
import { useSelector, useDispatch } from 'react-redux';
import { setIsSignedIn, setUser, setCart } from '../../Redux/actions';
import { useWindowWidth } from '../CustomHooks/hooks';
import './dashBoardNavLinks';
import './navbar.css';
import { dashBoardNavLinks } from './dashBoardNavLinks';
import Logo from "../images/logo initials.png";
import cart from "../images/shopping-cart.png";


const NavBar = props => {
    const showNav = useWindowWidth() >= 768 ? 'nav-list' : 'nav-list off';
    const dispatch = useDispatch()
    const { isSignedIn } = useSelector((state) => state.isSignedIn);

    const handleClick = () => {
        dispatch(setIsSignedIn());
        dispatch(setUser());
        dispatch(setCart());
    }


    if (!isSignedIn) {
        return(
            <nav className={'nav-bar'}>
                <Link to='/home'>
                    <div className={'logo'}>
                        <img src={Logo} alt={''}/>  
                    </div>
                </Link>
                <div className="spacer" />
                <ul className={showNav}>
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
                
                <NavBarMobile click={props.drawerClickHandler} />
                
            </nav>
        )  
    } else if (isSignedIn) {
        return (
            <nav className={'nav-bar'}>
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
            </nav>         
        )
    } 
    
}

export default NavBar;