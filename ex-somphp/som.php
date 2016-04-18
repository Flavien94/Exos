#!usr/bin/php

<?php
function som($arr){
  $som=0;
  foreach ($arr as $item) {
    $som += $item;
  }
  return $som;
}
$sum = array(1, 4, 3);
echo som($test) ."\n";
?>

<?php
$sum = array(1, 2, 3);
echo array_sum($sum)."\n";
?>
