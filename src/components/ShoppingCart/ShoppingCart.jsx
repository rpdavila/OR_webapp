import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRemoveCartItem } from '../../Redux/actions';
import './ShoppingCart.css';

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.updateCart);
    const { isSignedIn } = useSelector((state) => state.isSignedIn);

    const handlePurchase = () => {
        //fetch stuff
        //insert into DB 
        //app.post => /purchase
        // success message
    }

    const removeItem = (item) => {
        dispatch(setRemoveCartItem(item.id))

    }

    let totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

    if (isSignedIn && cart.length > 0) {
        return(
            <div className={'shopping-cart-container'}>
                {cart.map(item => {
                    return(
                        <div key={item.id} className={'cart-card'}>
                            <h3><b>{item.title}</b></h3>
                            <span>Time: {item.time} minutes</span><hr/>
                            <span>Price: ${item.price}</span><br/>
                            <button type={'submit'} onClick={() => removeItem(item.id)}>Remove Item</button>
                        </div>
                    )    
                })}
                <div className={'total'}>
                    <hr/>
                    <h3>Subtotal:</h3><hr/>
                    <span>${totalPrice} USD</span><br/>
                    <button className={'purchase-items'} onClick={() => handlePurchase}>Purchase</button>
                </div>           
            </div>
        )
    } else {
        return <h1>Cart is empty!</h1>;
    }
    
}

export default ShoppingCart;