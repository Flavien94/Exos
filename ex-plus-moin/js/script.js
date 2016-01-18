  var Game = function(max) {
    this.answer = Math.floor(Math.random() * max)
    this.test = function(guess) {
      if (guess > this.answer) {
        return "Moins"
      } else if (guess < this.answer) {
        return "Plus"
      } else {
        return '<p class="win">Tu as gagné!</p> <A href="javascript:window.location.reload()"><input class="reponse2" type="button" name="name" value="REPLAY"></A>'

      }
    }
    console.log(this.answer);
  }


  $(document).ready(function() {
    var g = new Game(1000)
    $("#guess").on("keypress", function(e) {
      if (e.which == 13) {
        var nb = $("#guess").val();
        $(".reponse").remove();
        $(".container").prepend("<div class='reponse'>" + g.test(nb) + "<div>");

      }
    })

  });
