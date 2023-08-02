const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ createProductRecord } = require("../db/queries/inputNewProduct")
//      /api
// Route: /api/putItem (GET)
router.get("/putItem", (req, res) => {
  console.log(res);
  const name = "Product Name";
  const category_id = 1;
  const price = 100;
  const description = "Product Description";
  const photo_url = "http://example.com/image.jpg";
createProductRecord(name, category_id, price, description, photo_url)
  .then(data => {
    console.log("I am inside the returned promise")
    console.log("new Record : "+ data.rows);
    res.json(data.rows);
  })
  .catch(error =>{
    console.log(error)});
})


module.exports = router;
