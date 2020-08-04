import React, { useState, useContext, useEffect } from "react";
import { AllProductsCards } from "../../components";
import { UserContext } from "../../context/UserContext";
import { Link, useParams, useHistory } from "react-router-dom";
import db from "../../firestore";

const User = () => {
  const { allUsers, user, allUserQuery } = useContext(UserContext);
  let { state, id, facebookName } = useParams();
  const [thisUser, setThisUser] = useState({});
  const [thisOrders, setThisOrders] = useState([]);

  useEffect(() => {
    console.log("uyser", user)
    let tempArr = []
    if (id) {
      db.collection("users")
        .doc(id)
        .get()
        .then((doc) => {
          setThisUser(doc.data());
        });
      db.collection("orders")
        .where("buyerId", "==", id)
        .get()
        .then((snapShot) => {
          snapShot.forEach((doc) => {
            tempArr.push(doc.data())
          });
          setThisOrders(tempArr)
        });
    }
  }, []);

  return (
    <div >
      {thisUser ? (
        <>
          <div>name: {thisUser.facebookName}</div>
          <div>etransfer: {thisUser.etransfer}</div>
          <div>email: {thisUser.email}</div>
          <div>password: {thisUser.password}</div>
          <div>
            <a href={thisUser.facebookName}> amazon profile</a>
          </div>
          <div>locked seller: {thisUser.lockedSellers}</div>
          <hr/>
          <div>ordered Item:</div>
          {thisOrders
            ? thisOrders.map((item) => {
                return (
                  <>
                    <div>name: {item.keywords}</div>
                    <div>order#: {item.orderNumber}</div>
                    <div>seller: {item.sellerWechat}</div>
                    <br />
                  </>
                );
              })
            : null}
        </>
      ) : null}
    </div>
  );
};

export default User;
