import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import LeftInfoSection from "../components/leftInfoSection";
import LeftInfoStyles from '../components/leftInfoSection.module.scss'

//images
import flutterLogo from '../images/flutter-logo.png';
import prototypeIcon from '../images/prototype_icon.png';
import buildIcon from '../images/build_icon.png';
import launchIcon from '../images/launch_icon.png';

import TopIconInfo from "../components/topIconInfo";
import topIconStyles from '../components/topIconInfo.module.scss'


const IndexPage = () => {
    return(
        <div>
            <Hero/>
            <Layout>
            <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>3 Reasons to Choose Codebase</h1>
                    <p className={contentStyles.text}>Our 3 Step Process will ensure that every detail of your project is meticulously thought out and designed</p>
                </ContentSection>
                <div className={topIconStyles.wrapper}>
                    <TopIconInfo >
                        <img src={prototypeIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h3 className={topIconStyles.header}>One Codebase to Maintain</h3>
                        <p className={topIconStyles.text}>Research and design a working prototype that will help test user experience.</p>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={buildIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h3 className={topIconStyles.header}>Build</h3>
                        <p className={topIconStyles.text}>We take the approved prototype and build out a fully functional cross platform product.</p>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={launchIcon} alt="cross development planning" className={topIconStyles.icon}/>
                        <h3 className={topIconStyles.header}>Test & Launch</h3>
                        <p className={topIconStyles.text}>Perform various code and device tests to ensure performance before launching product.</p>
                    </TopIconInfo>
                </div>
            
                <LeftInfoSection className={LeftInfoStyles.container}>
                            <div className={LeftInfoStyles.content}>
                                <h1>1. Define your project</h1>
                                <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                                <button>Learn More</button>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                    <div className={LeftInfoStyles.image}>
                        <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                    </div>
                    <div className={LeftInfoStyles.content}>
                        <h1>2. User Experience Design</h1>
                        <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                        <button>Learn More</button>
                    </div>

                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                            <div className={LeftInfoStyles.content}>
                                <h1>3. Visual Design Prototyping</h1>
                                <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                                <button>Learn More</button>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                    <div className={LeftInfoStyles.image}>
                        <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                    </div>
                    <div className={LeftInfoStyles.content}>
                        <h1>4. Develop & Test</h1>
                        <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                        <button>Learn More</button>
                    </div>

                </LeftInfoSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                            <div className={LeftInfoStyles.content}>
                                <h1>5. Launch on all Platforms</h1>
                                <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                                <button>Learn More</button>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>
                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>One Codebase to Rule Them All.</h1>
                    <p className={contentStyles.text}>We develop exclusively with Flutter, a crossplatfrom SDK developed by Google.</p>
                </ContentSection>
                <LeftInfoSection className={LeftInfoStyles.container}>
                            <div className={LeftInfoStyles.content}>
                                <h1>Why Use Flutter</h1>
                                <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                                <button>Learn More</button>
                            </div>
                            <div className={LeftInfoStyles.image}>
                                <img src={flutterLogo} alt="phone" className={LeftInfoStyles.image}/>
                            </div>
                </LeftInfoSection>

            </Layout>
        </div>

    )
}

export default IndexPage
