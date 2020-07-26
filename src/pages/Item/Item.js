import React, { useEffect, useState, useContext } from "react";
import { Loader, AllProductsCards } from "../../components";
import { Container, Title, Image, Price } from "./ItemStyles.js";
import { useParams, useHistory } from "react-router-dom";
import { Button, Icon, Divider } from "semantic-ui-react";
import { ProductsContext } from "../../context/ProductsContext";
import db from "../../firestore";

const Item = () => {
  let { id } = useParams();
  const { products, loading } = useContext(ProductsContext);
  const [item, setItem] = useState(null);
  let deal = 0;
  let discount = 0;
  
  const loadItem = () => {
    setItem(
      products.find(item => item.id == id)
      )
  }

  useEffect(() => {
    loadItem()
  },[id, loading])

  return (
    <>
      {!item ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Title>{item.title}</Title>
            <a href={item.productUrl} target="_blank">
              <Button color="orange" basic>
                <Icon name="amazon" size="large" /> View Product on Amazon
              </Button>
            </a>
            <Image src={item.pic} />
            <Price style={{ color: "#858585" }}>
              List Price: ${item.price}
            </Price>
            <Price>Rebate after review: ${item.rebate}</Price>
            <Price>
              Deal Price: $ {deal} (save: {discount}%)
            </Price>
            <p>Sold by: {item.soldBy}</p>
            <br />
            <Button fluid color="green">
              <Icon name="check circle outline" />
              Avaiable. Get it now
            </Button>

            <Button fluid color="blue">
              <Icon name="calendar alternate" />
              Today's Quota is Full. Reserve Yours Now
            </Button>
            <Title>The item will be available on:</Title>


          </Container>
          <br />
          <br />
          <Divider horizontal>Or</Divider>
          <br />

          <Title>Other Products</Title>
          <AllProductsCards/>
        </>
      )}
    </>
  );
};

export default Item;
