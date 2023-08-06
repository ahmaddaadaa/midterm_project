const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ createProductRecord } = require("../db/queries/inputNewProduct")
//      /api
// Route: /api/putItem (GET)
router.post("/create", (req, res) => {
  console.log("req.body", req.body);
  const name = req.body.nameInput;
  const type = req.body.typeInput;
  const price = req.body.priceInput;
  const description = req.body.descriptionInput;
  const photo_url = req.body.urlInput;
  const date = Date.now();
createProductRecord(name, type, price, description, photo_url, date)
  .then(data => {
    console.log("I am inside the returned promise")
    console.log("new Record : "+ data);
    // res.json(data.rows);
    res.redirect("/")
  })
  .catch(error =>{
    console.log(error)});
})





router.get("/", (req, res) => {
  res.render("products");
});

module.exports = router;
