import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step9 = ({ setOpen, setStep, setMessage }) => {
  return (
    <>
      <h2>step 9:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          Once your have received your reimbursement, Amazon will not accept your return or exchange of the product. If the product has any problem, please contact your admin directly. 
        </div>
        <br />
        <Button
          onClick={() => {
            setStep("8");
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setStep("9");
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
          }}>
          I disagree
        </Button>
      </Form>
    </>
  );
};

export default Step9;
