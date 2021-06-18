import React from "react";
import image from "./IMG-2910.JPG"
import bphoto from "../images/Paint.jpg"
import './About.css'

const backgroundImage = {
    background: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)), url(${bphoto})`,
    backgroundSize: 'cover'
}
const About = () => {
    return (
        <div className={'about-container'} style={backgroundImage}>
            <div className={'about-image-container'}>
                <img className={'img'} src={image} alt={''}/>
            </div>
            <div className={'about-text'}>
                <div className={'about-title'}>
                    <h2>Biography</h2>
                </div>
                <p>
                    As a native of San Juan, Puerto Rico, Dr. Orlando Ruiz has performed with the island's top
                    musical ensembles like the Puerto Rico Symphony, Arturo Somohano Philharmonic, and
                    Bayamon Symphony Orchestras. Dr. Ruiz made his solo debut at age 13, performing a Leeroy
                    Anderson's <strong><i>A Trumpeter's Lullaby</i></strong> at the Caribe Hilton Hotel and Casino. Four years later, Dr.
                    Ruiz was accepted by early admission at the Conservatory of Music in Puerto Rico, where he
                    pursued his undergraduate studies. While studying at the Conservatory, Dr. Ruiz was the
                    trumpeter for the Sunday T.V. program "Accion de Pura Sangre" from Camarero Horse track
                    racing. Furthermore, he was freelancing in various musical projects like the soundtracks of "Seva
                    Vive" by Angelica Negron and "El Clown" by Omar Silva while becoming the first trumpeter to
                    complete the Performance Diploma at the Conservatory with Roberto Ramirez as his mentor.
                </p>
                <p>
                    In 2007 Orlando went pursuing his master's degree with Prof. Stephen Leisring at the University
                    of Kansas in Lawrence, Kansas, where he performed as principal trumpet of the K.U. Symphony
                    Orchestra and assistant principal of the K.U. Wind Ensemble. While in Lawrence, he played in
                    numerous concerts and projects, including a tour in China and recording for Scott Watson's
                    "Thoughts of a Cow" with the K.U. Trumpet Ensemble. Orlando Also recorded with the K.U.
                    Wind Ensemble "Wild Nights" featuring works by Frank Ticheli, David Dzubay, Steven Bryant,
                    Roshanne Etezady, and John Mackey. Dr. Ruiz also premiered "Songs of Aeolus" trio for
                    trumpet, bassoon, and piano by Joe Eidson for the International Trumpet Guild (ITG) composer's
                    competition.
                </p>
                <p>
                    After concluding his studies in K.U. he put into practice the pedagogical concepts acquired
                    overtime as founding trumpet teacher at the system of youth orchestras of Puerto Rico, where he
                    taught trumpet and served as orchestra and wind ensemble conductor for three years. After those
                    years, he went to work for Houston I.S.D. as band and orchestra conductor, where 14 of his
                    students previously rejected on Houston's All-City Youth Band made the ensemble under his
                    advice. During that time in Houston, Orlando performed with the Houston Heights Orchestra, the
                    Galveston Symphony, the Houston Brass Quintet. He served as principal trumpet of the Houston
                    Sinfonietta, where he performed as soloist Alexander Arutunian's Trumpet Concerto.
                    In 2015 Orlando became a trumpet teacher assistant at Texas Tech University in Lubbock,
                    Texas, where he taught trumpet lessons and taught advanced trumpet techniques to future band
                    directors. While in Lubbock, Orlando performed with the Lubbock Symphony Orchestra and
                    their Educational brass quintet and the Midland-Odessa Symphony and Chorale. Orlando
                    graduated from Texas Tech as a Doctor of Musical Arts in 2020, where he published: An
                    Analysis of Roberto Sierra's Rapsodia for Solo Trumpet and Wind Ensemble. In this publication,
                    Dr. Ruiz explored the piece's origin through interviews and post-tonal theory analysis
                    techniques.
                </p>
                <p>
                    Currently, Dr. Ruiz is a freelancer in New York City metropolitan area, where he is working on
                    arranging classical repertoire as a contribution to the trumpet solo and chamber literature.
                </p>

            </div>
        </div>
    )
}

export default About;