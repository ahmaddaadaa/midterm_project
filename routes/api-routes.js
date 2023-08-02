const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ showProducts } = require("../db/queries/products")


//      /api
router.get("/", (req, res) => {

  const values = showProducts()
  .then(data => {
    // console.log("values", values);
    res.json(data.rows);
    console.log("products: "+ data.rows);
    return data.rows;
  })
  .catch(error =>{console.log(error)});

  return res
})

module.exports = router;
