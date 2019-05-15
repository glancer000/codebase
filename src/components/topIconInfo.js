import React from 'react'

import TopIconStyles from './topIconInfo.module.scss'

const TopIconInfo = (props) => {
    return (
        <div className={TopIconStyles.container}>
            {props.children}
        </div>
    )
}

export default TopIconInfo