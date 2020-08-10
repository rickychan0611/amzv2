import React from "react";
import {
  Button,
} from "semantic-ui-react";

const Reg_BackButton = ( {props}) => {
  return (
    <Button
      onClick={() => {
        props.setStep(props.step - 1);
      }}
    >
      Back
    </Button>
  );
};

export default Reg_BackButton;
