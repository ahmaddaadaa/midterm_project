let clicks = null;

$(document).ready(function () {
  // --- our code goes here ---
  $("#filter").hide();
  toggleFilterBox();
  function toggleFilterBox() {
    if(clicks === null) $("#filter").show();
    if (clicks % 2 === 0 ) {
      $("#filter").hide();
      
      console.log("even!!!");
    } else {
      $("#filter").show();
    }
    
  }

  $("#link2").click(function (event) {
    clicks++;
    event.preventDefault(); // Prevent default navigation behavior
    toggleFilterBox();
  });
});
