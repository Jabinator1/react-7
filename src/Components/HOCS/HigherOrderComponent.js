import React from "react";

const HigherOrderComponent = (WrappedComponent) => {
  //# right here is where you do the things - add functionality or data to the component

  const location = {};
  const match = {};
  const history = {};

  return (props) => {
    return (
      <WrappedComponent
        {...props}
        location={location}
        match={match}
        history={history} /* Add additional props here*/
      />
    );
  };
};

export default HigherOrderComponent;
