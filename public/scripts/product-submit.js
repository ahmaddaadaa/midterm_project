

$(document).ready(function() {
  $("#create-item-form").submit(function(event) {
    event.preventDefault();
    alert("Hello")
    const name = $("#nameInput").val().trim();
    const type = $("#typeInput").val().trim();
    const price = $("#priceInput").val().trim();
    const description = $("#descriptionInput").val().trim();
    const photo_url = $("#urlInput").val().trim();
    const is_sold = false;

    console.log(name, type, price, description, photo_url);

  });
});
