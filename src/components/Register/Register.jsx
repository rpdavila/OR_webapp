import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setError, setIsSignedIn } from '../../Redux/actions'
import Image from "../images/Paint.jpg"
import './register.css';


const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Register = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.isUser);
    const { error } = useSelector((state) => state.hasError);
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const onNameChange = (event) => {
        setRegisterName(event.target.value)
    }
    
    const onEmailChange = (event) => {        
        setRegisterEmail(event.target.value)    
    }
    
    const onPasswordChange = (event) => {
        setRegisterPassword(event.target.value)
    }

    const validateEmail = () => {
        const regx = /^([a-zA-Z0-9!@#$%*&().]+)@([a-zA-Z1-9]+)\.([a-z]+)$/
        if (regx.test(registerEmail)){
            handleSubmit()
        }else{
            dispatch(setError('Email is not valid'))
        }
    }

  
    const handleSubmit = () => { 
        setLoading(true)
        if(!registerName || !registerEmail || !registerPassword) {
            setLoading(false)
            dispatch(setError('All fields are required'))
        } else {
            fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: registerName,
                email: registerEmail,
                    password: registerPassword
                })
            })
            .then(response => {
                if (!response.ok) {
                    setLoading(false)
                    dispatch(setError(response.statusText))
                } else {
                    return response.json()
                }
            })
            .then(user => {
                if (user) {
                    setLoading(false);
                    dispatch(setUser(user));
                }
            })
            .catch(err => {
                setLoading(false)
                dispatch(setIsSignedIn(false))
                dispatch(setError(err))  
            })   
        }
    }

    if (loading) {
        return(
            <h1>Loading...</h1>
        )
    } else if (!user) {
        return(
            <div className='register-container' style={backgroundImage}>
                <article>
                    <main>     
                        <div className={'form-container'}>
                            <span>{error}</span>
                            <label htmlFor='name'><b>Name:</b></label><br/>
                            <input 
                                type='name' 
                                name='name' 
                                id='name'
                                onChange={onNameChange}
                                required/><br/>
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
                                onClick={validateEmail}
                            />
                        </div>    
                    </main>
                </article>
            </div>
        )
    } else if (user) {
        return(
            <div className={'success'} style={backgroundImage}>
                <h1>Registration Successful!</h1><br/>
                <p>Please sign in</p>
            </div>    
        )
    } else if (error) {
        return(
            <h1>{error}</h1>
        ) 
    } 
}

export default Register;