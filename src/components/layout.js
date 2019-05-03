import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return(
        <div>
            <Header/>
            <div className={layoutStyles.container}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout