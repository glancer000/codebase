import React from 'react'

import Nav from './nav'
import headerStyles from './header.module.scss'


const Hero = () => {


    return(
        <header className={headerStyles.content}>
            <div className={headerStyles.container}>
                <div className={headerStyles.title}>
                    <h1 >We've created over250 digital productsthat users love</h1>
                </div>
                
            </div>    
        </header>
    )
}

export default Hero