import React, { useContext, useState } from "react";
import { Button, Form, Confirm } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const AskShipping = ({ step, setOpen, setStep, setMessage }) => {
  return (
    <>
      <h2>Step 5:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          We do not cover any shipping fee. Amazon offers free shipping when your order is more than $35. 
         </div>
        <br />
        <Reg_BackButton props={{step, setStep}}/>

        <Button
          onClick={() => {
            setStep(step + 1);
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

export default AskShipping;
