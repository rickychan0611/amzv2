import React from "react";
import {
  Button,
} from "semantic-ui-react";

const Reg_NextButton = ( {children, disabled, props} ) => {
  return (
    <Button
      disabled={disabled}
      onClick={() => {
        props.setStep(props.step + 1);
      }}
    >
      {children}
    </Button>
  );
};

export default Reg_NextButton;
