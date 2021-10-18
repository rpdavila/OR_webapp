import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { API } from 'aws-amplify'
import { createCandidate } from '../../graphql/mutations'
import { useTranslation } from 'react-i18next';
import Image from "../images/Paint.jpg"
import './contact.css';

const backgroundImage = {
    backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)), url(${Image})`,
    backgroundSize: 'cover'
}

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(null);
    const { t } = useTranslation();
    // const [response, setResponse] = useState({});
    const regxName = /^[a-z ,.'-]{2,}$/i
    const regxEmail = /^\S+@\S+$/
    const regxPhone = /^\d{3}-\d{3}-\d{4}$/

    //connect to AWS Serverless on Submit
    const onSubmit = async data => {
        setLoading(true);
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
        });
        setLoading(false); 
    };

    if (loading) {
        return (
            <div className='message-container' style={backgroundImage}>
                <h1 id='success'>{t('contactFormSendingMessage')}</h1>
            </div>
        )
    }
    if (loading === false) {
        return(
            <div className='message-container' style={backgroundImage}>
                <h1 id='success'>{t('contactFormMessageSent')}</h1>;
            </div>
        )     
    }
    return(
        <div className='register-container' style={backgroundImage}>  
            <form className={'form-container'} onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor='name'><b>{t('contactFormName')}</b></label>
                <input {...register('name', { required: true, pattern: regxName})} />
                {errors.name && errors.name.type ==='pattern' && <p id='error'>{t("contactFormErrorMessage.nameError")}</p>}
                {errors.name && errors.name.type ==='required' && <p id='error'>{t("contactFormErrorMessage.requiredField")}</p>}
                <br/>

                <label htmlFor='email'><b>{t('contactFormEmail')}</b></label>
                <input {...register('email', { required: true, pattern: regxEmail})} />
                {errors.email && errors.email.type === 'required' && <p id='error'>{t("contactFormErrorMessage.requiredField")}</p>}
                {errors.email && errors.email.type === 'pattern' && <p id='error'>{t('contactFormErrorMessages.emailError')}</p>}
                <br/>    

                <label htmlFor='phone'><b>{t('contactFormPhone')}</b></label>
                <input {...register('phone', { required: true, pattern: regxPhone})} />
                {errors.phone && errors.phone.type === 'pattern' && <p id='error'>{t("contactFormErrorMessage.phoneError")}</p>}
                {errors.phone && errors.phone.type === 'required' && <p id='error'>{t("contactFormErrorMessage.requiredField")}</p>}
                <br/>

                <label htmlFor='subject'><b>{t('contactFormSubject')}</b></label>
                <select {...register('subject', { required: true})}>
                    <option value='Lesson Registration'>{t("contactFormSubjectSwitch.lessonRegistration")}</option>
                    <option value='Lesson Information'>{t("contactFormSubjectSwitch.lessonInformation")}</option>
                    <option value='Other'>{t("contactFormSubjectSwitch.lessonOther")}</option>
                </select><br/>
                
                <label htmlFor='message'><b>{t('contactFormMessage')}</b></label>
                <textarea {...register('message', { required: true, minLength: 10})} style={{height:'200px'}}/>
                {errors.message && errors.message.type === 'minLength' && <p id='error'>{t("contactFormErrorMessage.messageError")}</p>}
                {errors.message && errors.message.type === 'required' && <p id='error'>{t("contactFormErrorMessage.requiredField")}</p>}
        
                <button className='button-submit'
                    type='submit' 
                    name='submit' 
                    id='submit'
                >{t('contactFormSend')}</button>
            </form>   
        </div>
    )
} 
        

export default Contact;