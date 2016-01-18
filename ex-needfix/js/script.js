$(document).ready(function() {
  $("#browser").text(window.navigator.userAgent);
  $(window).on('load resize', function(event) {
    $("#width").text(window.innerWidth);
    $("#height").text(window.innerHeight);
  });
});
