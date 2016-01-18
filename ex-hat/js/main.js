  var Hat = function() {
    var students = ["Karine", "Jousna", "Jeanne d'arc", "Sarah", "Juliette", "Nadege", "Yannic", "Yannik", "Jerome", "Florent", "KevinL", "KevinC", "Ahmed", "Flavien", "Abdel-malik", "Ryadh", "Marc", "Anthony", "Bruno", "Simon", "Adel", "Mohamed"];
    var pool = students.slice(0, 22);

    this.teams = function(nb) {
      var allgang = [];
      for (var j = 0; j < pool.length; j++) {
        var gang = [];
        for (var i = 0; i < nb; i++) {
          var answer = Math.floor(Math.random() * pool.length);
          gang.push(pool[answer]);
          pool.splice(answer, 1);
        }
        allgang.push(gang);
        //Renvoie des équipes de 4 (si nb=4)
      }
      allgang.push(pool);
      return allgang;
    };

    this.chance = function(nb) {
      var two = []
      for (var i = 0; i < nb; i++) {
        var answer = Math.floor(Math.random() * pool.length);
        two.push(pool[answer]);
        pool.splice(answer, 1);
      }
      return two ;
    }
  };

  $(document).ready(function() {
    var h = new Hat()
    $("#chance").on("keypress", function(e) {
      if (e.which == 13) {
        var nb = $("#chance").val();
        $(".chance").remove();
        $(".container").prepend("<p class='chance'>" + h.chance(nb) + "<p>");

      }
    })
    $("#teams").on("keypress", function(e) {
      if (e.which == 13) {
        var nb = $("#teams").val();
        $(".teams").remove();
        $(".container").prepend("<p class='teams'>" + h.teams(nb).join(" / ") + "<p>");

      }
    })
  });
