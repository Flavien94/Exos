<?php
include('connect.php');
$reponse = $bdd->query('SELECT * FROM profil ORDER BY id DESC');
?>
<header>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <div class="sonic"></div>
        <a class="navbar-brand" href="index.php">Holo Life</a>
      <ul class="nav navbar-nav">
        <li><a href="form.php">Tweet</a></li>
        <?php while ($donnees = $reponse->fetch()) { ?>
        <li><a href="view.php?id=<?php echo $donnees['id']?>"><?php echo $donnees['nom']?></a></li>
        <?php } ?>
      </ul>
    </div>
  </nav>
</header>
