import React from "react";
import { solfege, musicElements, trumpetFundamentals, trumpetGoals} from "./ServicesList"
import "./Services.css"

const Services = () => {
    return(
        <div className={"services-main-container"}>
            <div className={'services-title'}>
                <h1>Pedagogical Services</h1>
            </div>
            <div className={'services container'}>
                <div className={'english-pedagogy'}>
                    <h1>General Music Pedagogy</h1>
                    <p>Have you ever had music lessons before? If you have or have not, I can help with any level
                        of musical knowledge. In my 20 + years of musical career I have worked with all types of
                        students on developing their music literacy skills. <br/><br/>
                        I can help you develop the following:
                    </p>
                    <h3>Solfege:</h3>
                    <ul>
                        {solfege.map((item, index)=> {
                            return(
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                    <h3>Musical elements:</h3>
                    <ul>
                        {musicElements.map((item, index)=> {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={'trumpet-pedagogy'}>
                    <h1>Trumpet Pedagogy</h1>
                    <p>
                        Let me share with you my concepts of cultivating your sound and technique to facilitate
                        your expression on the trumpet over time.<br/> <br/>
                        Some of the concepts I work with my students are:
                    </p>
                    <ul>
                        {trumpetFundamentals.map((item, index)=> {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                    <h3>Performance Goals:</h3>
                    <ul>
                        {trumpetGoals.map((item, index)=>{
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;