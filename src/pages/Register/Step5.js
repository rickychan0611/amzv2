import React, { useContext, useState } from "react";
import { Button, Form, Confirm } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step5 = ({ setOpen, setStep, setMessage }) => {
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
            setOpen(true)
            setMessage({
              header: "Registration Not Successful",
              content: "Sorry, you must agree to continue.",
            })
          }}
        >
          I disagree
        </Button>
      </Form>
    </>
  );
};

export default Step5;
