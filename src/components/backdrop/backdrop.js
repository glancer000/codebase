import React from 'react'

import backdropStyles from './backdrop.module.scss'

const BackDrop = (props) => {
    return(<div className={backdropStyles.backdrop} onClick={props.click}>
    </div>

    )
}

export default BackDrop