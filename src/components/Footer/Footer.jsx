import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Facebook from '../images/SocialMedia/f_logo_RGB-Blue_58.png'
// import instagram from '../images/SocialMedia/Instagram_Glyph_Gradient_RGB.png'
import u_tube from '../images/SocialMedia/youtube_social_squircle_red.png'
import linked_in from "../images/SocialMedia/linkedin.png"


const Footer = () => {
    return (
        <div className={`footer`}>
            <div className={'sm-container'}>
                <a href={'https://www.facebook.com/profile.php?id=100069268163237'}>
                    <img className={'f-social'} src={Facebook} alt={'facebook'}/>
                </a> 
                {/*<img className={'insta-social'} src={instagram} alt={'instagram'}/>*/}
                <a href={'https://www.youtube.com/channel/UCDzcynEIOQYCQJFJekmAASQ'}>
                    <img className={'u-tube-social'} src={u_tube} alt={'youtube'}/> 
                </a>
                <a href={'https://www.linkedin.com/in/dr-orlando-ruiz-384a9089/'}>
                    <img className={'linked-in-home'} src={linked_in} alt={'linked in'}/>
                </a>
            </div>
            <div className={'cr-container'}>
                &copy; Copyright 2021 Dr. Orlando Ruiz <br/>
                <hr/>
                <Link id='link' to='/privacy'><small>Privacy Policy</small></Link><br/>
                <small>Website Design By: npom-g updateRafael Pietri-Davila</small>
            </div>            
        </div>
    );
}

export default Footer;