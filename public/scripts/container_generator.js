$(document).ready(function () {
  const generate_container = function (name, price) {
    const $listing_container = $(`  <div class="listings">
    <div class="name"> ${name}</div>
    <span class="price">${price}</span>
    </div>
    `);

    return $listing_container;
  };

  const renderProducts = function () {
    const $container = $("#my_container");
    $container.empty();

    for (const obj of table) {
      const $newListing = generate_container(obj.name, obj.price);
      $container.append($newListing);
    }
  };

  renderProducts();
});
