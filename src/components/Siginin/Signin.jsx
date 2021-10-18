import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setIsSignedIn, setUser, setError } from '../../Redux/actions'
import DashBoard from '../DashBoard/DashBoard';
import Image from "../images/Paint.jpg"
import './signin.css';

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Signin = () => {

    const dispatch = useDispatch();
    const {isSignedIn} = useSelector((state) => state.isSignedIn)
    const { user } = useSelector((state) => state.isUser);
    const { error } = useSelector((state) => state.hasError);
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [loading, setLoading] = useState(false)
     

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value)
    }

    const handleSubmit = () => {
        setLoading(true)
        if (!signInEmail || !signInPassword){
            setLoading(false)
            dispatch(setError('All fields are required'))
        } else {
            fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: signInEmail,
                password: signInPassword
                })
            })
            .then(response => {
                if (!response.ok) {
                    setLoading(false)
                    dispatch(setError(response.statusText))
                    
                }else{
                    return response.json()
                }  
            })
            .then(user => {
                if (user) {
                    setLoading(false)
                    dispatch(setIsSignedIn(true))
                    dispatch(setUser(user))
                }
            })  
            .catch(err => {
                setLoading(false)
                dispatch(setIsSignedIn(false))
                dispatch(setError(err));   
            })
        }
        
    }

    if(loading) {
        return(
        <h1>Loading...</h1>
        )
    } else if (!user) {
        return(
            <div className='sign-in-container' style={backgroundImage}>
                <article>
                    <main>     
                        <div className={'form-container'}>
                            <span>{error}</span>
                            <label htmlFor='email'><b>Email:</b></label><br/>
                            <input 
                                type='email' 
                                name='email' 
                                id='email'
                                onChange={onEmailChange}
                                required/><br/>
                            <label htmlFor='password'><b>Password:</b></label><br/>
                            <input 
                                type='password' 
                                name='pwd' 
                                id='pwd' 
                                onChange={onPasswordChange}
                                required/><br/>
                            <input 
                                type='submit' 
                                name='submit' 
                                id='submit'
                                onClick={handleSubmit}
                            />
                        </div>    
                    </main>
                </article>
            </div>
        )
    } else if (user && isSignedIn) {
        return<DashBoard/>
    } else if (error) {
        return error
    }
    return (
        <div className='sign-in-container' style={backgroundImage}>
            <article>
                <main>     
                    <div className={'form-container'}>
                        <span>{error}</span>
                        <label htmlFor='email'><b>Email:</b></label><br/>
                        <input 
                            type='email' 
                            name='email' 
                            id='email'
                            onChange={onEmailChange}
                            required/><br/>
                        <label htmlFor='password'><b>Password:</b></label><br/>
                        <input 
                            type='password' 
                            name='pwd' 
                            id='pwd' 
                            onChange={onPasswordChange}
                            required/><br/>
                        <input 
                            type='submit' 
                            name='submit' 
                            id='submit'
                            onClick={handleSubmit}
                        />
                    </div>    
                </main>
            </article>
        </div>
    )
}

export default Signin;