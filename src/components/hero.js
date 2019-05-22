import React from 'react'

import headerStyles from './hero.module.scss'
import codebaseIllustration from '../images/codebase-illustration.png'


const Hero = () => {


    return(
        <header className={headerStyles.container}>
            <div className={headerStyles.content}>
                <div className={headerStyles.title}>
                    <h1 className={headerStyles.header}>We develop once,<br/> you deploy everywhere</h1>
                    <h5 className={headerStyles.subheader}>A cross-platform development development studio to bring your project to life.</h5>
                </div>
                <div className={headerStyles.holder}><img src={codebaseIllustration} alt="phone" className={headerStyles.image}/></div>   
            </div> 
             
        </header>
    )
}

export default Hero