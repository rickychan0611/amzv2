import React, { useContext, useState } from "react";
import Step1 from "./Step1_facebook";
import Step2 from "./Step2_amazonUrl";
import Step3 from "./Step3_etransfer";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Warning from "./Warning";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
  Modal,
} from "semantic-ui-react";

import firebase from "firebase";
import db, { auth } from "../../firestore";

import { Container } from "semantic-ui-react";
import styles from "./styles";
import { UserContext } from "../../context/UserContext";

const Register = () => {
  const { user, loading } = useContext(UserContext);
  const [state, setState] = useState({});
  const [step, setStep] = useState("1");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({header:"", content: ""});

  const StepRouter =
    step == "1"
      ? Step4
      : step == "2"
      ? Step1
      : step == "3"
      ? Step2
      : step == "4"
      ? Step3
      : step == "5"
      ? Step5
      : step == "6"
      ? Step6
      : step == "7"
      ? Step7
      : step == "8"
      ? Step8
      : step == "9"
      ? Step9
      : null;

  const handleChange = (e) => {
    // console.log (e.target.value)
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Header as="h2" color="grey">
            Registration
          </Header>
          <h2>Welcome, {user.displayName}</h2>
          Please provide your real facebook information. This is important since
          we communicate via facebook.
          <br />
          <br />

          <StepRouter
            state={state}
            setStep={setStep}
            handleChange={handleChange}
            setOpen={setOpen}
            setMessage={setMessage}
          />
          <Warning setOpen={setOpen} open={open} message={message}/>
          
          <br />
          {JSON.stringify(state)}
        </div>
      )}
    </>
  );
};

export default Register;
