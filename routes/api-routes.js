const db = require("../db/connection");
const express = require("express");
const router = express.Router();

const { showProducts } = require("../db/queries/products");
const { getProductId } = require("../db/queries/get_product_id");
const { addFavoriteItems, showFavoriteItems } = require("../db/queries/favorite_items");


// /api
router.get("/products", (req, res) => {
  console.log("inside API route!!!", req.query);
  showProducts(req.query).then((data) => {
    return res.json(data);
  });
});

router.post("/favorites", (req, res) => {
  const productName = req.body.productName;
  console.log("inside favorites!!!", productName);

  getProductId(productName)
    .then((data) => {
      return addFavoriteItems(1, data.id);
    })
    .then(() => {
      res.json({ message: "Item has been added" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// for user.id = 1
router.get("/favorites", (req, res) => {
  showFavoriteItems(1).then((data) => {
    return res.json(data);
  });
});





module.exports = router;
