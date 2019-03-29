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
    if (city === 1 && companysize === 1 && team === 1 && project === 1 && topreason === 1) {
      $("#result1").removeClass();
      $("#result2, #result3").addClass("hide");
      $("#result1").toggle();
    } else if (city === 2 && companysize === 2 && team === 2 && project === 2 && topreason === 2) {
        $("#titleoutput").text("Java");
        $("#bodyoutput").text("Java is also a favorite of enterprise companies, but its appeal is broader as well: it's one of the most popular of all programming languages, and it's used in everything from for high-performance processing to building Android user interfaces. Because Java has been very popular for a very long time and is used in so many applications, it is also a very high-demand language. If you're interested in working for an enterprise-level company, as an Android developer, or in high-performance applications, Java could be a good language to learn.");
      } else if (city === 3 && companysize === 3 && team === 3 && project === 3 && topreason === 3) {
        $("#titleoutput").text("PHP");
        $("#bodyoutput").text("PHP is by far the most popular backend language today, with 80 percent of websites utilizing it 'server-side'. It is perhaps best known for it's use in content management systems like Wordpress, Drupal, and Joomla. But the versatility of the language and the frameworks it powers make employment options numerous and diverse. If you're keen to work for a fast paced agency that builds websites for lots of clients, or maintain the security and stability of a huge complex of government websites, or if you like the idea of building out small sites for brands, businesses, and organizations - In any of these cases, PHP would be a great way to go.");
      };
    event.preventDefault();
    });
  });
