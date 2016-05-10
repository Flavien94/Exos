<?php
$reponse = $bdd->query('SELECT * FROM tweet ORDER BY id DESC;');
 while ($donnees = $reponse->fetch()) {
?>
<?php
if ($donnees['pseudo'] === 'Juliette'){
  ?>
<h4><?php echo  $donnees['pseudo'] ?></h4>
<h6>@<?php echo $donnees['pseudo'] ?></h6>
<p class="tweet"><?php echo $donnees['tweet'] ?></p>
<img src="tweet.png" alt="" />
<img class="photo" src="juliette.jpg" alt="" />
<?php
}
else if ($donnees['pseudo'] === 'Kévin'|| $donnees['pseudo'] === 'Kevin' ){
  ?>
<h4><?php echo  $donnees['pseudo'] ?></h4>
<h6>@<?php echo $donnees['pseudo'] ?></h6>
<p class="tweet"><?php echo $donnees['tweet'] ?></p>
<img src="tweet.png" alt="" />
<img class="photo" src="kevin.jpg" alt="" />
<?php
}
else { ?>
  <h4><?php echo  $donnees['pseudo'] ?></h4>
  <h6>@<?php echo $donnees['pseudo'] ?></h6>
  <p class="tweet"><?php echo $donnees['tweet'] ?></p>
  <img src="tweet.png" alt="" />
  <img class="photo" src="pp.png" alt="" />
  <?php
}

?>

<?php
 }
  $reponse -> closeCursor();
 ?>
