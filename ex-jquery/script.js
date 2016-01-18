$(document).ready(function() {
  $(document).on("click",".block", function() {
    $(".block").not(this).removeClass("yellow");
    $(this).toggleClass("yellow");
  });
  });
  $("#deux").removeClass("two");
  $(this).toggleClass("left");
