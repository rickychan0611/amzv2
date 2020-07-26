import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase";
import db from "../firestore";
import { useHistory } from "react-router-dom";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let tempArr = [];
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          tempArr.push(doc.data());
        });
        //sort
        async function sortArr() {
          await tempArr.sort((current, prev) => {
            return new Date(prev.createAt) - new Date(current.createAt);
          });
          setProducts(tempArr);
          setLoading(false);
        }
        sortArr();
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
