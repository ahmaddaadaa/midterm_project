const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ filterPriceAndSearch } = require("../db/queries/filterAndSearch")

//      /api
// Route: /api/putItem (GET)
// router.post("/filterResults", (req, res) => {
//   console.log("req.body", req.body);
//   filterPriceAndSearch(req.body).then((data)=>{
//     res.redirect("/")
//   });

// });

console.log("inside / filter !!!!!!!!!!!!!");






router.get("/", (req, res) => {
console.log("req.query:", req.query);
  res.json({});
});

module.exports = router;
