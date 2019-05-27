import React from 'react'
import { Link} from 'gatsby'

import sideDrawerStyles from '../sideDrawer/sideDrawer.module.scss'

const SideDrawer = () => {
    return(
        <nav className={sideDrawerStyles.sideDrawer}>
            <ui className={sideDrawerStyles.navList}>
                <li><Link className={sideDrawerStyles.navItem} activeClassName={sideDrawerStyles.activeNavItem} to='/'>Home</Link></li>
                <li><Link className={sideDrawerStyles.navItem} activeClassName={sideDrawerStyles.activeNavItem} to='/services'>Services</Link></li>
                <li><Link className={sideDrawerStyles.navItem} activeClassName={sideDrawerStyles.activeNavItem} to='/blog'>Resources</Link></li>
                <li><Link className={sideDrawerStyles.navItem} activeClassName={sideDrawerStyles.activeNavItem} to='/about'>About</Link></li>
            </ui>
        </nav>

    )
}

export default SideDrawer