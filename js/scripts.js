$(function() {
  $("#survey").submit(function(event){
		var city = parseInt($("input:radio[name=city]:checked").val());
    var companysize = parseInt($("input:radio[name=companysize]:checked").val());
		var team = parseInt($("input:radio[name=team]:checked").val());
    var project = parseInt($("input:radio[name=project]:checked").val());
    var topreason = parseInt($("input:radio[name=topreason]:checked").val());
    console.log(city);
    console.log(companysize);
    console.log(team);
    console.log(project);
    console.log(topreason);

    // if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1 && side1 !== 0 && side2 !== 0 && side3 !== 0) {
    //   if (side1 === side2 && side1 === side3 && side2 === side3) {
    //       $("#triangleoutput").text("This is an equilateral triangle.")
    //   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    //             $("#triangleoutput").text("This is an isosceles triangle.")
    //           } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    //                     $("#triangleoutput").text("This is a scalene triangle.")
    //                   };
    //         }else $("#triangleoutput").text("This is not a triangle.");
    event.preventDefault();
  });
});
