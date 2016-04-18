<?php
    try {
      $bdd = new PDO('mysql:host=localhost;dbname=test_medinjob;charset=utf8', 'root', ';');
      } catch (Exception $e) {
      die('Erreur !: ' .$e->getMessage());
    }

?>
