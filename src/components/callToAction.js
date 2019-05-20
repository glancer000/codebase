import React from 'react'

import callToActionStyles from './callToAction.module.scss'
import phone from '../images/front.png';
import layoutStyles from './layout.module.scss'



const CallToAction = () => {


    return(
        <header className={layoutStyles.background}>
            <div className={callToActionStyles.content}>
                <div className={callToActionStyles.title}>
                    <h1 className={callToActionStyles.header}>We develop once,<br/> you deploy everywhere</h1>
                    <h5 className={callToActionStyles.subheader}>Build beautiful native mobile and web apps from one single codebase</h5>
                </div>
                <div className={callToActionStyles.holder}><img src={phone} alt="phone" className={callToActionStyles.image}/></div>   
            </div> 
             
        </header>
    )
}

export default CallToAction