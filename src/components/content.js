import React from 'react'

import contentStyles from '../components/content.module.scss'

const ContentSection = (props) => {
    return (
        <div className={contentStyles.container}>
            {props.children}
        </div>
    )
}

export default ContentSection