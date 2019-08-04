
$(document).ready(function(){

  $("form#height").submit(function(event){

    event.preventDefault();
    alert("form works");
    var inputHeight = parseInt($("input#heightInput").val());

    alert(inputHeight);

    if (inputHeight >= 48) {
      $("div#rideConditions1").show();
      $("div.ridesContainer").show();
      $("span.inch48").removeClass("inch48").addClass("inch48Blue");
      $("span.inch24").removeClass("inch24").addClass("inch24Green")
      $("span.inch12").removeClass("inch12").addClass("inch12Red");
    } else if (inputHeight >=12 && inputHeight <= 20) {
      $("div#rideConditions2").show();
      $("div.ridesContainer").show();
      $("span.inch48").removeClass("inch48").addClass("inch48Blue");
      $("span.inch24").removeClass("inch24").addClass("inch24Green")
      $("span.inch12").removeClass("inch12").addClass("inch12Red");
    } else {
      $("div#rideConditions3").show();
      $("div.ridesContainer").show();
      $("span.inch48").removeClass("inch48").addClass("inch48Red");
      $("span.inch24").removeClass("inch24").addClass("inch24Red")
      $("span.inch12").removeClass("inch12").addClass("inch12Green");
    }

    $("div#introImagery").hide();

  });


});


// below follows these instructions
// Create a website for an amusement park that prompts the user to enter their height.
// The page should then only displays information about rides the user is tall enough to safely ride.
//
//
// $("form#height").submit(function(event){
//
//   event.preventDefault();
//   alert("form works");
//   var inputHeight = parseInt($("input#heightInput").val());
//
//   alert(inputHeight);
//
//   if (inputHeight >= 48) {
//     $("div#adultRides").show();
//     $("div#kidsRides").show();
//   } else if (inputHeight <= 47) {
//     $("div#kidsRides").show();
//     $("div#toddlerRides").show();
//   } else {
//     $("div#toddlerRides").show()
//   }
//
//   $("div#introImagery").hide();
//
// });
