import React from 'react'

import heroStyles from './hero.module.scss'
import codebaseIllustration from '../images/codebase-illustration.png'


const Hero = () => {


    return(
        <header className={heroStyles.container}>
            <div className={heroStyles.content}>
                {/* <div className={heroStyles.title}>
                    <h1 className={heroStyles.header}>We develop once,<br/> you deploy everywhere</h1>
                    <h5 className={heroStyles.subheader}>A cross-platform development development studio to bring your project to life.</h5>
                </div> */}
                <h1 className={heroStyles.mobileTitle}>Develop once,<br/> deploy everywhere</h1>
                
                {/* <div className={heroStyles.holder}><img src={codebaseIllustration} alt="phone"/></div>    */}
            </div> 
             
        </header>
    )
}

export default Hero