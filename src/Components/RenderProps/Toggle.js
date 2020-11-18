import { useState } from 'react'
import styleHOC from '../HOCS/styleHOC'

const Toggle = ({style, children}) => {
    const [show, setShow] = useState(false)

    return (
        <div style={style}>
            {show && children}
            <button onClick={() => setShow(!show)} style={style}>
                Show/Hide
            </button>
        </div>
    )
}

export default styleHOC(Toggle)

//# {show && children}
//# shorthand ternary that looks like this: {show && children ? children : null}
//# show is just a true or false value (state)
