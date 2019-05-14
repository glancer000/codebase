import React from "react"

import Layout from '../components/layout'
import HeroProject from '../components/heroProject'
import '../styles/index.scss'

import ContentSection from '../components/content'
import contentStyles from '../components/content.module.scss'
import LeftInfoSection from "../components/leftInfoSection";
import LeftInfoStyles from '../components/leftInfoSection.module.scss'
import iphone from '../images/iphone.png';


const ProjectPage = () => {
    return(
        <div>
            <HeroProject/>
            <Layout>

                <ContentSection className={contentStyles.container}>
                    <h1 className={contentStyles.title}>Let's chat!</h1>
                    <p className={contentStyles.text}>Our 3 Step Process will ensure that every detail of your project is meticulously thought out and designed</p>
                </ContentSection>

                <form>
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </Layout>
        </div>

    )
}

export default ProjectPage
