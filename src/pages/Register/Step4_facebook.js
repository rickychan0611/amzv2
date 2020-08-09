import React, { useContext, useState } from "react";
import { Button, Form } from "semantic-ui-react";

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Step4 = ( {state, setStep, handleChange}) => {

   return (
    <>
    <h2>step 1:</h2>
      <Form>
        <div style={{ fontWeight: "bold" }}>Facebook Name</div>
        <Form.Input
          name="facebookName"
          value={state.facebookName}
          onChange={handleChange}
        />
        <div style={{ fontWeight: "bold" }}>Facebook Profile link</div>
        <div>
          <a
            href="https://help.varagesale.com/article/614-how-to-copy-your-facebook-profile-link"
            target="_blank"
          >
            How to copy your Facebook profile link ?
          </a>
          <br />
          <a
            href="https://facebook.com"
            target="_blank"
          >
            click here to facebook
          </a>

        </div>
        <Form.Input
          name="facebookId"
          value={state.facebookId}
          onChange={handleChange}
        />
        <Button onClick={()=>{
          setStep("2")
        }}>Next</Button>
      </Form>
    </>
  );
};

export default Step4;
