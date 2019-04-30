import React from 'react'

import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header>
        <nav>
            <ui>
                <li><Link className={headerStyles.link} to='/'>Home</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ui>
        </nav>
        </header>
    )
}

export default Header