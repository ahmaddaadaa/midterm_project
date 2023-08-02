

$(document).ready(function() {

  $("form").submit(function(event) {
    const name = $("#nameInput").val().trim();
    const category_id = $("#typeInput").val().trim()
    const price = $("#priceInput").val().trim()
    const description = $("#descriptionInput").val().trim()
    const photo_url = $("#urlInput").val().trim()
    event.preventDefault();

    console.log(name, category_id, price, description, photo_url)

  const createProductRecord = function() {
    //Counter starts after last seeded user
    let user_id = 11;

    let is_sold = false;
    return db
      .query(
        `INSERT INTO products (user_id, name, price, category_id, description, photo_url, is_sold)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, [user_id, name, category_id, price, description, photo_url, is_sold])
    .then((result) => {
    id++;
    user_id++;
    })
    .catch((error)=> {
      console.log(error)
    });
  };

});
})
