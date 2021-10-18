import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../Redux/actions';
import './LessonCard.css';
import photo from './Background4prices.jpg';

const divBackground = {
    backgroundImage: `url(${photo})`
}


const LessonCard = ({id, title, price, time, numOfClasses }) => {
    const { user } = useSelector((state) => state.isUser);
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(setCart(item));
    }

    if (user) {
        return(
            <div className={'lesson-card'} style={divBackground}>
                <h2>{title}</h2>
                <p>{numOfClasses}</p>
                <p>{time}</p>
                <button type={'submit'} value={'add'} onClick={() => addToCart({id ,title, time, price})}>Add to cart</button>            
            </div>
        )
    }else{
        return (
            <div className={'lesson-card'} style={divBackground}>
                <h2>{title}</h2>
                <p>{numOfClasses}</p>
                <p>{time}</p>
            </div>
        )
    }
}

export default LessonCard;