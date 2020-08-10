import React, { useContext, useState } from "react";
import AskAmazonAge from "./1-AskAmazonAge";
import GetAmazonUrl from "./2-GetAmazonUrl";
import GetFacbookUrl from "./3-GetFacbookUrl";
import GetEtransfer from "./4-GetEtransfer";
import AskShipping from "./5-AskShipping";
import Ask5Stars from "./6-Ask5Stars";
import AskOneReviewOnly from "./7-AskOneReviewOnly";
import AskNoReview from "./8-AskNoReview";
import AskNoReturn from "./9-AskNoReturn";
import Confirmation from "./10-Confirmation";
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
  const [step, setStep] = useState(10);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ header: "", content: "" });

  const StepRouter =
    step === 1
      ? AskAmazonAge
      : step === 2
      ? GetAmazonUrl
      : step === 3
      ? GetFacbookUrl
      : step === 4
      ? GetEtransfer
      : step === 5
      ? AskShipping
      : step === 6
      ? Ask5Stars
      : step === 7
      ? AskOneReviewOnly
      : step === 8
      ? AskNoReview
      : step === 9
      ? AskNoReturn
      : step === 10
      ? Confirmation
      : step === 1;

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
          <div style={styles.header}>Registration</div>
          <h2>Welcome, {user.displayName}</h2>
          <StepRouter
            state={state}
            step={step}
            setStep={setStep}
            handleChange={handleChange}
            setOpen={setOpen}
            setMessage={setMessage}
          />
          <Warning setOpen={setOpen} open={open} message={message} />

          <br />
          {JSON.stringify(state)}
        </div>
      )}
    </>
  );
};

export default Register;
