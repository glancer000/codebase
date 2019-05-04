import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

const IndexPage = () => {
    return(
        <div>
            <Hero/>
            <Layout>
                <p>hello homepage</p>
            </Layout>
        </div>

    )
}

export default IndexPage
