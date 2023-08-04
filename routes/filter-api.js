const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ filterPriceAndSearch } = require("../db/queries/filterAndSearch")


router.post("/filter", (req, res) => {
  console.log("inside post reuest!!!!!!!");
  console.log("req.body:",req.body);

  

})







// router.get("/", (req, res) => {
// console.log("req.query:", req.query);
//   res.json({});
// });

module.exports = router;
