import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step8 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 8:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          If you are getting multiple items, please don't review more than one
          item at the same time. You will need to wait for Amazon's approval for
          a review before submitting another review.
        </div>
        <br />
        <Button
          onClick={() => {
            setStep("6");
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setStep("8");
          }}
        >
          I agree
        </Button>

        <Button
          onClick={() => {
            setStep("1");
          }}
        >
          I disagree
        </Button>
      </Form>
    </>
  );
};

export default Step8;
