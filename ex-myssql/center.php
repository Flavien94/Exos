<?php
include('connect.php');
$reponse = $bdd->query('SELECT * FROM profil');
 while ($donnees = $reponse->fetch()) {
?>

 <div class="col-md-4">
   <h1><?php echo $donnees['nom']; ?> </h1>
   <img src="<?php echo $donnees['image']; ?>"/>
   <p><?php echo $donnees['description'] ?></p>
   <a href="view.php?id=<?php echo $donnees['id']?>">Voir le profil</a>
 </div>

<?php
 }
  $reponse -> closeCursor();
 ?>
