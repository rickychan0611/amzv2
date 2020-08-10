import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import {Reg_BackButton} from "../../components"

import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const GetFacbookUrl = ( {step, state, setStep, handleChange}) => {
  const [disabled, setDisabled] = useState(true)

   return (
    <>
    <h2>Step 3:</h2>
    
    <Form>
        <div style={styles.content}>
          Please provide your Facebook profile URL. We will mainly communicate via Facebook. 
          </div>
        <br />
        Click{" "}
        <a href="https://www.facebook.com" target="_blank">
          HERE{" "}
        </a>{" "}
        to go to facebook, copy and paste your profile url address.
        <br />
        <br />
        <div>
        <Form.Input
          name="facebookId"
          value={state.facebookId}
          onChange={handleChange}
        />
          <a
            href="https://help.varagesale.com/article/614-how-to-copy-your-facebook-profile-link"
            target="_blank"
          >
            HELP! How to get my Facebook profile link?
          </a>
        </div>
       
        <br />
        <Reg_BackButton props={{step, setStep}}/>
        <Button
        disabled={!state.facebookId}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Next
        </Button>
      </Form>
    </>
  );
};

export default GetFacbookUrl;
