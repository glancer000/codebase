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
        <header>
            <h1>{data.site.siteMetadata.author}</h1>
        </header>
    )
}

export default Footer