import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import LeftInfoSection from "../components/leftInfoSection";
import LeftInfoStyles from '../components/leftInfoSection.module.scss'

//images
import iphone from '../images/iphone.png';
import planningIcon from '../images/planning-icon.png';

import TopIconInfo from "../components/topIconInfo";
import topIconStyles from '../components/topIconInfo.module.scss'


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
                                <p>Flutter has been developed by Google to a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <img src={iphone} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                    <div>
                        <img src={iphone} alt="phone"/>
                    </div>
                    <div className={LeftInfoStyles.content}>
                        <h1>Why Use Flutter</h1>
                        <p>Flutter allows you to build beautiful native apps on iOS and Android from a single codebase.</p>
                    </div>

                </LeftInfoSection>
                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>From Concept to Creation</h1>
                    <p className={contentStyles.text}>Our 3 Step Process will ensure that every detail of your project is meticulously thought out and designed</p>
                </ContentSection>
                <div className={topIconStyles.wrapper}>
                    <TopIconInfo >
                        <img src={planningIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h6 className={topIconStyles.header}>Header</h6>
                        <p className={topIconStyles.text}>This is where the details of the perk would go</p>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={planningIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h6 className={topIconStyles.header}>Header</h6>
                        <p className={topIconStyles.text}>This is where the details of the perk would go</p>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={planningIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h6 className={topIconStyles.header}>Header</h6>
                        <p className={topIconStyles.text}>This is where the details of the perk would go</p>
                    </TopIconInfo>
                </div>
            </Layout>
        </div>

    )
}

export default IndexPage
