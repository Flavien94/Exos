<?php include 'css/style.php'; ?>
  <header>
    <div class="header">
      <h1 class="no_margin">Medinjob</h1>
      <h3>Jobs,Stage,Formation</h3>
      <div class="login">
        <div class="btn signin">
          <a href="/signin">Connexion</a>
        </div>
        <div class="btn signup">
          <a onclick="myFunction()" class="dropbtn">Inscription</a>
          <div id="myDropdown" class="dropdown-content">
            <a href="/signup_entreprise">Entreprise</a>
            <a href="/signup_ctf">Centre de Formation</a>
            <a href="/signup_candidat">Candidats</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="menu">
        <div class="boutons">
          <div class="col-md-2">
          <input class="input" type="text" name="name" value="Rechercher">
          </div>
          <div class="col-md-2">
          <div class="btn btn_menu">
            <a onclick="myFunctionemp()" class="dropbtn btn_emploi">Emplois</a>
            <div id="myDropdown_emploi" class="dropdown-content ct_emploi">
              <a href="/emplois">Offres</a>
              <a href="/signup_entreprise">Calendrier</a>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="btn btn_menu">
            <a onclick="myFunctionstg()" class="dropbtn btn_stage">Stages</a>
            <div id="myDropdown_stage" class="dropdown-content ct_stage">
              <a href="/signup_entreprise">Calendrier</a>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="btn btn_menu">
            <a onclick="myFunctionctf()" class="dropbtn btn_ctf">Centre de formations</a>
            <div id="myDropdown_ctf" class="dropdown-content ct_ctf">
              <a href="/signup_entreprise">Calendrier</a>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="btn btn_menu candidat">
            <a href="#">Candidats</a>
          </div>
        </div>
        <div class="col-md-2">
          <div class="btn btn_menu entreprise">
            <a href="#">Entreprises</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
