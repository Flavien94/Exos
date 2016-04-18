$(document).ready(function() {
  $(".container").on("click", ".item", function() {
    $(this).find('.slider').animate({width:"+85%"}, 5000, function() {
      $('.container').append('<div class="item"><div class="slider"></div></div>');
      });
    });

  });
