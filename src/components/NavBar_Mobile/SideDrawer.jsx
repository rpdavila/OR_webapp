import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../Redux/actions';
import { Link } from "react-router-dom"

import './SideDrawer.css';

const SideDrawer = props => {
    const {t} = useTranslation();
    const handleLanguageSelect = (e) => {
        dispatch(setLanguage(e.target.value));
    }
    const dispatch = useDispatch();

    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return(
        <nav className={drawerClasses}>
            <ul className={'nav-list'}>
                <li>
                    <select className="language-select" onChange={handleLanguageSelect}>
                        <option value='en'>English</option>
                        <option value='es'>Español</option>
                    </select>
                </li>       
                <li><Link to='/' className='nav-link'>{t('navBarHome')}</Link></li>
                <li><Link to='/services' className='nav-link'>{t('navBarServices')}</Link></li>
                <li><Link to='/lessons' className='nav-link'>{t('navBarLessons')}</Link></li>
                <li><Link to='/bio' className='nav-link'>{t('navBarBio')}</Link></li>
                <li><Link to='/contact' className='nav-link'>{t('navBarContact')}</Link></li>
                {/* <li><Link to={'/register'} className={'nav-link'}>Register</Link></li>
                <li><Link to={'/signin'} className={'nav-link'}>Sign-in</Link></li> */}
                                 
            </ul>            
        </nav>
    )
}

export default SideDrawer;