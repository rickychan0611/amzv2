import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Ask5Stars = ({ step, setOpen, setStep, setMessage }) => {
  return (
    <>
      <h2>Step 6:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
        To be eligable to get the reimbursement after writing a product review, you MUST give FIVE STARS for your reviews. Simply write a few sentences and upload some pictures of the product.
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

export default Ask5Stars;
