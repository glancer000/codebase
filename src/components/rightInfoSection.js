import React from 'react'

import RightInfoStyles from '../components/rightInfoSection.module.scss'

const RightInfoSection = (props) => {
    return (
        <div className={RightInfoStyles.container}>
            {props.children}
        </div>
    )
}

export default RightInfoSection