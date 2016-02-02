$(document).ready(function() {
  var n;
  //fonction qui recupere la valeur tapée dans l'input principal et la renvoie dans un input
  //crée suivi de sa checkbox et sa croix en la supprimant du principal
  $("#input").on("keypress", function(e) {

    var vale = $("#input").val();
    if (e.which == 13 && vale != "") {
      $(".container").append("<div class='item'><input class='toggle check' name='toggle' type='checkbox'></input><button name='destroy' class='destroy'></button><div class='child'><input class='reponse' type='text' name='name' value='" + vale + "' disabled></input></div></div>");
      $("#input").val("");
      $(".n").removeClass("hidden");
      console.log(n);
    }
    n = $(".item").length;
    if (e.which == 13 && n != 1) {
      $(".n").html(+n + " items left");
    } else if (e.which == 13 && n === 1) {
      $(".n").html(+n + " item left");
    }


  });

  //fonction qui desactive et active mon input et le suprime quand il contient aucune valeur
  $(".container").on("dblclick", ".child", function() {
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

  //fonction qui coche et decoche ma checkbox, raye et deraye son input et crée
  // un message de supression qui se suprome si aucune est coché
  $(".container").on("click", ".item", function() {
    if ($(this).find(".toggle").is(':checked')) {
      $(this).find(".reponse").addClass("rayer");
      $(".container").append("<div class='supr'>Clear completed</div>");
    } else if ($("input[name='toggle']:checked").length === 0) {
      $(".supr").remove()
    } else {
      $(this).find(".reponse").removeClass("rayer");
      $('input[name=tog]').prop('checked', false);
    }
  });

  //fonction qui suprime les input coché
  $(document).on('click', '.supr', function() {
  $(".reponse.rayer").parent().remove();
    $(".reponse.rayer").remove();
    $(".supr").remove();
    $(".tog").prop('checked', false);
  });

  //fonction qui coche ou decoche la premier checkbox si les checkbox sont toute coché ou decoché
  $(".container").change(".item", function() {
    if ($("input[name='toggle']:checked").length === $("input[name='toggle']").length) {
      $(".tog").prop('checked', true);
    } else {
      $(".tog").prop('checked', false);
    }
  });
  //fonction qui coche/decoche toutes les checkbox si la premiere est coché/decoche
  //et crée le msg de supression
  $("body").on("click", ".tog", function test() {
    if ($('input[name=tog]').is(':checked')) {
      $('input[name=toggle]').prop('checked', true);
      $(this).find(".reponse").addClass("rayer");
      $(".container").append("<div class='supr'>Clear completed</div>");
    } else {
      $('input[name=toggle]').prop('checked', false);
      $(this).find(".reponse").removeClass("rayer");
      $(".supr").remove();
    }
  });
  //fonction qui suprime l'item en cliquant sur la croix
  $('.container').on("click", '.destroy', function() {
    $(this).parent().remove();
  });
});
