import React, { useContext } from "react";
import { Card, Loader } from "../../components";
import { CardsContainer, LoaderContainer } from "./HomeStyles.js";
import db from "../../firestore";
import { ProductsContext } from '../../context/ProductsContext'
import {
  Link, useParams, useHistory
} from "react-router-dom";

const AllProductsCards = () => {
  const {products, loading} = useContext(ProductsContext)
  return (
    <>
      {!loading ? (
        <CardsContainer>
          {products.map((item) => {
            return (
              <>
                <Card item={item} key={item.id} />
              </>
              );
          })}
        </CardsContainer>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default AllProductsCards;
