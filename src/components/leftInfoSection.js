import React from 'react'

import LeftInfoStyles from '../components/leftInfoSection.module.scss'

const LeftInfoSection = (props) => {
    return (
        <div className={LeftInfoStyles.container}>
            {props.children}
        </div>
    )
}

export default LeftInfoSection