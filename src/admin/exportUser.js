import data from "./amz";
import db from "../firestore";

async function save() {
  let objKey = [];
  let product = {};
  let counter = 0;
  let all = [];
  let buyerID = await Object.keys(data.buyers);
  console.log("clicked");

  await buyerID.map(async (item, index) => {
    let placedOrdersKeys = {}
    if (data.buyers[item].placedOrders) {
      placedOrdersKeys = Object.keys(data.buyers[item].placedOrders);
    }

      placedOrdersKeys.map(async (placedOrdersKey, index) => {
        product = await data.buyers[item].placedOrders[placedOrdersKey];
        all.push(product);
      });
  });

  all.map((item) => {
    setTimeout(function () {
      counter++;
      console.log(counter);
      const newProduct = db.collection("orders").doc();
      newProduct
        .set(item)
        .then((doc) => {
          console.log("product saved");
        })
        .catch((err) => {
          console.log("err: product NOT saved");
        });
    }, 3000);
  });
}

export default save;
