$(document).ready(function() {
  $("#input").on("keypress", function(e) {
    var vale = $("#input").val();
    if (e.which == 13 && vale != "") {
      $(".container").append("<div class='item'><input class='toggle' name='toggle' type='checkbox'></input><div class='child'><input class='reponse' type='text' name='name' value=" + vale + " disabled></input><button name='destroy' class='destroy'></button></div></div>");
      $("#input").val("");
    }
  });
  $(".container").on("dblclick", ".child", function() {
    $(this).find(".reponse").attr("disabled", false);
    $(".reponse").on("keypress", function(e) {
      if (e.which === 13) {
        $(".reponse").attr('disabled', true);
      }
    });
    $(".child").on("dblclick", function() {
      $(".reponse").not(this).attr('disabled', true);
    });
  });
  $(".container").on("click",".item", function() {
    if( $('input[name=toggle]').is(':checked') ){
          $(this).find(".reponse").addClass("rayer");
        } else {
          $(this).find(".reponse").removeClass("rayer");
    }
  });
  $(".container").on("click",".item", function() {
    if( $('input[name=destroy]').data('clicked', true) ){
      console.log("lol");
          $(this).remove();
        }
  });
});
