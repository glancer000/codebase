import React from 'react'

import { Link} from 'gatsby'
import navStyles from './nav.module.scss'


const Nav = () => {

    return(
        <header className={navStyles.container}> 
            <div className={navStyles.logo}>
                <Link className={navStyles.title} to ="/">logo</Link>
            </div>
            <nav className={navStyles.menu}>
                <ui className={navStyles.navList}>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/services'>Services</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/blog'>Resources</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/about'>About</Link></li>
                </ui>
            </nav>
        </header>
    )
}

export default Nav