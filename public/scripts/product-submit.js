const{ createProductRecord } = require("../db/queries/inputNewProduct")

$(document).ready(function() {

  $("form").submit(function(event) {
    const name = $("#nameInput").val().trim();
    const category_id = $("#typeInput").val().trim();
    const price = $("#priceInput").val().trim();
    const description = $("#descriptionInput").val().trim();
    const photo_url = $("#urlInput").val().trim();
    event.preventDefault();

    console.log(name, category_id, price, description, photo_url);

    createProductRecord(name, category_id, price, description, photo_url, is_sold);
  });

});
