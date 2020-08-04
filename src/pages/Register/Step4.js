import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step4 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 4:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          Is your Amazon account more than six months old and you have
          spent over $50 on Amazon in the past 12 months? </div>
        <br />
        <Button
          onClick={() => {
            setStep("3");
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setStep("5");
          }}
        >
          YES
        </Button>

        <Button
          onClick={() => {
            setStep("4");
          }}
        >
          NO
        </Button>
      </Form>
    </>
  );
};

export default Step4;
