var map = L.map('map').setView([43.2857883, 5.384771999999998], 6);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
 maxZoom: 50,
 id: 'your.mapbox.project.id',
 accessToken: 'your.mapbox.public.access.token'
}).addTo(map);


$(document).ready(function() {
  var tweet = $.getJSON("http://127.0.0.1:1337/", function(data) {
    $.each(data.statuses, function(index, point){
      L.marker(data.statuses[index].geo.coordinates).addTo(map)
      .bindPopup(data.statuses[index].text)
      .openPopup();
    });
  });
});
