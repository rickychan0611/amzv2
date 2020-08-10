import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Reg_BackButton } from "../../components";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Confirmation = ({ state, step, setOpen, setStep, setMessage }) => {

  const confirm = () => {

  }

  return (
    <>
      <h2>Confirmation</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>
          Please make sure all of the information and links are correct.
        </div>
        <br />
        E-transfer: <br />
        {state.etransfer}
        <br />
        <br />
        Amazon Profile: <br />
        <a href={state.amzProfile} target="_blank">
          {state.amzProfile}{" "}
        </a>
        <br />
        <br />
        Facebook Profile: <br />
        <a href={state.facebookId} target="_blank">
          {state.facebookId}{" "}
        </a>
        
        <br />
        <br />
        <Reg_BackButton props={{ step, setStep }} />
        <Button
          onClick={() => {
            confirm();
          }}
        >
          Confirm
        </Button>
       
      </Form>
    </>
  );
};

export default Confirmation;
