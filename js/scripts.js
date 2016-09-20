$(document).ready(function(){

  $("#blanks form").submit(function(event) {
    var age = $("input#ageQ").val();
    var height = $("input#heightQ").val();

    if (age < 10 || height < 36) {
      $("#tooYoung").show();
      $("#rcoaster").hide();
      $("#dzone").hide();
      $("#corkscrew").hide();
    } else if (age >= 10 && age < 12 && height >= 36 && height <= 42) {
      $("#tooYoung").hide();
      $("#rcoaster").show();
      $("#dzone").hide();
      $("#corkscrew").hide();
    } else if (age >= 12 && age < 14 && height > 42 && height <= 48) {
      $("#tooYoung").hide();
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
