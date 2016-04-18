<?php include 'sql_connect.php'; ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Calendrier</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  </head>
  <body>
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <?php include 'traitement/supprevent.php'; ?>
    </div>
    <div class="col-md-4">
      <?php include 'php/calendrier.php'; ?>
    </div>
    <div class="col-md-4">
      <?php include 'php/post_event.php'; ?>
    </div>

  </div>
</div>
  </body>
</html>
