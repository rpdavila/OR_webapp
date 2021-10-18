import React from "react";
import image from "../../../src/components/images/piccolo.jpg"
import bphoto from "../images/Paint.jpg"
import { useWindowWidth } from '../CustomHooks/hooks'
import { useTranslation } from 'react-i18next';
import './About.css'

const backgroundImage = {
    background: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${bphoto})`,
    backgroundSize: 'cover'
}
const About = () => {
    const removeImage = useWindowWidth() >= 768? 'about-image-container' : 'about-image-container off'
    const { t } = useTranslation(); 
    return (
        <div className={'about-container'} style={backgroundImage}>
            <div className={removeImage}>
                <img className={'img'} src={image} alt={''}/>
            </div>
            <div className={'about-text'}>
                <div className={'about-title'}>
                    <h2>{t('biography.title')}</h2>
                </div>
                <p>
                    {t('biography.p1')}
                </p>
                <p>
                    {t('biography.p2')}
                </p>
                <p>
                    {t('biography.p3')}
                </p>
                <p>
                    {t('biography.p4')}
                </p>

            </div>
        </div>
    )
}

export default About;