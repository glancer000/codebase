import React from 'react'

import contentStyles from '../contentHeader/content.module.scss'

const ContentSection = (props) => {
    return (
        <div className={contentStyles.container}>
            {props.children}
        </div>
    )
}

export default ContentSection