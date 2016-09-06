$(document).ready( function() {
  $('#searchTerm').on('keyup', function(e) {
    if (e.keyCode === 13) {
      var html = "";
      
      var searchURL = "https://en.wikipedia.org/w/api.php?";
      searchURL += "action=opensearch&search="+$('#searchTerm').val();
      searchURL += "&limit=10&namespace=0&format=json&callback=?";
      
      $.getJSON(searchURL, function(json) {
        html += "<div class='linkDiv'>"
        
        for (var i = 0; i < json[1].length-1; i++) {
          html += "<div class='linkBlock'>"
          html += "<a href='" + json[3][i] + "' target=_blank><b>" + json[1][i] + "</b></a><br />"
          html += json[2][i] + "<br />";
          html += "</div>"
          html += "<br />"
        }

        html += "<div class='linkBlock'>"
        html += "<a href='" + json[3][i] + "' target=_blank><b>" + json[1][i] + "</b></a><br />"
        html += json[2][i] + "<br />";
        html += "</div>"

        html += "</div>"
        
        $("#searchResults").html(html);
      });
    };
  });
});