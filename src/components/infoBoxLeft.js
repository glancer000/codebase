import React from 'react'

import LeftInfoStyles from '../components/infoBoxLeft.module.scss'

const InfoBoxLeft = (props) => {
    return (
        <div className={LeftInfoStyles.infoBox}>
            {props.children}
        </div>
    )
}

export default InfoBoxLeft