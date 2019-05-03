import React from 'react'

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
        <footer>
            <h1>{data.site.siteMetadata.author}</h1>
        </footer>
    )
}

export default Footer