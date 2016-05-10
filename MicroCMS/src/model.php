<?php
function getArticles(){
require 'database.php';
$articles = $bdd->query('select * from t_article order by art_id desc');
return $articles;
}
 ?>
