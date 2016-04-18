<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Headers: *");
  header("Access-Control-Allow-Credentials: true");
  include 'connect.php'; //j'include le ficher de connection a la base de donnée
  if (isset($_POST['bouton'])) { // si je clique sur mon input de nom bouton
    // Je reprend les valeurs de mon formulaires en suprimant tous les caracteres html
    $login = htmlspecialchars($_POST['login']);
    $email = htmlspecialchars($_POST['email']);
    $mdp = htmlspecialchars($_POST['mdp']);
    $mdplength = strlen($mdp); // Je prend la longeur du mot de passe

    if (!empty($_POST['login']) AND !empty($_POST['email']) AND !empty($_POST['mdp'])){// Si les inputs login,email et mdp ne sont pas vide
      if (filter_var($email, FILTER_VALIDATE_EMAIL)) {// Si l'email est une email
        $reqlogin = $bdd->prepare("SELECT * FROM user WHERE login = ?");// Je prend les login de la table user
        $reqlogin->execute(array($login));//qui = au login de l'input
        $loginexist = $reqlogin->rowCount();//et compte le nombre de rangée
        if ($loginexist == 0) {//si le nombre de colonne = à 0
          if ($mdplength >= 6) {//si la longeur du mot de passe est >ou= à 6
            $mdpcrypt = sha1($mdp);//je crypte le mot de passe avec la méthode sha1
            $type = 'Entreprise';
            $insertuser = $bdd->prepare("INSERT INTO user(login,password,email,type) VALUES(?,?,?,?)");
            $insertuser->execute(array($login,$mdpcrypt,$email,$type));
            $erreur = "Votre compte a bien été crée";
            //J'insert les valeurs dans ma base de donnée et affiche un message de confirmation.
            http_response_code(200);
            //Je renvois vers un code http 200
          }
          else {//sinon je renvois vers un code http 401 suivi d'un message d'erreur
            http_response_code(401);
            $erreur = 'Votre mot de passe doit contenir au moins 6 caractères';
          }
        }
        else {//sinon je renvois vers un code http 401 suivi d'un message d'erreur
          http_response_code(401);
          $erreur = 'Votre login est déja utilisé';
        }
      }
      else{ //sinon je renvois vers un code http 401 suivi d'un message d'erreur
        http_response_code(401);
        $erreur = "Votre adresse mail n'est pas valide!";
      }

    }
    else{//sinon je renvois vers un code http 401 suivi d'un message d'erreur
      http_response_code(401);
      $erreur = 'Tous les champs doivent être complétés';
    }
  }
// FIN_INSCRIPTION
  ?>
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Inscription</title>
      <?php include 'css/style.php'; ?>
    </head>
    <body>
      <?php include 'header.php'; ?>
      <div align='center'>
        <h2>Inscription</h2>
        <h4>En tant que : Entreprise</h4>
          <br><br>
        <form action="/" method="post">
          <label for="login">Login :</label><br>
          <input id="login" type="text" name="login" placeholder="Votre login" value=""><br>
          <br>
          <label for="email">Email :</label><br>
          <input id="email" type="email" name="email" placeholder="Votre email" value=""> <br>
          <br>
          <label for="mdp">Mot de passe :</label><br>
          <input id="mdp" type="password" name="mdp" placeholder="Votre mot de passe"><br>
          <br>
          <input type="submit" name="bouton" value="S'inscrire"><br>
        </form>
        <br>
          <?php if (isset($erreur)){
              echo $erreur;
          }
          include 'js/script.php';
          ?>
    </body>
  </html>
