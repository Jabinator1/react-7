import React, { useState } from "react";

import styleHOC from "../HOCS/styleHOC";

const Toggle = (props) => {
  const { style, children } = props;

  const [show, setShow] = useState(false);

  return (
    <div style={style}>
      {show && children ? children : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
        style={style}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default styleHOC(Toggle);
