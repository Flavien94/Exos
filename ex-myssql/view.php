<?php
include('link.php');
include('connect.php');
$reponse = $bdd->query('SELECT * FROM profil WHERE id=' . intval($_GET['id']));
while ($donnees = $reponse->fetch()) {?>
  <div class="col-md-4 profil">
    <h1><?php echo $donnees['nom']; ?> </h1>
    <img src="<?php echo $donnees['image']; ?>"/>
    <p><?php echo $donnees['description'] ?></p>*
  </div>
  <?php
}
include('header.php');
include('footer.php');
?>
