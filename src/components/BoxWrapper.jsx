import React, { useState } from 'react'
import Form from './Form'
import Box from './Box'

const BoxWrapper = props => {
    
    const [boxlist, setBoxlist] = useState([])

    return (
        <fieldset>
            <legend>BoxWrapper.js</legend>
            <Form setBoxlist={setBoxlist} boxlist={boxlist} />
            {
                boxlist.map((box, i) => {
                    return <Box key={i} box={box}/>
                })
            }
        </fieldset>
    )
}

export default BoxWrapper