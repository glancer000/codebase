import React from 'react'

import headerStyles from './heroProject.module.scss'
import phone from '../images/front.png';


const HeroProject = () => {


    return(
        <header className={headerStyles.container}>
            <div className={headerStyles.content}>
                <div className={headerStyles.title}>
                    <h1 className={headerStyles.header}>We develop once,<br/> you deploy everywhere</h1>
                    <h5 className={headerStyles.subheader}>Build beautiful native mobile and web apps from one single codebase</h5>
                </div>
                <div className={headerStyles.holder}></div>   
            </div> 
             
        </header>
    )
}

export default HeroProject