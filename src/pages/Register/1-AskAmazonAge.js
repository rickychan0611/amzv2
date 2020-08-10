import React, { useContext, useState } from "react";
import { Button, Form, Modal, Header, Image } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const AskAmazonAge = ({ step, setStep, setOpen, setMessage }) => {
  return (
    <>
      <div style={styles.content}>
        Please spend a few mintues and follow the steps to finish your registration. Make sure your information is valid. Any error may delay or terminate your reimbursements.
            </div>
      <br />
      <h2>Step 1 of 9:</h2>
      <Form>
        <div style={styles.content}>
          Is your Amazon account more than six months old? Have you spent
          over $50 on Amazon in the past 12 months?
        </div>
        <br />
        <br />
        <Button
          onClick={() => {
            setStep(step + 1);
          }}
        >
          YES
        </Button>

        <Button
          onClick={() => {
            setOpen(true)
            setMessage({
              header: "Registration Not Successful",
              content: "You account must be more than six months old in order to write reviews on Amazon and receive rebates. Please Come back later.",
            })
          }}
        >
          NO
        </Button>
      </Form>
    </>
  );
};

export default AskAmazonAge;
