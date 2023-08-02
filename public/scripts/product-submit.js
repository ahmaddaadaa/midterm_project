const{ createProductRecord } = require("../db/queries/inputNewProduct")

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    const name = $("#nameInput").val().trim();
    const category_id = $("#typeInput").val().trim();
    const price = $("#priceInput").val().trim();
    const description = $("#descriptionInput").val().trim();
    const photo_url = $("#urlInput").val().trim();
    const is_sold = false;

    console.log(name, category_id, price, description, photo_url);

    createProductRecord(name, category_id, price, description, photo_url, is_sold)
      .then(() => {
        console.log("Product record added");

      })
      .catch(error => {
        console.error("Error :", error);
      });
  });
});
