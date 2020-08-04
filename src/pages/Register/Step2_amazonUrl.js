import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step2 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 2:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>Your Amazon's profile URL</div>
        <div>
          <a
            href="https://www.tauricase.com/pages/how-to-get-your-amazon-profile-link"
            target="_blank"
          >
            How to get your Amazon profile link?
          </a>
        </div>
        Please click{" "}
        <a href="https://www.amazon.ca/profile" target="_blank">
          HERE{" "}
        </a>{" "}
        to go to your amazon profile and copy the your profile link
        <Form.Input
          name="amzProfile"
          value={state.amzProfile}
          onChange={handleChange}
        />
        <div style={{ fontWeight: "bold" }}>Facebook Profile link</div>
        <Button
          onClick={() => {
            setStep("1");
          }}
        >
          Back
        </Button>
        <Button
          onClick={() => {
            setStep("3");
          }}
        >
          Next
        </Button>
      </Form>
    </>
  );
};

export default Step2;
