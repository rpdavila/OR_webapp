import React from 'react';
import './NavBar_Mobile.css';
import { useWindowWidth } from '../CustomHooks/hooks';

const NavBarMobile = props => {
    const showMobile = useWindowWidth() >= 768 ? 'toggle-button off' : 'toggle-button';
    return(
        <button className={showMobile} onClick={props.click}>
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
        </button>
    )
}
export default NavBarMobile;