

$(document).ready(function() {

  $(":button").click(function(){
    $.get("/putItem", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

  const createProductRecord = function() {
    //Counter starts after last seeded user
    let user_id = 11;
    const name = document.getElementById("nameInput").value;
    const category_id = document.getElementById("typeInput").value;
    const price = document.getElementById("priceInput").value;
    const description = document.getElementById("descriptionInput").value;
    const photo_url = document.getElementById("urlInput").value;
    let is_sold = false;
    return db
      .query(
        `INSERT INTO products (user_id, name, price, category_id, description, photo_url, is_sold)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, [id, user_id, name, category_id, price, description, photo_url, is_sold])
    .then((result) => {

    id++;
    user_id++;
    })
    .catch(error);
  };




});
module.exports ={
  createProductRecord
}
