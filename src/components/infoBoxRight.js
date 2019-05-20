import React from 'react'

import LeftInfoStyles from '../components/infoBoxRight.module.scss'

const InfoBoxRight = (props) => {
    return (
        <div className={LeftInfoStyles.infoBox}>
            {props.children}
        </div>
    )
}

export default InfoBoxRight