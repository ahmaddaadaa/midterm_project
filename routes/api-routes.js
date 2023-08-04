const db = require('../db/connection');
const express = require('express');
const router = express.Router();
const { filterPriceAndSearch } = require("../db/queries/filterAndSearch")

const{ showProducts } = require("../db/queries/products")





// router.post("/products/filter", (req, res) => {
//   console.log("inside post reuest!!!!!!!");
//   console.log("req.body:",req.body);
//   filterPriceAndSearch(req.body)
//   .then((data) => {
//     return res.json(data);
    
//   })
  

// })



    // /api
router.get("/products", (req, res) => {
console.log("inside API route!!!",req.query)
showProducts(req.query)
  .then((data) => {
    return res.json(data);
    
  })

return;





filterPriceAndSearch(req.query).then((data)=>{
  console.log("-----------!!!!!!!!!!!!!--------------")
  res.json(data);
console.log(data)
});
  const values = showProducts()
  .then(data => {
    // console.log("values", values);

    console.log("products: "+ data.rows);
    return data.rows;
  })
  .catch(error =>{console.log(error)});

  return res
})

module.exports = router;
