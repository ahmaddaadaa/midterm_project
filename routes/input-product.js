const db = require('../db/connection');
const express = require('express');
const router = express.Router();

const{ createProductRecord } = require("../db/queries/inputNewProduct")
//      /api
router.get("/putItem", (req, res) => {

createProductRecord()
  .then(data => {
    console.log("I am inside the returned promise")
    console.log("new Record : "+ data.rows);
    res.json(data.rows);
  })
  .catch(error =>{
    console.log(error)});
})


module.exports = router;
