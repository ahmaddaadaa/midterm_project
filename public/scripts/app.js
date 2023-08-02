// Client facing scripts here
// const router  = express.Router();

$(document).ready(function () {
// const{ showProducts } = require("../../db/queries/products")
const table = [];

  $("#link2").click(function (event) {
    console.log("Testing app.js")
    // Make a GET request to the API route
    $.ajax({
      url: "/api", // Replace this with the actual URL of your API route
      method: "GET",
      dataType: "json",
      success: function (data) {
        // 'data' contains the response from the API route (result of showProducts() function)
        console.log("Received data:", data);
        
        table.push(data[0])
        // Assuming 'data' is an array of product objects, you can display them in the 'result' div
        // Modify this section based on your 'showProducts()' function's response format

      },
      error: function (error) {
        console.error("Error occurred:", error);
        $("#result").html("Error occurred while fetching products.");
      },
    });
  


  ///// container Generator:
  const generate_container = function (name, price) {
    const $listing_container = $(`  <div class="listings">
    <div class="name"> ${name}</div>
    <span class="price">${price}</span>
    </div>
    `);
    console.log("generated Box: ",$listing_container);
    return $listing_container;
  };

  const renderProducts = function (table) {
    const $container = $("#my_container");
    $container.empty();
    console.log("inside render products!!!");
    for (const obj of table) {
      const $newListing = generate_container(obj.name, obj.price);
      $container.append($newListing);
    }
  };

  renderProducts(table);

});


});

// https://api.jquery.com/jquery.ajax/
