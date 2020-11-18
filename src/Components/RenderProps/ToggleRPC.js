import { useState } from "react";
import styleHOC from "../HOCS/styleHOC";

const ToggleRPC = (props) => {
  const { style, children } = props;
  const [show, setShow] = useState(false);

  return children({ show, setShow, style });
};

export default styleHOC(ToggleRPC);
