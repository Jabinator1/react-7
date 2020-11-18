import { useState } from "react"
import styleHOC from "../HOCS/styleHOC"

const ToggleRenderProps = ({style, render}) => {
    const [show, setShow] = useState(false)

    return <div>{render({show, setShow, style})}</div>
}

export default styleHOC(ToggleRenderProps)