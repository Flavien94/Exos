<?php
namespace MyLib\Physics;
class Box {
  private $hauteur;
  private $largeur;
  private $profondeur;

  function __construct($haut,$larg,$prof) {
     $this->hauteur = $haut;
     $this->largeur = $larg;
     $this->profondeur = $prof;
}
  public function getVolume(){
    return $this->hauteur * $this->largeur * $this->profondeur;
  }
  public function getTotalArea(){
    $lp = $this->largeur * $this->profondeur;
    $ph = $this->profondeur * $this->hauteur;
    $lh = $this->largeur * $this->hauteur;
    return 2 * ($lp + $ph + $lh);
  }
  public function getMaxDimension(){
    return max($this->largeur,$this->profondeur,$this->hauteur);
  }
}
 ?>
