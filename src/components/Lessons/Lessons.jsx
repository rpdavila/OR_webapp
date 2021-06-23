import React from 'react';
import { lessonPricingList } from './pricingList'
import LessonCard from '../Card/LessonCard'
import './container.css'
import photo from './Laughing.png'
import Image from "../images/Paint.jpg"

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
    return (
        <div className={'lesson-container'} style={backgroundImage}>
            <div className={'title-container'}>
                <h1>Studio lesson prices and special offers</h1>
            </div>
            <div className={'title-container'} style={DivStyle2}>
                <h3>Free 30 min. consultation with Dr. Ruiz to customize your lessons and focus on your goals, 
                when you sign up for your first lesson package.</h3>
            </div>
            <div className={'main-container'}>
                <div className={'lesson-img-container'} style={divStyle}/>     
                <div className={'lesson-info'}>
                    {lessonPricingList.map((item, index) => {
                    return(
                        <LessonCard 
                            key={index} 
                            id={item.id}
                            title={item.title} 
                            price={item.price} 
                            time={item.time} />
                        )
                    })}
                </div>
            </div>     
        </div>
    );
}

export default Lessons;