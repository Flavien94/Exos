function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunctionemp() {
  document.getElementById("myDropdown_emploi").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btn_emploi')) {

    var dropdowns = document.getElementsByClassName(".ct_emploi");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunctionstg() {
  document.getElementById("myDropdown_stage").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btn_stage')) {

    var dropdowns = document.getElementsByClassName(".ct_stage");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunctionctf() {
  document.getElementById("myDropdown_ctf").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btn_ctf')) {

    var dropdowns = document.getElementsByClassName(".ct_ctf");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
