import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {


    return(
        <header className={headerStyles.container}> 
        <div>
            <Link className={headerStyles.title} to ="/">
            <h1>Codebase</h1>
            </Link>
        </div>
        <div>
            
        </div>
        <nav>
            <ui className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Services</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Resources</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
            </ui>
        </nav>
        </header>
    )
}

export default Header