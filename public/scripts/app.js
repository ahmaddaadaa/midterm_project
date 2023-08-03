// Client facing scripts here
// const router  = express.Router();

$(document).ready(function () {

  const table = [];
  const date = "time ago";

  const generate_container = function (name, desc, price, status) {
    console.log("name:", name);
    console.log("price:", price);
    const $listing_container = $(`

      <div class="listings">
          <div class="firstline">
          <div class="name">${name}</div>
          <div class="date-posted">${date}</div>
          </div>
          <div class=lower>
          <div>
          <p class="description">${desc}</p>
          <div class="lastline">
          <span class="price">${price}</span>
          <div class="status">${status}</div>
          </div>
          </div>
      </div>


    `);

    return $listing_container;
  };

  const renderProducts = function (table) {
    console.log("data table!!!!!!!!!!!", table);
    const $container = $("#my-container");
    $container.empty();
    console.log("inside render products!!!");
    const $listingsContainer = $('<div id="listings" class="listings"></div>');
    for (const obj of table) {
      const $newListing = generate_container(
        obj.name,
        obj.description,
        obj.price,
        obj.status
      );
      $container.append($newListing);
      $newListing.css("background-image", `url(https://picsum.photos/id/237/200/300`);
    }
  };

  $("#filter-container").submit(function(event) {
    console.log(event)
    event.preventDefault();
    //
//Get values from inputs
//loadPosts({product_name:"", max_price:"" ,min_price:"", product_catagory:""});
  });

const constructUrl = function(filters){

let queryString=`product_name=${filters.product_name}&max_price=${filters.max_price}&min_price=${filters.min_price}&product_catagory=${filters.product_catagory}`

return encodeURI(queryString)
}

  const loadPosts = function (filters) {
    console.log(`/api?${constructUrl(filters)}`);
    // console.log(encodeURI("product_name=${data}t&max_price=1200"))
    $.ajax({
      url: `/api?${constructUrl(filters)}`,
      method: "GET",
      dataType: "json",
      success: function (data) {
        table.push(data);
        renderProducts(table[0]);
      },
      error: function (error) {
        console.error("Error occurred:", error);
      },
    });
  };

  loadPosts({product_name:"", max_price:"" ,min_price:"", product_catagory:""});


});


