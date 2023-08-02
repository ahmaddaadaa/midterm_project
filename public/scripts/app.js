// Client facing scripts here
// const router  = express.Router();
$(document).ready(function () {
// const{ showProducts } = require("../../db/queries/products")

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

        // Assuming 'data' is an array of product objects, you can display them in the 'result' div
        // Modify this section based on your 'showProducts()' function's response format

      },
      error: function (error) {
        console.error("Error occurred:", error);
        $("#result").html("Error occurred while fetching products.");
      },
    });
  });


});

// https://api.jquery.com/jquery.ajax/
