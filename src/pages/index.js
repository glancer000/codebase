import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import LeftInfoSection from "../components/leftInfoSection";
import LeftInfoStyles from '../components/leftInfoSection.module.scss'
import iphone from '../images/iphone.png';


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
                                <img src={iphone} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                    <div className={LeftInfoStyles.image}>
                        <img src={iphone} alt="phone" className={LeftInfoStyles.image}/>
                    </div>
                    <div className={LeftInfoStyles.content}>
                        <h1>Why Use Flutter</h1>
                        <p>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.</p>
                    </div>

                </LeftInfoSection>
            </Layout>
        </div>

    )
}

export default IndexPage
