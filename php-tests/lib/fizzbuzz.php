<?php
namespace Lib\fizzbuzz;
$numb = $argv[1];
function hello ($numb){
  if ($numb % 3 === 0 && $numb % 5 === 0 ) {
    print_r("FizzBuzz\n");
  }
  else if ($numb % 3 === 0) {
    print_r("Fizz\n");
  }
  else if ($numb % 5 === 0 ) {
    print_r("Buzz\n");
  }
}
 ?>
