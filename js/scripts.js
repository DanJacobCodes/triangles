$(document).ready(function() {
  $("#triangle").submit(function(event) {

    var side1Input = parseInt($("#side1").val());
    var side2Input = parseInt($("#side2").val());
    var side3Input = parseInt($("#side3").val());

    if((side1Input || side2Input) === side3Input){
      alert("This is an equilateral triangle");
    } else if (side1Input === side2Input != side3Input){
      alert("This is an isosceles");
    } else if (side1Input != side2Input != side3Input){
      alert("This is a scalene triangle");
    }

   event.preventDefault()
  });
});
