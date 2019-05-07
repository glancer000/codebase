import React from 'react'

import infoStyles from '../components/info.module.scss'

const InfoSection = (props) => {
    return (
        <div className={infoStyles.container}>
            {props.children}
        </div>
    )
}

export default InfoSection