import React from 'react'
import { Link} from 'gatsby'
import navStyles from './nav.module.scss'
import logo from '../../images/logo.png';

import DrawerToggleButton from '../sideDrawer/drawerToggleButton'

const Nav = (props) => {
    return (
        <header className={navStyles.container}>
            <nav className={navStyles.content}>
                <div>
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div><Link className={navStyles.logo} to ="/"><img src={logo} alt="Logo" /></Link></div>
                <div className={navStyles.spacer}/>
                <div className={navStyles.links}>
                    <ul>
                        <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/'>Home</Link></li>
                        <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/services'>Services</Link></li>
                        <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/blog'>Resources</Link></li>
                        <li><Link className={navStyles.navItem} activeClassName={navStyles.activeNavItem} to='/about'>About</Link></li>
                    </ul>
                </div>
                <div><Link className={navStyles.navItem} to='/project'>Start your Project</Link></div>
            </nav>
        </header>
    )
}

export default Nav