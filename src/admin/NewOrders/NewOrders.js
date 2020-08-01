import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import ClipboardJS from "clipboard";
import save from "../exportUser";
import db from "../../firestore";

const NewOrders = () => {
  const [newOrderList, setnewOrderList] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");
  new ClipboardJS(".btn");
  let newOrderArr = [];
  let docID = [];

  const setToldSeller = () => {
    console.log(orderNumber);

    db.collection("orders")
      .where("orderNumber", "==", orderNumber)
      .get()
      .then((Snapshot) => {
        Snapshot.forEach((doc) => {
          console.log(doc.id);
          db.collection("orders")
            .doc(doc.id)
            .update({ toldSeller: false }) /////////////
            .then((doc) => {
              console.log("updated");
              getNewOrder();
            });
        });
      });
  };

  const setReviewToldSeller = () => {
    console.log(orderNumber);

    db.collection("orders")
      .where("orderNumber", "==", orderNumber)
      .get()
      .then((Snapshot) => {
        Snapshot.forEach((doc) => {
          console.log(doc.id);
          db.collection("orders")
            .doc(doc.id)
            .update({ reviewToldSeller: false }) /////////////
            .then((doc) => {
              console.log("updated");
              getNewOrder();
            });
        });
      });
  };

  const getNewOrder = async () => {
    let tempSellerArr = [];
    let tempProductArr = [];

    //get orders from database where toldSeller is false
    const orders = await db
      .collection("orders")
      .where("toldSeller", "==", false)
      // .where("reviewPlaced", "==", true)
      // .where("refunded", "==", false)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let newDoc = doc.data();
          newDoc.docId = doc.id;
          console.log(newDoc.docId);
          tempSellerArr.push(doc.data().sellerWechat);
          tempProductArr.push(newDoc);

          // batch update function
          // if (newDoc.reviewToldSeller == undefined) {
          //   db.collection("orders")
          //     .doc(newDoc.docId)
          //     .update({ reviewToldSeller: false })
          //     .then((doc) => {
          //       console.log("undefine updaated");
          //     });
          // }
          // if (newDoc.reviewPlaced == undefined) {
          //   db.collection("orders")
          //     .doc(newDoc.docId)
          //     .update({ reviewPlaced: false })
          //     .then((doc) => {
          //       console.log("undefine updaated");
          //     });
          // }
          // if (newDoc.refunded == undefined) {
          //   db.collection("orders")
          //     .doc(newDoc.docId)
          //     .update({ refunded: false })
          //     .then((doc) => {
          //       console.log("undefine updaated");
          //     });
          // }
          // end update
        });
        return;
      });

    //get new reviews
    const newReview = await db
      .collection("orders")
      .where("toldSeller", "==", true)
      .where("reviewPlaced", "==", true)
      .where("reviewToldSeller", "==", false)
      .where("refunded", "==", false)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let newDoc = doc.data();
          newDoc.docId = doc.id;
          console.log(newDoc.docId);
          tempSellerArr.push(doc.data().sellerWechat);
          tempProductArr.push(newDoc);
          //update reviewToSeller
          // db.collection("orders").doc(newDoc.docId).update({reviewToldSeller: true})
          // .then(doc => console.log("updated toldseller"))
        });
        return;
      });

    //get an array of seller's name
    const sellers = await [...new Set(tempSellerArr)];

    //Rearrage object structure:
    //filter product with seller's name
    //put items in an Array: [{name:"seller", items:[item]}]
    sellers.map((seller) => {
      let obj = {};
      obj.name = seller;
      const items = tempProductArr.filter((item) => {
        if (item.sellerWechat == seller) {
          return true;
        } else {
          return false;
        }
      });
      obj.items = items;
      newOrderArr.push(obj);
    });
    setnewOrderList(newOrderArr);
    console.log(newOrderArr);
  };

  useEffect(() => {
    getNewOrder();
  }, []);

  return (
    <>
      <input
        value={orderNumber}
        onChange={(e) => {
          setOrderNumber(e.target.value);
        }}
      />
      <button onClick={() => setToldSeller()}>order toldSeller = false</button>
      <br/>
      <br/>
      <input
        value={orderNumber}
        onChange={(e) => {
          setOrderNumber(e.target.value);
        }}
      />
      <button onClick={() => setReviewToldSeller()}>ReviewToldSeller = false</button>
      {/* <button onClick={() => save()}>XXX IMPORT ALL ORDERS</button> */}
      <div className="new-orders-container">
        <h2>New order report</h2>
        {newOrderList.length > 0 ? (
          newOrderList.map((item) => {
            return (
              <>
                <h4>{item.name}</h4>
                <div>
                  <br />
                  {item.items.map((order) => {
                    if (order.toldSeller == false) {
                      return (
                        <>
                          <div>
                            NEW ORDERS:{" "}
                            {order.keywords ? order.keywords : "HUH??"}
                            <br />
                            {order.orderNumber ? order.orderNumber : "HUH??"}
                            <br />
                          </div>
                          <br />
                        </>
                      );
                    }
                  })}
                  {item.items.map((order) => {
                    if (order.reviewPlaced == true) {
                      return (
                        <>
                          <div> {order.orderNumber} </div>
                          <div> review is live : {order.reviewUrl} </div>
                          <br />
                        </>
                      );
                    }
                  })}
                </div>
              </>
            );
          })
        ) : (
          <div>loading</div>
        )}
        <hr />
        <div id="index">
          <div>NEW ORDERS:</div>
          <br />
          <div>NEW REVIEW:</div>
        </div>
        <br />
        <button className="btn" data-clipboard-target="#index">
          Copy
        </button>{" "}
        &nbsp;&nbsp;
        <button>Done</button>
        <br />
        <hr />
      </div>
    </>
  );
};

export default NewOrders;
