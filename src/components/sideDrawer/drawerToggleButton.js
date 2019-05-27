import React from 'react'

import buttonStyles from '../sideDrawer/drawerToggleButton.module.scss'

const DrawerToggleButton = (props) => {
    return (
        <button className={buttonStyles.toggleButton} onClick={props.click}>
        <div className={buttonStyles.buttonLine}/> 
        <div className={buttonStyles.buttonLine}/> 
        <div className={buttonStyles.buttonLine}/> 
        </button>

    )
}

export default DrawerToggleButton