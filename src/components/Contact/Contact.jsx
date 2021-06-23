import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../../Redux/actions'
import Image from "../images/Paint.jpg"
import './contact.css';


const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Contact = () => {
    const dispatch = useDispatch()
    // const { user } = useSelector((state) => state.isUser);
    const { error } = useSelector((state) => state.hasError);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [contactSubject, setContactSubject] = useState('')
    const [contactMessage, setContactMessage] = useState('')
    // const [loading, setLoading] = useState(false);


    const onNameChange = (event) => {
        setContactName(event.target.value)
    }
    
    const onEmailChange = (event) => {        
        setContactEmail(event.target.value)    
    }
    

    const onPhoneChange = (event) => {
        setContactPhone(event.target.value)
    }

    const validatefields = () => {
        const regxEmail = /^([a-zA-Z0-9!@#$%*&().]+)@([a-zA-Z1-9]+)\.([a-z]+)$/
        const regxPhone = /^\d{3}-\d{3}-\d{4}$/
        if (!regxEmail.test(contactEmail)){
            dispatch(setError('Email is not valid'))
        }else if(!regxPhone.test(contactPhone)){
            dispatch(setError('Phone number must have dashes inbetween groups'))
        }
    }

    const handleSubmit = () => {
        //send email
        //success message
    }

    return(
        <div className='register-container' style={backgroundImage}>
            <article>
                <main>     
                    <div className={'form-container'}>
                        <span>{error}</span>
                        <label htmlFor='name'><b>Name:</b></label>
                        <input 
                            type='name' 
                            name='name' 
                            id='name'
                            placeholder='Full Name'
                            onChange={onNameChange}
                            required/><br/>

                        <label htmlFor='email'><b>Email:</b></label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email'
                            placeholder='email@someplace.com'
                            onChange={onEmailChange}
                            required/><br/>
                        <label htmlFor='phone'><b>Phone Number:</b></label>

                        <input 
                            type='phone' 
                            name='phone' 
                            id='phone'
                            placeholder='111-222-3333'
                            onChange={onPhoneChange}
                            required/><br/>
                        <label htmlFor='subject'><b>Subject:</b></label>

                        <select id='subject' name='subject'>
                            <option value='Lesson Registration'>Lesson Registration</option>
                            <option value='Lesson Information'>Lesson Information</option>
                        </select><br/>
                        
                        <label htmlFor='message'><b>Message:</b></label>
                        <textarea
                            type='message'
                            name='message'
                            placeholder='Type message here.'
                            style={{height:'200px'}}
                        />
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
        

export default Contact;