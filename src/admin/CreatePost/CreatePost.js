import React, { useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import "./style.css";

import { Input, Grid, Button, Divider, Icon, Placeholder } from "semantic-ui-react";

const CreatePost = () => {
  const [productData, setProductData] = useState({
    asin: '',
    rebate: 0,
    keywords: '',
    totalQty: '',
    dailyQty: '',
    finalPrice: 0,
    seller: ''
  });
  const [asin, setAsin] = useState("B085LWMMS6");
  const [loading, setLoading] = useState(false);

  async function getProductData() {
    const productURL =
      `http://localhost:5001/amzr-b7fd2/us-central1/addProduct?asin=` + asin;
    const result = await axios.get(productURL, {}).catch(function (error) {
      console.log(error);
    });
    return result.data;
  }

  const searchAsin = async () => {
    setLoading(true);
    const data = await getProductData(asin);
    setProductData(prevState => {
      return {...prevState, ...data}
    });
    setProductData(prevState => {
      return {...prevState, finalPrice: data.price, asin}
    });    
    setLoading(false);
  };

  const ProductInfo = () => {
    return (
      <>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              {!productData.pic ? (
                <>
                  <div style={{backgroundColor:"#f7f7f7", width: "100%", height:'100%'}}>
                    
                  </div>
                </>
              ) : (
                <img src={productData.pic} width="250px" />
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
                finalPrice = Math.round(finalPrice*100)/100
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
                rebate = Math.round(rebate*100)/100
                setProductData({ ...productData, finalPrice: value, rebate });
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <br />
      <Button fluid>Submit</Button>
    </>
  );
};

export default CreatePost;
