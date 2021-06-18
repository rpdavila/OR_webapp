import React from "react";
import Image from "../images/Paint.jpg"
import Photo from "../images/PosterOR.png"
import "./Home.css"
// import Facebook from "../images/SocialMedia/f_logo_RGB-Blue_58.png";
// import instagram from "../images/SocialMedia/Instagram_Glyph_Gradient_RGB.png";
import u_tube from "../images/SocialMedia/youtube_social_squircle_red.png";
import linked_in from "../images/SocialMedia/linkedin.png";

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const portrait = {
    backgroundImage: `url(${Photo})`,
}

const Home = () => {
    return (
        <div className={'container'} style={backgroundImage}>
            <div className={'photo'} style={portrait}>
            <div className={'title'}>
                <p><strong>Musician, Arranger, Educator, Soloist</strong></p>
                <div className={'sm-container-home'}>
                    {/*<img className={'f-social'} src={Facebook} alt={'facebook'}/>*/}
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
