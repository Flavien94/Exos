<?php
   session_start();//je demarre la session
   if (isset($_POST['boutonconnect'])) { // si je clique sur mon input de nom boutonconnect
     // Je reprend les valeurs de mon formulaires en suprimant tous les caracteres html et crypt mon mdp
     $loginconnect = htmlspecialchars($_POST['loginconnect']);
     $mdpconnect = sha1($_POST['mdpconnect']);
     if (!empty($loginconnect) AND !empty($mdpconnect)){// Si les inputs loginconnect,mdpconnect ne sont pas vide
       $requser = $bdd->prepare("SELECT * FROM user WHERE login = ? AND password = ?");// Je prend recupere les login et mdp de la table user
       $requser->execute(array($loginconnect,$mdpconnect));//qui = au login et mdp de l'input
       $userexist = $requser->rowCount();//et compte le nombre de rangée
       if ($userexist == 1) {//si le nombre de colonne = à 1
         $userinfo = $requser->fetch();
         $_SESSION['id'] = $userinfo['id'];
         $_SESSION['login'] = $userinfo['login'];
         $erreurco = 'Connexion réussi';
         header('Location:wall');
         //J'affiche un message de confirmation.
       }
       else {//sinon je renvois vers un code http 401 suivi d'un message d'erreur
         http_response_code(401);
         $erreurco = 'Mot de passe incorrect';
       }
     }
     else { //sinon je renvois vers un code http 401 suivi d'un message d'erreur
       http_response_code(401);
       $erreurco = 'Tous les champs doivent être complétés';
     }
   }
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

  <div align="center">
    <h2>Connexion</h2>
      <br><br>
    <form action="/" method="post">
      <label for="login">Login :</label><br>
      <input id="login" type="text" name="loginconnect" placeholder="Votre login" value=""><br>
      <br>
      <label for="mdp">Mot de passe :</label><br>
      <input id="mdp" type="password" name="mdpconnect" placeholder="Votre mot de passe"><br>
      <br>
      <input class='buton' type="submit" name="boutonconnect" value="Se connecter"><br>
    </form>
  </div>
  <br>
    <?php if (isset($erreurco)){
        echo $erreurco;
    }
    ?>
  </div>
  <?php include 'js/script.php'; ?>
</body>
</html>
