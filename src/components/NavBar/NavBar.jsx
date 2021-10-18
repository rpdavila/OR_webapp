import React from 'react';
import NavBarMobile from '../NavBar_Mobile/NavBar_mobile';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setIsSignedIn, setUser, setCart, setLanguage } from '../../Redux/actions';
import { useWindowWidth } from '../CustomHooks/hooks';
import { useTranslation } from 'react-i18next';
import './dashBoardNavLinks';
import './navbar.css';
import Logo from "../images/logo initials.png";
import cart from "../images/shopping-cart.png";


const NavBar = props => {
    const showNav = useWindowWidth() >= 768 ? 'nav-list' : 'nav-list off';
    const dispatch = useDispatch()
    const { isSignedIn } = useSelector((state) => state.isSignedIn);

    const handleSignOut = () => {
        dispatch(setIsSignedIn());
        dispatch(setUser());
        dispatch(setCart());
    }

    const handleLanguageSelect = (e) => {
        dispatch(setLanguage(e.target.value));
    }

    const { t } = useTranslation(); 

    if (!isSignedIn) {
        return(
            <nav className={'nav-bar'}>
                <Link to='/'>
                    <div className={'logo'}>
                        <img src={Logo} alt={''}/>  
                    </div>
                </Link>
                <div className="spacer" />
                <ul className={showNav}>
                    <li><Link to='/' className='nav-link'>{t('navBarHome')}</Link></li>
                    <li><Link to='/services' className='nav-link'>{t('navBarServices')}</Link></li>
                    <li><Link to='/lessons' className='nav-link'>{t('navBarLessons')}</Link></li>
                    <li><Link to='/bio' className='nav-link'>{t('navBarBio')}</Link></li>
                    <li><Link to='/contact' className='nav-link'>{t('navBarContact')}</Link></li>
                    {/* <li><Link to={'/register'} className={'nav-link'}>Register</Link></li>
                    <li><Link to={'/signin'} className={'nav-link'}>Sign-in</Link></li> */}
                    <li>
                        <select className="language-select" onChange={handleLanguageSelect}>
                            <option value='en'>English</option>
                            <option value='es'>Español</option>
                        </select>
                    </li>
                         
                </ul>
                <NavBarMobile click={props.drawerClickHandler} />
            </nav>
        )  
    } else if (isSignedIn) {
        return (
            <nav className={'nav-bar'}>
                <Link to='/'>
                    <div className={'logo'}>
                        <img src={Logo} alt={''}/>  
                    </div>
                </Link>
                <ul className={showNav}>
                    <li><Link to='/account' className='nav-link'>Account Info</Link></li>
                    <li><Link to='/ph' className='nav-link'>Purchase History</Link></li>
                    <li>
                        <span>Language:</span>
                        <select onChange={handleLanguageSelect}>
                            <option value='en'>English</option>
                            <option value='es'>Español</option>
                        </select>
                    </li>
                </ul>
                <div className="spacer" />   
                <div>
                    <ul className={'nav-list'}>
                        <li><Link to={'/cart'} className={'custom-link'}><img src={cart} alt={'Shopping cart'}/></Link></li>
                        <li><Link to={'/home'} className={'custom-link'} onClick={handleSignOut}>Sign-out</Link></li>
                    </ul>    
                </div>
            </nav>         
        )
    } 
    
}

export default NavBar;