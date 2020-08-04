import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step5 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 5:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          We do not cover any shipping fee. Amazon offers free shipping when your order is more than $35. 
         </div>
        <br />
        <Button
          onClick={() => {
            setStep("4");
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setStep("6");
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

export default Step5;
