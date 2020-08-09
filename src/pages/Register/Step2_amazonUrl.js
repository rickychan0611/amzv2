import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step2 = ({ state, setStep, handleChange }) => {
  const [disabled, setDisabled] = useState(true)
  useEffect(()=>{
    if (state.amzProfile){
    setDisabled(false)
  }
  else {
    setDisabled(true)
  }
  },[state.amzProfile])
  return (
    <>
      <h2>Step 2</h2>
      <Form>
        <div style={styles.content}>
          Please provide your Amazon's profile URL
          </div>
        <br />
        Click{" "}
        <a href="https://www.amazon.ca/profile" target="_blank">
          HERE{" "}
        </a>{" "}
        to go to your amazon profile, copy and paste your profile url address.
        <br />
        <br />
        <div>
          <Form.Input
            name="amzProfile"
            value={state.amzProfile}
            onChange={handleChange}
          />
          <a
            href="https://www.tauricase.com/pages/how-to-get-your-amazon-profile-link"
            target="_blank"
          >
            How to get my Amazon profile link?
          </a>
        </div>
       
        <br />
        <Button
          onClick={() => {
            setStep("1");
          }}
        >
          Back
        </Button>
        <Button
        disabled={disabled}
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
