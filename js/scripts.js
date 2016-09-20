$(document).ready(function(){

  $("#blanks form").submit(function(event) {
    var age = $("input#ageQ").val();

    if (age < 10) {
      $("#tooYoung").show();
      $("#rcoaster").hide();
      $("#dzone").hide();
      $("#corkscrew").hide();
    } else if (age >= 10 && age < 12) {
      $("#rcoaster").show();
      $("#corkscrew").hide();
    } else if (age >= 12 && age < 14) {
      $("#rcoaster").show();
      $("#dzone").show();
      $("#corkscrew").hide();
    } else {
      $("#tooYoung").hide();
      $("#rcoaster").hide();
      $("#dzone").hide();
      $("#corkscrew").show();
    }


    event.preventDefault();
  });

});
