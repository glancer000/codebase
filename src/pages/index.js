import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import InfoSection from "../components/info";
import InfoStyles from '../components/info.module.scss'

const IndexPage = () => {
    return(
        <div>
            <Hero/>
            <Layout>
                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>One Codebase to Rule Them All.</h1>
                    <p className={contentStyles.text}>We develop exclusively with Flutter, a crossplatfrom SDK from Google.</p>
                </ContentSection>
                <InfoSection className={InfoStyles.container}>
                            <div className={InfoStyles.content}>
                                <h1>Why Use Flutter</h1>
                                <p>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.</p>
                            </div>
                            <div className={InfoStyles.image}>
                                <h1>Why Use Flutter</h1>
                            </div>
                </InfoSection>
            </Layout>
        </div>

    )
}

export default IndexPage
