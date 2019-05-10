import React from 'react'

import footerStyles from '../components/footer.module.scss'
import logo from '../images/Group 3.1.png';

import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }`)

    return(
        <footer className={footerStyles.container}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <h5>Keep in Touch!</h5>
            </div>
            <div>
                <h5>Company</h5>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>
            <div>
                <h5>Keep in Touch!</h5>
                <p>Facebook</p>
                <p>Dribbble</p>

            </div>
        </footer>
    )
}

export default Footer