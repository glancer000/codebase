import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return(
        <div >
            <Header/>
            <main className={layoutStyles.container}>{props.childern}</main>
            <Footer/>
        </div>
    )
}

export default Layout