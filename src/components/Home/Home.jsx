import React from "react";
import {useEffect, useState} from "react";
import Image from "./IMG-3118.jpg"
import "./Home.css"
import Facebook from "../images/SocialMedia/f_logo_RGB-Blue_58.png";
import instagram from "../images/SocialMedia/Instagram_Glyph_Gradient_RGB.png";
import u_tube from "../images/SocialMedia/youtube_social_circle_red.png";

const Home = () => {

    return (
        <div className={'container'}>
            <div className={'title'}>
                <h1>Dr. Orlando Ruiz</h1>
                <p><strong>Musician, Arranger, Educator, Soloist</strong></p>
                <div className={'sm-container-home'}>
                    <img className={'f-social'} src={Facebook} alt={'facebook'}/>
                    <img className={'insta-social'} src={instagram} alt={'instagram'}/>
                    <img className={'u-tube-social'} src={u_tube} alt={'youtube'}/>
                </div>
            </div>
            <div className={'photo-container'}>
                <img className={'photo'} src={Image} alt={'trumpet'}/>
            </div>
        </div>
    )
}

export default Home;
