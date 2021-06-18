import React from 'react';
import { useSelector } from 'react-redux'
import './LessonCard.css'
import photo from './Background4prices.jpg'

const divBackground = {
    backgroundImage: `url(${photo})`
}
const LessonCard = ({title, price, time}) => {
    const { user } = useSelector((state) => state.isUser);
    if (user) {
        return(
            <div className={'lesson-card'} style={divBackground}>
            <h2>{title}</h2>
            <p>{time} min lesson(s) for ${price}</p>
            <button>Add to cart</button>
        </div>
        )
    }else{
        return (
            <div className={'lesson-card'} style={divBackground}>
                <h2>{title}</h2>
                <p>{time} min lesson(s) for ${price}</p>
            </div>
        )
    }

}

export default LessonCard;