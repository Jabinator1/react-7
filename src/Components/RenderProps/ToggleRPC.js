import { useState } from "react"
import styleHOC from '../HOCS/styleHOC'

const ToggleRPC = ({style, children}) => {
    const [show, setShow] = useState(false)

    return children({show, setShow, style})
}

export default styleHOC(ToggleRPC)
