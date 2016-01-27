$(document).ready(function() {
  $("#input").on("keypress", function(e) {
    var vale = $("#input").val();
    if (e.which == 13 && vale != "") {
      $(".container").append("<div class='item'><input class='toggle' name='toggle' type='checkbox'></input><button name='destroy' class='destroy'></button><div class='child'><input class='reponse' type='text' name='name' value=" + vale + " disabled></input></div></div>");
      $("#input").val("");
    }
  });
  $(".container").on("dblclick", ".child", function() {
    var val2 = $(this).find(".reponse").val();
    $(this).find(".reponse").attr("disabled", false);
    $(".reponse").on("keypress", function(e) {
      if (e.which === 13) {
        $(".reponse").attr('disabled', true);
        if ($(this).val() === "") {
          $(this).parents('.item').remove();
        }
      }
    });
    $(".child").on("dblclick", function() {
      $(".reponse").not(this).attr('disabled', true);
    });
  });
  $(".container").on("click", ".item", function() {
    if ($('input[name=toggle]').is(':checked')) {
      $(this).find(".reponse").addClass("rayer");
    } else {
      $(this).find(".reponse").removeClass("rayer");
    }
  });
  // $("body").on("click", ".tog", function test() {
  //   if ($('input[name=tog]').is(':checked')) {
  //     $('input[name=toggle]').prop('checked', true);
  //     $(".reponse").addClass("rayer");
  //     $(".container").append('<div class="supr">SUPRIMER</div>');
  //     $(".supr").on("click", function() {
  //       $(".item").remove();
  //       $(".supr").remove();
  //     });
  //   } else {
  //     $('input[name=toggle]').prop('checked', false);
  //     $(".reponse").removeClass("rayer");
  //     $(".supr").remove();
  //
  //   }
  // });

  $('.container').on("click", '.destroy', function() {
    $(this).parent().remove();
  });
});
