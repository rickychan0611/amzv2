import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const AskNoReview = ({ step, setOpen, setStep, setMessage }) => {
  return (
    <>
      <h2>Step 8:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          For any reason that your review can not be published on Amazon's website. You may have the option to accept 50% off discount by leaving a seller feedback instead or return the product to amazon to get your full refund. 
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
          }}>
          I disagree
        </Button>
      </Form>
    </>
  );
};

export default AskNoReview;
