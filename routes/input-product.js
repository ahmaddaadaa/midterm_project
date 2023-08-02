const db = require('../db/connection');
const express = require('express');
const router = express.Router();


const{ createProductRecord } = require("../db/queries/inputNewProduct")
//      /api
router.get("/putItem", (req, res) => {

const values = createProductRecord()
  .then(data => {
    console.log("I am inside the returned promise")
    res.json(data.rows);
    console.log("new Record : "+ data.rows);
    return data.rows;
  })
  .catch(error =>{
    // console.log(error)
  });

  return res
})


module.exports = router;
