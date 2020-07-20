// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors")({ origin: true });

exports.addProduct = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    const asin = req.query.asin;
    const productURL = `https://www.amazon.ca/dp/` + asin  + `?th=1&psc=1`;

    async function getHTML(productURL) {
      const data = await axios
        .get(productURL, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36",
          },
        })
        .catch(function (error) {
          console.log(error);
        });
      return data;
    }

    async function getAmazonPrice(html) {
      const $ = await cheerio.load(html);

      let title = $("#productTitle").text().replace(/^\s*[\r\n]/gm, '')

      let coupon = $('#unclippedCoupon').text().replace(/^\s*[\r\n]/gm, '')
      coupon = coupon.replace('Apply CDN$', '')
      coupon = coupon.replace('coupon', '')
      coupon = coupon.replace('Details', '')
      coupon = coupon.replace(/\s/, '')

      let price = $("#price_inside_buybox").text().replace(/^\s*[\r\n]/gm, '')
      price = price.replace('CDN$', '')
      price = price.replace(/\s/, '')

      console.log(price) 
      return {
        title,
        price,
        pic: $('#landingImage').attr('data-old-hires'),
        soldBy: $('#sellerProfileTriggerId').text().replace(/^\s*[\r\n]/gm, ''),
        coupon,
      };
    }

    const { data: html } = await getHTML(productURL);
    const result = await getAmazonPrice(html);
    res.json(result);
  });
});

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text;
//   // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//   const writeResult = await admin
//     .firestore()
//     .collection("messages")
//     .add({ original: original });
//   // Send back a message that we've succesfully written the message
//   res.json({ result: `Message with ID: ${writeResult.id} added.` });
// });

// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// exports.makeUppercase = functions.firestore
//   .document("/messages/{documentId}")
//   .onCreate((snap, context) => {
//     // Grab the current value of what was written to Cloud Firestore.
//     const original = snap.data().original;

//     // Access the parameter `{documentId}` with `context.params`
//     functions.logger.log("Uppercasing", context.params.documentId, original);

//     const uppercase = original.toUpperCase();

//     // You must return a Promise when performing asynchronous tasks inside a Functions such as
//     // writing to Cloud Firestore.
//     // Setting an 'uppercase' field in Cloud Firestore document returns a Promise.
//     return snap.ref.set({ uppercase }, { merge: true });
//   });
