import React, { useContext, useState } from "react";
import { Button, Modal, Header } from "semantic-ui-react";

const Warning = ({ open, setOpen, message }) => {
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>{message.header}</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>{message.content}</Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="gery" onClick={() => setOpen(false)}>
            Back
          </Button>
          <Button
            color="orange"
            onClick={() => {
              setOpen(false)
              window.location = "https://www.google.com"
            }}
          >
           It's OK. Bye Bye.
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Warning;
