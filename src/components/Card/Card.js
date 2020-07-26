import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";
import { Title_h1, Wrapper } from "./CardStyles.js";
import "./styles.css";

import { useHistory, Link } from "react-router-dom";

const Card = ({ item }) => {

  let deal = (item.price - item.rebate).toFixed(2);
  let discount = ((1 - deal / item.price) * 100).toFixed(0);
  if (deal == 0.0) {
    deal = "FREE";
  }

  return (
    <Link className="card-container" tag="div" to={`/item/${item.id}/${item.keywords}`}>
      <img src={item.pic} className="card-img" />
      <Title_h1>{item.title}</Title_h1>
      <div className="price">Ori. ${item.price}</div>
      <div className="price">
        Deal: ${deal} (-{discount}%)
      </div>
    </Link>
  );
};

export default Card;
