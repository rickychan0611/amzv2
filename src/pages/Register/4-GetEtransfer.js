import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const GetEtransfer = ({ step, state, setStep, handleChange }) => {

  const validateEmail = (mail) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
    ) {
      setStep(step + 1);
    }
    else {
      alert("You have entered an invalid email address!");
    }
  };

  return (
    <>
      <h2>Step 4:</h2>
      <Form>
        <div style={styles.content}>Your e-transfer email</div>
        <br />
        This is the email which you will get your rebates. <br />
        Password will be "amazon" when receiving money if needed.
        <br />
        <br />
        <Form.Input
          name="etransfer"
          value={state.etransfer}
          onChange={handleChange}
        />
        <br />
        <Reg_BackButton props={{step, setStep}}/>
        <Button
          disabled={!state.etransfer}
          onClick={() => {
            validateEmail(state.etransfer);
          }}
        >
          Next
        </Button>
      </Form>
    </>
  );
};

export default GetEtransfer;
