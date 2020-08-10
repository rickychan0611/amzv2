import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const AskOneReviewOnly = ({ step, setOpen, setStep, setMessage }) => {
  return (
    <>
      <h2>Step 7:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          If you are getting multiple items, please don't review more than one
          item at the same time. You will need to wait for Amazon's approval for
          a review before submitting another review.
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

export default AskOneReviewOnly;
