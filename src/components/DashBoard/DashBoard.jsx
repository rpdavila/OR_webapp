import React from 'react';
import { useSelector } from 'react-redux'
import LessonCard from '../Card/LessonCard'
import {lessonPricingList} from '../Lessons/pricingList'
import './DashBoard.css'
import Image from "../images/Paint.jpg"

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}
const DashBoard = () => {
    const { user } = useSelector((state) => state.isUser);
    return (
        <div className={'dashboard'} style={backgroundImage}>
            <h1 className={'greeting'}>Hello {user.name}!</h1>
            <p className={'description'}> 
            Below, are the lessons being offered. Please select a package 
            that correctly fits you.
            </p>
            <div className={'main-container'}>     
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
    )
}

export default DashBoard;