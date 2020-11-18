import styleHOC from "./styleHOC"

const GoodButton = props => (
    <button {...props} style={props.style}>{props.text ? props.text : "Good Button"}</button>
)

export default styleHOC(GoodButton)