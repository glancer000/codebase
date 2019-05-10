import React from 'react'

import { Link} from 'gatsby'
import navStyles from './nav.module.scss'
import logo from '../images/Group 3 (3).png';


const Nav = () => {

    return(
        <nav className={navStyles.container}>
            <Link className={navStyles.logo} to ="/"><img src={logo} alt="Logo" /></Link>
            <div className={navStyles.spacer}></div>
            <div className={navStyles.nav}>
                <ui className={navStyles.navList}>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/'>Home</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/services'>Services</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/blog'>Resources</Link></li>
                    <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/about'>About</Link></li>
                </ui>
            </div>
            <div>Start your Project</div>
        </nav>
            
    )
}

export default Nav