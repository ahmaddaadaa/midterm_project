// Client facing scripts here
// const router  = express.Router();

$(document).ready(function() {
  //   $("#filter-container").submit(function(event) {
  //     console.log(event)
  //     event.preventDefault();
  //     //
  // //Get values from inputs
  // //loadPosts({product_name:"", max_price:"" ,min_price:"", product_catagory:""});
  //   });

  //?${constructUrl(filters)}
  loadProducts();
  //loadPosts({product_name:"", max_price:"" ,min_price:"", product_catagory:""});
  //loadPosts(table[0]);
  $("#filter-container").submit(function(event) {
    event.preventDefault();
    let product_name = $(this).find("#product_name").val();
    let max_price = $(this).find("#max_price").val();
    let min_price = $(this).find("#min_price").val();
    let product_catagory = $(this).find("#product_catagory").val();

    let filterParams = {
      product_name,
      max_price,
      min_price,
      product_catagory


    };

    console.log("filterParams", filterParams);
    loadProducts(filterParams);


  });



});




const date = "time ago";

const loadProducts = function(filterParams) {
  // console.log(`/api?${constructUrl(filters)}`);
  // console.log(encodeURI("product_name=${data}t&max_price=1200"))
  let url = `/api/products`;
  if (filterParams) {
    url += `?${constructUrl(filterParams)}`;
  }
  $.get(url).then((data) => {
    console.log("time ago long int: ", Date.now());
    renderProducts(data);
    console.log("my data", data);
  });

  // $.post("/api/products/filter").then((data) => {

  //   renderProducts(data);
  //   console.log("my data", data);
  // });
};



const createProductElement = function(product) {
    const date = "5 days ago";
    console.log("name:", product.name);
    console.log("price:", product.price);
    const checkproduct = function(_status){

      if (_status) {
        return "available";
      } else {
        return "<span style='color: red'>sold out</span>";
      }

    }

    const $listing_container = $(`

    <div class="listings" >
    <div class="firstline">
    <a class = "name"  href="mailto:${product.email}" target="_blank">${product.name}</a>
        <div class="date-posted">${timeago.format(
          product.date
        )}</div>
        </div>
        <div class=lower>
        <div>
        <p class="description">${product.description}</p>
        <div class="lastline">
        <span class="price">${product.price}</span>
        <a  href="/"><i class="fa-solid fa-heart fa-shake fa-lg" style="color: #b42222;"></i></a>
        <div class="status">${checkproduct(product.is_sold)}</div>
        </div>
        </div>
    </div>


  `);

    return $listing_container;
  };

const renderProducts = function(products) {
  console.log("data table!!!!!!!!!!!", products);
  const $container = $("#my-container");
  $container.empty();
  console.log("inside render products!!!");
  const $listingsContainer = $('<div id="listings" class="listings"></div>');
  for (const product of products) {
    const $newListing = createProductElement(product);
    $container.append($newListing);
    $newListing.css(
      "background-image",
      `url(${product.photo_url}`
    );
  }
};
const constructUrl = function(filters) {
  let queryString = `product_name=${filters.product_name}&max_price=${filters.max_price}&min_price=${filters.min_price}&product_catagory=${filters.product_catagory}`;

  return encodeURI(queryString);
};
