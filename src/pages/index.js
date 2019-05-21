import React from "react"

import Layout from '../components/layout'
import Hero from '../components/hero'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import InfoBoxLeft from "../components/infoBoxLeft";
import infoBoxLeftStyles from '../components/infoBoxLeft.module.scss'
import InfoBoxRight from "../components/infoBoxRight";
import infoBoxRightStyles from '../components/infoBoxRight.module.scss'

//images
import flutterLogo from '../images/flutter-logo.png';
import prototypeIcon from '../images/prototype_icon.png';
import buildIcon from '../images/build_icon.png';
import launchIcon from '../images/launch_icon.png';
import codebaseTeam from '../images/codebase_development_team.png'

import iosIcon from '../images/ios-icon.png'
import andriodIcon from '../images/andriod-icon.png'
import webIcon from '../images/web-icon.png'
import WindowsIcon from '../images/windows-icon.png'
import osxIcon from '../images/osx-icon.png'
import linuxIcon from '../images/linux-icon.png'
import embeddedIcon from '../images/embedded-icon.png'

import TopIconInfo from "../components/topIconInfo";
import topIconStyles from '../components/topIconInfo.module.scss'

import CallToAction from '../components/callToAction'


const IndexPage = () => {
    return(
        <div>
            <Hero/>
            <Layout>
            <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>Develop One Codebase That Will run Natively on on all Major Platforms</h1>
                    <p className={contentStyles.text}>We exclusively develop with Flutter, Google's cross-platform development solution, which means you only have to maintain one codebase at a fraction of the cost of traditional development studios.</p>
                </ContentSection>
                <div className={topIconStyles.wrapper}>
                    <TopIconInfo >
                        <img src={iosIcon} alt="Flutter IOS development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>IOS</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={andriodIcon} alt="Flutter Andriod development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Android</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={webIcon} alt="Flutter web development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Web</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={WindowsIcon} alt="Flutter Windows development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Windows</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={osxIcon} alt="Flutter Mac OSX development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Mac OS</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={linuxIcon} alt="Flutter Linux development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Linux</h5>
                    </TopIconInfo>
                    <TopIconInfo>
                        <img src={embeddedIcon} alt="Flutter Embedded development" className={topIconStyles.icon}/>
                        <h5 className={topIconStyles.header}>Embedded Devices</h5>
                    </TopIconInfo>
                </div>
                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>Why Choose Codebase to Develop Your Next Project?</h1>
                </ContentSection>
                <InfoBoxLeft className={infoBoxLeftStyles.container}>
                            <div className={infoBoxLeftStyles.content}>
                                <h1>You Gain a Complete Development Team</h1>
                                <p>Think of the peace of mind, knowing that you don't need to recruit and manage an development team, you already have an experienced team right at your fingertips. Codebase has a complete development team ready to tackle your project. Everything from UI, UX, Front-End & Back-End development, we can handle it. </p>
    
                            </div>
                            <div className={infoBoxLeftStyles.image}>
                                <img src={codebaseTeam} alt="phone"/>
                            </div>
                </InfoBoxLeft>
                <InfoBoxRight className={infoBoxRightStyles.container}>
                    <div className={infoBoxRightStyles.image}>
                        <img src={flutterLogo} alt="phone"/>
                    </div>
                    <div className={infoBoxRightStyles.content}>
                        <h1>We Can Develop Your Project in Record Time</h1>
                        <p>Developing in Flutter means wehas been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                    </div>

                </InfoBoxRight>
                <InfoBoxLeft className={infoBoxLeftStyles.container}>
                            <div className={infoBoxLeftStyles.content}>
                                <h1>Your Project works on all Major Platforms</h1>
                                <p>Developing in Flutter, Google's universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>

                            </div>
                            <div className={infoBoxLeftStyles.image}>
                                <img src={flutterLogo} alt="phone" className={infoBoxLeftStyles.image}/>
                            </div>
                </InfoBoxLeft>
                <InfoBoxRight className={infoBoxRightStyles.container}>
                    <div className={infoBoxRightStyles.image}>
                        <img src={flutterLogo} alt="phone" className={infoBoxRightStyles.image}/>
                    </div>
                    <div className={infoBoxRightStyles.content}>
                        <h1>We Take Care of Every Aspect of Your Project</h1>
                        <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>

                    </div>

                </InfoBoxRight>
                <InfoBoxLeft className={infoBoxLeftStyles.container}>
                            <div className={infoBoxLeftStyles.content}>
                                <h1>Why Use Flutter</h1>
                                <p>Flutter has been developed by Google as a universal UI kit for all your projects. Allowing you to build beautiful native apps for iOS, Android, desktop, the web and even bedded devices all from a single codebase. </p>
                                <button>Learn More</button>
                            </div>
                            <div className={infoBoxLeftStyles.image}>
                                <img src={flutterLogo} alt="phone" className={infoBoxLeftStyles.image}/>
                            </div>
                </InfoBoxLeft>
                <div>
                <CallToAction >
                
                </CallToAction>
                </div>

                
                
            </Layout>
        </div>

    )
}

export default IndexPage
