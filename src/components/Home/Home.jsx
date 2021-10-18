import React from "react";
import { useWindowWidth } from "../CustomHooks/hooks";
import Image from "../images/Paint.jpg";
import desktopImage from "../images/PosterOR.png";
import mobileImage from "../images/PosterORMobile.png";
import "./Home.css";
import Facebook from "../images/SocialMedia/f_logo_RGB-Blue_58.png";
// import instagram from "../images/SocialMedia/Instagram_Glyph_Gradient_RGB.png";
import u_tube from "../images/SocialMedia/youtube_social_squircle_red.png";
import linked_in from "../images/SocialMedia/linkedin.png";
import { useTranslation } from 'react-i18next';


const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Home = () => {
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;
    const { t } = useTranslation();

    return (
        <div className={'container'} style={backgroundImage}>
            <div className={'photo'} style={{backgroundImage: `url(${imageUrl})`}}>
                <div className={'sm-container-home'}>                        
                    <p><strong>
                        {t('homePageTitle')} 
                    </strong></p>
                    <div className='sm-container'>   
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
                </div>                              
            </div>
        </div>
    )
}


export default Home;
