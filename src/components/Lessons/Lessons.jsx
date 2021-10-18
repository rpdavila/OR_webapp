import React from 'react';
import { lessonPricingList } from './pricingList';
import { useWindowWidth } from '../CustomHooks/hooks';
import { useTranslation } from 'react-i18next';
import LessonCard from '../Card/LessonCard';
import './container.css';
import photo from './Laughing.png';
import Image from "../images/Paint.jpg";

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}
const divStyle = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    marginLeft: '20px',
    marginTop: '50px'   
}

const DivStyle2 = {
    marginTop: '20px'
}

const Lessons = () => {
    const showImg = useWindowWidth() >= 800 ? 'lesson-img-container' : 'lesson-img-container off';
    const { t } = useTranslation();

    return (
        <div className={'lesson-container'} style={backgroundImage}>
            <div className={'title-container'}>
                <h1>{t('lessonPageTitle')}</h1>
            </div>
            <div className={'title-container'} style={DivStyle2}>
                <h3>{t('lessonPage30Min')}</h3>
            </div>
            <div className={'main-container'}>
                <div className={showImg} style={divStyle}/>     
                <div className={'lesson-info'}>
                    {lessonPricingList.map((item, index)=>{
                        if (item.numOfClasses === 1) {
                            return(
                                <LessonCard
                                    key={index} 
                                    title={t("lessonPackage") + " " + item.id} 
                                    price={item.price}
                                    numOfClasses={item.numOfClasses + " " + t("lessonPackageWeekly")}
                                    time={item.time + " " + t("lessonPackageTime")} 
                                />
                            )    
                        }else{
                            return(
                                <LessonCard
                                        key={index} 
                                        title={t("lessonPackage") + " " + item.id} 
                                        price={item.price}
                                        numOfClasses={item.numOfClasses + " " + t("lessonPackageMonthly")}
                                        time={item.time + " " + t("lessonPackageTime")} 
                                    />
                            )
                        }
                        
                    })}                    
                                          
                </div>
            </div>     
        </div>
    );
}

export default Lessons;