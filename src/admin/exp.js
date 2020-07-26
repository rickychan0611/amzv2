import data from "./amz";
import db from "../firestore";

async function save() {
  let objKey = [];
  let product = {};
  let counter = 0;
  objKey = await Object.keys(data.products);
  console.log("clicked");
  objKey.map((item, index) => {
    product = data.products[item];
    let newObj = {};
    newObj = {
      createAt: product.createDate,
      coupon: product.coupon,
      dailyQty: product.dailyQuota,
      dailyCounter: product.dailyQuotaCounter,
      finalPrice: product.listPrice,
      keywords: product.keywords,
      pic: product.img,
      rebate: product.rebate,
      seller: product.sellerWechat,
      soldBy: product.soldBy,
      title: product.name,
      totalQty: product.totalQty,
      totalCounter: product.totalCounter,
      active: product.activate,
      note: product.note,
      price: product.listPrice,
      productUrl: product.amzLink
    };
    if (!newObj.coupon) {
      newObj.coupon = 0;
    }
    if (!newObj.dailyQty) {
      newObj.dailyQty = 1;
    }

    if (newObj.active === true) {
      setTimeout(function () {
        counter++;
        console.log(counter);
        const newProduct = db.collection("products").doc();
        newProduct
          .set({ ...newObj, id: newProduct.id })
          .then((doc) => {
            console.log("product saved");
          })
          .catch((err) => {
            console.log("err: product NOT saved");
          });
      }, 1000);
    }
  });
}

export default save;
