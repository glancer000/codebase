import React from 'react'

import Nav from './nav'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return(
        <div>
            <Nav/>
            <div className={layoutStyles.container}>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout