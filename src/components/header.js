import React from 'react'

import Nav from './nav'
import headerStyles from './header.module.scss'


const Header = () => {


    return(
        <header className={headerStyles.content}>
            <div className={headerStyles.container}>
            <Nav/>
                <h1 className={headerStyles.title}>Header text</h1>
            </div>    
        </header>
    )
}

export default Header