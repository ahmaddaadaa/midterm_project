let clicks = null;

$(document).ready(function () {
  // --- our code goes here ---
  $("#filter").hide();
  console.log("starting the file with clicks = ", clicks);
  toggleFilterBox();
  function toggleFilterBox() {
    console.log("toggleFilterbox function is caled");
    if(clicks === null) $("#filter").show();
    if (clicks % 2 === 0 ) {
      $("#filter").hide();
      
      console.log("even!!!");
    } else {
      $("#filter").show();
      console.log("odd!!!");
    }
    
  }

  $("#link2").click(function (event) {
    clicks++;
    event.preventDefault(); // Prevent default navigation behavior
    toggleFilterBox();
  });
});
