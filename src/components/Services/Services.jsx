import React from "react";
import { useWindowWidth } from '../CustomHooks/hooks'; 
import "./Services.css"
import Image from "../images/Paint.jpg"
import { useTranslation } from 'react-i18next';

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}
const Services = () => {
    const columnFlow = useWindowWidth() >= 768? 'services-container' : 'services-container flow';
    const {t} = useTranslation();
    return(
        <div className={"services-main-container"} style={backgroundImage}>
            <div className={'services-title'}>
                <h1>{t('servicesPageTitle')}</h1>
                <div className={columnFlow}>
                    <div className={'english-pedagogy'}>
                        <h1>{t('generalMusicPedagogyTitle')}</h1>
                        <p>{t('generalMusicPedagogyDescription')}</p>
                        <h3>{t('solfegeTitle')}</h3>
                        <ul>
                            <li>{t('solfegeItem1')}</li>
                            <li>{t('solfegeItem2')}</li>
                            <li>{t('solfegeItem3')}</li>
                        </ul>
                        <h3>{t('musicElementsTitle')}</h3>
                        <ul>
                            <li>{t('musicElementsItem1')}</li>
                            <li>{t('musicElementsItem2')}</li>
                            <li>{t('musicElementsItem3')}</li>
                            <li>{t('musicElementsItem4')}</li>
                            <li>{t('musicElementsItem5')}</li>
                            <li>{t('musicElementsItem6')}</li>
                            <li>{t('musicElementsItem7')}</li>
                        </ul>
                    </div>
                    <div className={'trumpet-pedagogy'}>
                        <h1>{t('trumpetPedagogyTitle')}</h1>
                        <p>{t('trumpetPedagogyDescription')}</p>
                        <h3>{t('trumpetFundamentalsTitle')}</h3>
                        <ul>
                            <li>{t('trumpetfundamentalsItem1')}</li>
                            <li>{t('trumpetfundamentalsItem2')}</li>
                            <li>{t('trumpetfundamentalsItem3')}</li>
                            <li>{t('trumpetfundamentalsItem4')}</li>
                            <li>{t('trumpetfundamentalsItem5')}</li>
                            <li>{t('trumpetfundamentalsItem6')}</li>
                            <li>{t('trumpetfundamentalsItem7')}</li>
                        </ul>
                        <h3>{t('performanceGoalsTitle')}</h3>
                        <p>{t('performanceGoalsDescription')}</p>
                        <ul>
                            <li>{t('performanceGoalsItem1')}</li>
                            <li>{t('performanceGoalsItem2')}</li>
                            <li>{t('performanceGoalsItem3')}</li>
                            <li>{t('performanceGoalsItem4')}</li>
                            <li>{t('performanceGoalsItem5')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services;