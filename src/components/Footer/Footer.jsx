import React from 'react';
import './Footer.css'
// import Facebook from '../images/SocialMedia/f_logo_RGB-Blue_58.png'
// import instagram from '../images/SocialMedia/Instagram_Glyph_Gradient_RGB.png'
import u_tube from '../images/SocialMedia/youtube_social_squircle_red.png'
import linked_in from "../images/SocialMedia/linkedin.png"


const Footer = () => {
    return (
        <div className={`footer`}>
            <div className={'sm-container'}>
                {/*<img className={'f-social'} src={Facebook} alt={'facebook'}/>*/}
                {/*<img className={'insta-social'} src={instagram} alt={'instagram'}/>*/}
                <img className={'u-tube-social'} src={u_tube} alt={'youtube'}/>
                <img className={'linked-in'} src={linked_in} alt={'linked in'}/>
            </div>
            <div className={'cr-container'}>
                &copy; Copyright 2021 Dr. Orlando Ruiz
            </div>
            
        </div>
    );
}

export default Footer;