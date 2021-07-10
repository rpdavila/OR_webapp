import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { API } from 'aws-amplify'
import { createCandidate } from '../../graphql/mutations'
import Image from "../images/Paint.jpg"
import './contact.css';

const SITE_KEY = process.env.GRECAPTCHA;

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(null);
    const [response, setResponse] = useState({});
    const regxName = /^[a-z ,.'-]{2,}$/i
    const regxEmail = /^\S+@\S+$/
    const regxPhone = /^\d{3}-\d{3}-\d{4}$/

    //connect to AWS Serverless on SUbmit
    const onSubmit = async data => {
        console.log(data.name)
        await API.graphql({
            query: createCandidate,
            variables: {
                input: {
                   name: data.name,
                   email: data.email,
                   phone: data.phone,
                   subject: data.subject,
                   message: data.message 
                },
            },
        })
        .then(res => setResponse(res));
    }
    


    // connect to backend server
    // const onSubmit = (data, e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     window.grecaptcha.ready(function() {
    //         window.grecaptcha.execute(SITE_KEY, {action: 'submit'}).then(function(token) {
    //         submitData(data,token); 
    //         });
    //     });
    // }

    // const submitData = (data, token) => {
    //     // call a backend API to verify reCAPTCHA response
    //     fetch('localhost:3000/contact', {
    //       method: 'POST',
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         "name": data.name,
    //         "email": data.email,
    //         "phone": data.phone,
    //         "subject": data.subject,
    //         "message": data.message,
    //         "token": token
    //       })
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //       setLoading(false);
    //       setResponse(res)
    //     });
    // }


    // useEffect(() => {
    //     const loadScriptByURL = (id, url, callback) => {
    //       const isScriptExist = document.getElementById(id);
       
    //       if (!isScriptExist) {
    //         var script = document.createElement("script");
    //         script.type = "text/javascript";
    //         script.src = url;
    //         script.id = id;
    //         script.onload = function () {
    //           if (callback) callback();
    //         };
    //         document.body.appendChild(script);
    //       }
       
    //       if (isScriptExist && callback) callback();
    //     }
       
    //     // load the script by passing the URL
    //     loadScriptByURL("recaptcha-key", 
    //     `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
    //      function () {
    //         console.log("Script loaded!");
    //     });

    // }, []);
    

    if (loading) {
        return (
            <div className='message-container' style={backgroundImage}>
                <h1 id='success'>Loading...</h1>
            </div>
        )
    }
    if (loading === false) {
        return(
            <div className='message-container' style={backgroundImage}>
                <h1 id='success'>Message Sent</h1>;
            </div>
        )     
    }
    return(
        <div className='register-container' style={backgroundImage}>
            <article>
                <main>     
                    <form className={'form-container'} onSubmit={handleSubmit(onSubmit)} >
                        <label htmlFor='name'><b>Name:</b></label>
                        <input {...register('name', { required: true, pattern: regxName})} />
                        {errors.name && errors.name.type ==='pattern' && <p id='error'>Name must be more than 2 characters long</p>}
                        {errors.name && errors.name.type ==='required' && <p id='error'>This field is required</p>}
                        <br/>

                        <label htmlFor='email'><b>Email:</b></label>
                        <input {...register('email', { required: true, pattern: regxEmail})} />
                        {errors.email && errors.email.type === 'required' && <p id='error'>This field is required</p>}
                        {errors.email && errors.email.type === 'pattern' && <p id='error'>Not a valid email</p>}
                        <br/>    

                        <label htmlFor='phone'><b>Phone Number:</b></label>
                        <input {...register('phone', { required: true, pattern: regxPhone})} />
                        {errors.phone && errors.phone.type === 'pattern' && <p id='error'>Phone number must contain hyphens. Ex: 111-222-3333</p>}
                        {errors.phone && errors.phone.type === 'required' && <p id='error'>This Field is required</p>}
                        <br/>

                        <label htmlFor='subject'><b>Subject:</b></label>
                        <select {...register('subject', { required: true})}>
                            <option value='Lesson Registration'>Lesson Registration</option>
                            <option value='Lesson Information'>Lesson Information</option>
                        </select><br/>
                        
                        <label htmlFor='message'><b>Message:</b></label>
                        <textarea {...register('message', { required: true, minLength: 10})} style={{height:'200px'}}/>
                        {errors.message && errors.message.type === 'minLength' && <p id='error'>Must be 10 Characters or more to ba valid</p>}
                        {errors.message && errors.message.type === 'required' && <p id='error'>This field is required</p>}
               
                        <button
                            type='submit' 
                            name='submit' 
                            id='submit'
                        >Send Message</button>
                    </form>    
                </main>
            </article>
        </div>
    )
} 
        

export default Contact;