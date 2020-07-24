import React, { useState } from "react";
import axios from "axios";
import db from "../../firestore";
import dayjs from "dayjs";
import ClipboardJS from "clipboard";

import "./style.css";

import {
  Input,
  Grid,
  Button,
  Divider,
  Icon,
  Placeholder,
} from "semantic-ui-react";

const CreatePost = () => {
  new ClipboardJS(".btn");

  const [productData, setProductData] = useState({
    asin: "",
    rebate: 0,
    keywords: "",
    totalQty: "",
    dailyQty: "",
    finalPrice: 0,
    seller: "",
  });
  const [asin, setAsin] = useState("");
  const [loading, setLoading] = useState(false);

  async function getProductData() {
    //cloud function address
    const productUrl =
      `http://localhost:5001/amzr-b7fd2/us-central1/addProduct?asin=` + asin;
    const result = await axios.get(productUrl, {}).catch(function (error) {
      console.log(error);
    });
    return result.data;
  }

  const searchAsin = async () => {
    setLoading(true);
    const data = await getProductData(asin);
    setProductData((prevState) => {
      return { ...prevState, ...data };
    });
    setProductData((prevState) => {
      return { ...prevState, finalPrice: data.price, asin };
    });
    setLoading(false);
  };

  const submitProduct = () => {
    const productUrl =
      `https://www.amazon.ca/dp/` +
      asin +
      `?th=1&psc=1&keywords=` +
      productData.keywords.replace(/ /g, "%20");

    const amzUrl = `https://www.amz-club.com/item/
    ${productData.keywords.replace(/ /g, "%20")}/{asin}`

    setLoading(true);
    const newProduct = db.collection("products").doc();
    newProduct
      .set({
        ...productData,
        id: newProduct.id,
        createAt: new Date(),
        productUrl, 
        amzUrl
      })
      .then((doc) => {
        setLoading(false);
        alert("product saved");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("err: product NOT saved");
      });
  };

  const ProductInfo = () => {
    return (
      <>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              {!productData.pic ? (
                <>
                  <div
                    style={{
                      backgroundColor: "#f7f7f7",
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                </>
              ) : (
                <>
                <img src={productData.pic} width="250px" />
              <div id="pic" style={{fontSize: "1px", margin:0, color: "white"}}>{productData.pic}</div>
              </>
              )}
            </Grid.Column>
            <Grid.Column width={10}>
              <h5 className="title">Title:</h5>
              <p>{productData.title}</p>
              <h5 className="title">Sold by: {productData.soldBy}</h5>
              {productData.coupon ? (
                <>
                  <h5 className="title">Coupon:</h5>
                  <p>{productData.coupon}</p>
                </>
              ) : null}
              <h5 className="title">Price: {productData.price}</h5>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  };

  return (
    <>
      <h2>产品登记</h2>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={11}>
            <Input
              label="asin"
              fluid
              onChange={(e, { value }) => {
                setAsin(value);
              }}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button onClick={searchAsin}>Search</Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              label="关键词"
              fluid
              onChange={(e, { value }) => {
                setProductData({ ...productData, keywords: value });
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              label="seller"
              fluid
              onChange={(e, { value }) => {
                setProductData({ ...productData, seller: value });
              }}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Input
              value={productData.totalQty}
              label="测评总数"
              fluid
              onChange={(e, { value }) => {
                setProductData({ ...productData, totalQty: value });
              }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              value={productData.dailyQty}
              label="每天数量"
              fluid
              onChange={(e, { value }) => {
                setProductData({ ...productData, dailyQty: value });
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      {loading ? (
        <h2>
          {" "}
          <Icon loading name="spinner" /> loading
        </h2>
      ) : null}
      {productData ? <ProductInfo /> : null}
      <Divider />
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Input
              value={productData.rebate}
              label="Rebate $"
              fluid
              onChange={(e, { value }) => {
                let finalPrice = productData.price - productData.coupon - value;
                finalPrice = Math.round(finalPrice * 100) / 100;
                setProductData({ ...productData, rebate: value, finalPrice });
              }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              value={productData.finalPrice}
              label="Final Price $"
              fluid
              onChange={(e, { value }) => {
                let rebate = productData.price - productData.coupon - value;
                rebate = Math.round(rebate * 100) / 100;
                setProductData({ ...productData, finalPrice: value, rebate });
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h3>
        facebook post{" "}
        <Button
          className="btn"
          data-clipboard-target="#post"
          size="mini"
        >
          Copy
        </Button>
        <Button
          className="btn"
          data-clipboard-target="#pic"
          size="mini"
        >
          Copy pic
        </Button>
      </h3>
      <Divider />
      <div id="post">
        <p>
          {productData.totalQty} quotas, {productData.dailyQty} per day. pls
          comment interested, then you can go ahead and get it thru amz-club.com
        </p>
        <h4>{productData.title}</h4>
        Soldy by: {productData.soldBy}
        <br />
        <br />
        List Price: {productData.price}
        <br />
        Rebate after review: ${productData.rebate}
        <br />
        Final Price: ${productData.finalPrice}
        <br />
        <br />
        https://www.amz-club.com/item/
        {productData.keywords.replace(/ /g, "%20")}/{asin}
      </div>
      <Divider />
      <Button fluid onClick={submitProduct}>
        Submit
      </Button>
    </>
  );
};

export default CreatePost;
