import React from 'react'

const Box = props => {

    const {box} = props

    const boxStyle = {
        backgroundColor: box.color,
        width: `${box.width}px`,
        height: `${box.height}px`,
        display: 'inline-block',
        margin: '10px'
    }


    return(
        <div style={boxStyle}></div>
    )
}

export default Box