import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { Reg_BackButton, Reg_NextButton } from "../../components";
import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const GetAmazonUrl = ({ state, step, setStep, handleChange }) => {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <h2>Step 2:</h2>
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
            HELP! How to get my Amazon profile link?
          </a>
        </div>
        <br />
        <Reg_BackButton props={{ step, setStep }} />
        <Reg_NextButton
          disabled={!state.amzProfile}
          props={{ state, step, setStep }}
        >
          Next
        </Reg_NextButton>

      </Form>
    </>
  );
};

export default GetAmazonUrl;
