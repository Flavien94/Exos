<?php
$uri = $_SERVER['REQUEST_URI'];
switch ($uri){
  case '/':
  include 'pages/home.php';
  break;
  case '/signup_candidat':
  include 'login/signup_candidat.php';
  break;
  case '/signup_ctf':
  include 'login/signup_ctf.php';
  break;
  case '/signup_entreprise':
  include 'login/signup_entreprise.php';
  break;
  case '/signin':
  include 'login/signin.php';
  break;
  case '/calendar':
  include 'calendar.php';
  break;
  case '/emplois':
  include 'pages/emplois.php';
  break;
}
?>
