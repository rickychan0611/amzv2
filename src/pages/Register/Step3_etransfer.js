import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step3 = ({ state, setStep, handleChange }) => {
  return (
    <>
      <h2>step 3:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>Your e-transfer email</div>
       This is the email where you will get the rebate.
        <Form.Input
          name="amzProfile"
          value={state.amzProfile}
          onChange={handleChange}
        />
        <div style={{ fontWeight: "bold" }}>Facebook Profile link</div>
        
        <Button onClick={()=>{
          setStep("2")
        }}>Back</Button>      
        
        <Button onClick={()=>{
          setStep("4")
        }}>Next</Button>      
        
        
        </Form>
    </>
  );
};

export default Step3;
