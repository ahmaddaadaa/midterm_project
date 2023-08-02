const db = require('../db/connection');
const express = require('express');
const router = express.Router();

// const{ showProducts } = require("../db/queries/products")


//      /api
router.get("/putItem", (req, res) => {

return db
  .then(data => {

    res.json(data.rows);
    console.log("products: "+ data.rows);
    return data.rows;
  })
  .catch(error =>{console.log(error)});

  return res
})






module.exports = router;
