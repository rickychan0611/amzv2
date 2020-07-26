import React from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import ClipboardJS from "clipboard";

const NewOrders = () => {
  new ClipboardJS(".btn");

  return (
    <div className="new-orders-container">
      <h2>New order report</h2>
      <h3>seller name</h3>
      <div id="index">
        <div>NEW ORDERS:</div>
        <div>product name: 701-12345678-12345678</div>
        <div>product name: 701-12345678-12345678</div>
        <div>product name: 701-12345678-12345678</div>
        <br />
        <div>NEW REVIEW:</div>
        <div>product name : 701-12345678-12345678 : review url</div>
        <div>product name : 701-12345678-12345678 : review url</div>
        <div>product name : 701-12345678-12345678 : review url</div>
      </div>
      <br />
      <button className="btn" data-clipboard-target="#index">
        Copy
      </button> &nbsp;&nbsp;

      <button>Done</button>
      <br />
      <hr />
    </div>
  );
};

export default NewOrders;
