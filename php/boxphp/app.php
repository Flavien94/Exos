 <?php
 require_once("MyLib/Physics.php");
 use MyLib\Physics\Box;
 $haut = $_GET["h"];
 $larg = $_GET["l"];
 $prof = $_GET["p"];
 $box = new Box($haut,$larg,$prof);
 echo 'MyBox : <br/><br/>';
 echo "Volume : ",$box->getVolume(),"<br/>";
 echo "Superficie : ",$box->getTotalArea(),"<br/>";
 echo "Dimension : ",$box->getMaxDimension();
  ?>
