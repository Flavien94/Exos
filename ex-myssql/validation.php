 <?php
 $pseudo=$_POST['pseudo'];
 $tweet=$_POST['tweet'];
 include('connect.php')
 $send = $bdd->query("INSERT INTO tweet VALUES('','$pseudo','$tweet')");
 ?>
  <?php
  header('Location: index.php');
  ?>
