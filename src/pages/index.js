import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import LeftInfoSection from "../components/leftInfoSection";
import LeftInfoStyles from '../components/leftInfoSection.module.scss'
import RightInfoSection from "../components/rightInfoSection";
import RightInfoStyles from '../components/rightInfoSection.module.scss'


const IndexPage = () => {
    return(
        <div>
            <Hero/>
            <Layout>
                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>One Codebase to Rule Them All.</h1>
                    <p className={contentStyles.text}>We develop exclusively with Flutter, a crossplatfrom SDK from Google.</p>
                </ContentSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                            <div className={LeftInfoStyles.content}>
                                <h1>Why Use Flutter</h1>
                                <p>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.</p>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <h1>Picture goes here</h1>
                            </div>
                </LeftInfoSection>
                <RightInfoSection className={RightInfoStyles.container}>
                <div className={RightInfoStyles.image}>
                                <h1>Picture goes here</h1>
                            </div>
                <div className={RightInfoStyles.content}>
                                <h1>Why Use Flutter</h1>
                                <p>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.</p>
                            </div>

                </RightInfoSection>
            </Layout>
        </div>

    )
}

export default IndexPage
