$(function() {
  $("#survey").submit(function(event){
		var city = parseInt($("input:radio[name=city]:checked").val());
    var companysize = parseInt($("input:radio[name=companysize]:checked").val());
		var team = parseInt($("input:radio[name=team]:checked").val());
    var project = parseInt($("input:radio[name=project]:checked").val());
    var topreason = parseInt($("input:radio[name=topreason]:checked").val());
    if (city === 1 && companysize === 1 && team === 1 && project === 1 && topreason === 1) {
      $("#result1").removeClass();
      $("#result2, #result3").addClass("hide");
      $("#result1").toggle();
    } else if (city === 2 && companysize === 2 && team === 2 && project === 2 && topreason === 2) {
        $("#result2").removeClass();
        $("#result1, #result3").addClass("hide");
        $("#result2").toggle();
          } else if (city === 3 && companysize === 3 && team === 3 && project === 3 && topreason === 3) {
            $("#result3").removeClass();
            $("#result1, #result3").addClass("hide");
            $("#result3").toggle();
      };
      event.preventDefault();
      var username= $("input#name").val();
      $(".username").text(username);
    });
});
