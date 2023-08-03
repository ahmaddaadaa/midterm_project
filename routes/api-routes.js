const db = require('../db/connection');
const express = require('express');
const router = express.Router();
const { filterPriceAndSearch } = require("../db/queries/filterAndSearch")

const{ showProducts } = require("../db/queries/products")


//      /api
router.get("/", (req, res) => {
console.log(req.query)
filterPriceAndSearch(req.query).then((data)=>{
  console.log("-----------!!!!!!!!!!!!!--------------")
  res.json(data);
console.log(data)
});
//   const values = showProducts()
//   .then(data => {
//     // console.log("values", values);

//     console.log("products: "+ data.rows);
//     return data.rows;
//   })
//   .catch(error =>{console.log(error)});

//   return res
})

module.exports = router;
