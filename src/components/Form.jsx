import React, {useState} from 'react'

const Form = props => {

    const [color, setColor] = useState('')
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

    const {boxlist, setBoxlist} = props

    const submitHandler = event => {
        event.preventDefault()
        setBoxlist([...boxlist, {
            color,
            height,
            width
        }])
        setColor('')
        setHeight(100)
        setWidth(100)
    }


    return (
        <fieldset>
            <legend>Form.js</legend>
            <form onSubmit={submitHandler} action="">
                <p>
                    Color:
                    <input type="text" name='color' value={color} onChange={ event => setColor(event.target.value)} />
                </p>
                <p>
                    Height:
                    <input type="number" name="height" value={height} onChange={event => setHeight(event.target.value)} />
                </p>
                <p>
                    Width:
                    <input type="number" name="height" value={width} onChange={event => setWidth(event.target.value)} />
                </p>
                <button type="submit">Create</button>
            </form>
        </fieldset>
    )
}

export default Form