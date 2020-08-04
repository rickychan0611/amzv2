import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step7 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 7:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          For any reason that your review can not be published on Amazon's website, please contact admin immdiately and ask for further insturstions. We will work things out together. 
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

export default Step7;
