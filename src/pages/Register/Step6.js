import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step6 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 6:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
        To be eligable to get the reimbursement after writing a product review, you MUST give FIVE STARS for your review. Simply write a few sentences and upload some pictures of the product.
          </div>
        <br />
        <Button
          onClick={() => {
            setStep("5");
          }}
        >
          Back
        </Button>

        <Button
          onClick={() => {
            setStep("7");
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

export default Step6;
